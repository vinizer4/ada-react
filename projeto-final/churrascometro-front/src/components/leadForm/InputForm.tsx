import { IInputLeadForm } from '../../interfaces/IInputLeadForm';

export const InputForm = ({ type, id, placeholder, name, onChange }: IInputLeadForm) => {
	return (
		<>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				className="input-form"
				onChange={onChange}
			/>
		</>
	);
};
