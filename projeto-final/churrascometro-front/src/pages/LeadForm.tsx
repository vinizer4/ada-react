import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Theme } from '../components/Theme';
import { ThemeContext } from '../context/ThemeContext';
import { InputForm } from '../components/leadForm/InputForm';
import { IFormData } from '../interfaces/IFormData';
import { Link, useNavigate } from 'react-router-dom';
import {LeadService} from "../service/lead.service.ts";

export const LeadForm = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const data = localStorage.getItem('formFilled');

		if (data) {
			navigate('/people');
		}
	}, [navigate]);

	const { isDark } = useContext(ThemeContext);
	const [formData, setFormData] = useState<IFormData>({
		name: '',
		email: '',
		postalCode: '',
		optIn: true,
	});

	const handleInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const fieldName = ev.target.name;
		const fieldValue = ev.target.value;
		if (fieldName === 'optIn') {
			setFormData((current) => {
				return {
					...current,
					['optIn']: !formData.optIn,
				};
			});
		} else {
			setFormData((current) => {
				return {
					...current,
					[fieldName]: fieldValue,
				};
			});
		}
	};

	const verifyEmptyValue = () => {
		const values = Object.values(formData);
		const isEmpty = values.some(value => {
			return typeof value === 'string' && value.trim() === '';
		});

		if (isEmpty) {
			alert('Preencha todos os campos!');
			return true;
		}

		return false;
	};


	const handleSubmit = async () => {
		const isFormEmpty = verifyEmptyValue();
		if (isFormEmpty) return;

		LeadService.createLead(formData)
			.then(() => {
				localStorage.setItem('formFilled', 'true');
				navigate('/people');
			})
			.catch((error) => {
				console.log(error)
			});
	};



	return (
		<div className={isDark ? 'container' : 'container light-theme'}>
			<h1>Churrascômetro</h1>
			<div className="calculator">
				<div className="row">
					<div className="input-form-group">
						<p id="header-form">
							Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!
						</p>
						<form>
							<InputForm
								type="text"
								id="name"
								name="name"
								placeholder="Digite seu nome"
								error="Por favor, insira um nome válido!"
								onChange={(ev: ChangeEvent<HTMLInputElement>) => handleInputChange(ev)}
							/>
							<InputForm
								type="email"
								id="email"
								name="email"
								placeholder="Digite seu email"
								error="Por favor, insira um e-mail válido!"
								onChange={(ev: ChangeEvent<HTMLInputElement>) => handleInputChange(ev)}
							/>
							<InputForm
								type="number"
								id="postal-code"
								name="postalCode"
								placeholder="Digite seu CEP"
								error="Por favor, insira um CEP válido!"
								onChange={(ev: ChangeEvent<HTMLInputElement>) => handleInputChange(ev)}
							/>
							<div id="consent-input">
								<input
									type="checkbox"
									id="consent-checkbox"
									name="optIn"
									onChange={(ev: ChangeEvent<HTMLInputElement>) => handleInputChange(ev)}
									defaultChecked={formData.optIn}
								/>
								<label
									htmlFor="consent-checkbox"
									id="consent-label"
								>
									Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.
								</label>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div>
						<div
							className="default-button"
							onClick={() => handleSubmit()}
						>
							Cadastrar
						</div>
					</div>
					<div id="nav-container">
						<Link
							id="skip-register"
							to={'/people'}
						>
							Pular
						</Link>
					</div>
				</div>
			</div>
			<Theme />
		</div>
	);
};
