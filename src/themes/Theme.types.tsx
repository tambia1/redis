import { themeDark } from "./ThemeDark";
import { themeLight } from "./ThemeLight";

export const themes: { [key in ThemeName]: ITheme } = { light: themeLight, dark: themeDark };

export type ThemeName = "light" | "dark";

export interface ITheme {
	themeName: ThemeName;

	color: {
		background: string;
		onBackground: string;
		primary: string;
		onPrimary: string;
		secondary: string;
		onSecondary: string;
		error: string;
		onError: string;
		success: string;
		onSuccess: string;
	};

	size: {
		xs: string;
		s: string;
		m: string;
		l: string;
		xl: string;
	};

	images: {
		mainBackground: string;
		map: string;
	};
}
