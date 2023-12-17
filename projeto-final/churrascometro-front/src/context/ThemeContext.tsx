import {ReactNode, createContext, useState, useEffect} from 'react';

interface IThemeContextProps {
	isDark: boolean;
	handleChangeTheme: () => void;
}

const ThemeContext = createContext<IThemeContextProps>(null!);

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		document.body.className = isDark ? 'dark-theme' : 'light-theme';
	}, [isDark]);

	const handleChangeTheme = () => {
		setIsDark((current) => !current);
	};

	return <ThemeContext.Provider value={{ isDark, handleChangeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
