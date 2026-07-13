import { createContext, useContext } from 'react';

export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
};

export const THEME_META = {
	[THEMES.LIGHT]: { label: 'Light', icon: '☀️' },
	[THEMES.DARK]: { label: 'Dark', icon: '🌙' },
};

export const ThemeContext = createContext(null);

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
	return ctx;
}
