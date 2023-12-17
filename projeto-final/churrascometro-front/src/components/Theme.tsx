import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const Theme = () => {
	const { isDark, handleChangeTheme } = useContext(ThemeContext);

	return (
		<div className="theme-container" onClick={handleChangeTheme}>
			<label id="label-theme-text" htmlFor="input-theme">
				{isDark ? 'Tema Escuro' : 'Tema Claro'}
			</label>
			<label className="switch">
				<input
					type="checkbox"
					id="input-theme"
					checked={isDark}
					onChange={handleChangeTheme}
				/>
				<span className="slider"></span>
			</label>
		</div>
	);
};
