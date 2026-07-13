import { useState, useEffect } from 'react';
import { ThemeContext, THEMES } from '../../hooks/useTheme';

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || THEMES.DARK;
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
