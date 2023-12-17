import { Link, useSearchParams } from 'react-router-dom';
import { Theme } from '../components/Theme';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { InputFood } from '../components/InputFood';
import {CalculatorService} from "../service/calculadora.service.ts";

export const Calculator = () => {
	const [listFood, setListFood] = useState([]);

	const { isDark } = useContext(ThemeContext);
	const [query] = useSearchParams();
	const qtHomem = Number(query.get('homem'));
	const qtMulher = Number(query.get('mulher'));
	const qtCrianca = Number(query.get('crianca'));

	useEffect(() => {
		CalculatorService.calculate(qtHomem, qtMulher, qtCrianca)
			.then(data => setListFood(data)).catch((error) => {
				console.log(error)
			});
	}, [qtHomem, qtMulher, qtCrianca]);


	return (
		<div className={isDark ? 'container' : 'container light-theme'}>
			<h1>Churrascômetro</h1>
			<div className="calculator">
				<div>
					<div className="result-total-guest">
						<p>Confira a lista para o seu churrasco!</p>
						<p id="total-guest">{qtHomem + qtMulher + qtCrianca}</p>
						<span className="guest-list">{qtHomem} homem</span>
						<span className="guest-list">{qtMulher} mulheres</span>
						<span className="guest-list">{qtCrianca} crianças</span>
					</div>
					<div className="input-group-result">
						<div id="header-result">
							<p>ITEM</p>
							<p>QUANTIDADE</p>
						</div>
						<ul className="results">
							{listFood &&
								listFood.map((inputFood: { food: string; quantity: string }) => (
									<InputFood
										key={inputFood.food}
										food={inputFood.food}
										formatWeight={inputFood.quantity}
									/>
								))}
						</ul>
					</div>
				</div>
				<div className="row">
					<div>
						<Link
							to="/"
							className="default-button"
						>
							Novo cálculo
						</Link>
					</div>
				</div>
			</div>
			<Theme />
		</div>
	);
};
