import { ITheme, ThemeName, themes } from "@src/themes/Theme.types";
import { Container } from "./ScreenThemes.styles";
import { useTheme } from "@src/components/theme/hooks/UseTheme";

export interface Props {}

export const ScreenThemes = (props: Props) => {
	const { theme, setTheme } = useTheme();

	const onChangeTheme = (theme: ITheme) => {
		setTheme(theme);
	};

	return (
		<Container>
			{Object.keys(themes).map((themeName) => (
				<div key={themeName}>
					<input type="radio" id={themeName} checked={themeName === theme.themeName} onChange={() => onChangeTheme(themes[themeName as ThemeName])} />
					<label htmlFor={themeName}>{themeName}</label>
				</div>
			))}
		</Container>
	);
};
