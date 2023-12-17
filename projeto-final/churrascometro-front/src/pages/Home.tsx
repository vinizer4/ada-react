import { useContext, useState } from 'react';
import { Card } from '../components/Card';
import { Theme } from '../components/Theme';
import '../styles.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

export const Home = () => {
	const { isDark } = useContext(ThemeContext);
	const [homem, setHomem] = useState(0);
	const [mulher, setMulher] = useState(0);
	const [crianca, setCrianca] = useState(0);

	const handleSumOne = (char: string) => {
		switch (char) {
			case 'h':
				setHomem((current) => current + 1);
				break;
			case 'm':
				setMulher((current) => current + 1);
				break;
			case 'c':
				setCrianca((current) => current + 1);
				break;
		}
	};

	const handleMinorOne = (char: string) => {
		switch (char) {
			case 'h':
				homem > 0 && setHomem((current) => current - 1);
				break;
			case 'm':
				mulher > 0 && setMulher((current) => current - 1);
				break;
			case 'c':
				crianca > 0 && setCrianca((current) => current - 1);
				break;
		}
	};

	return (
		<div className={isDark ? 'container' : 'container light-theme'}>
			<h1>Churrascometro</h1>
			<div className="calculator">
				<h3 style={{ marginBottom: '1rem' }}>Precisa de uma ajudinha com o churrasco? :)</h3>
				<h3>Quantas pessoas vão participar?</h3>
				<div className="row-first">
					<Card
						person="Homem"
						state={homem}
						sumOne={() => handleSumOne('h')}
						minorOne={() => handleMinorOne('h')}
					/>
					<Card
						person="Mulher"
						state={mulher}
						sumOne={() => handleSumOne('m')}
						minorOne={() => handleMinorOne('m')}
					/>
					<Card
						person="Criança"
						state={crianca}
						sumOne={() => handleSumOne('c')}
						minorOne={() => handleMinorOne('c')}
					/>
				</div>
				<div className="row">
					<div>
						<p
							id="no-input"
							style={{ visibility: 'hidden' }}
						>
							Por favor, selecione a quantidade de pessoas!
						</p>
						<Link
							to={`/total?homem=${homem}&mulher=${mulher}&crianca=${crianca}`}
							className="default-button"
						>
							Calcular
						</Link>
					</div>
				</div>
				<Theme />
			</div>
		</div>
	);
};
