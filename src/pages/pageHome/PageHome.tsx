import { version } from "@src/../package.json";
import { useState } from "react";
import * as S from "./PageHome.styles";
import { PageItem, PageKey } from "./PageHome.types";
import { PageHeader } from "./components/pageHeader/PageHeader";
import { PageMenu } from "./components/pageMenu/PageMenu";
import { PageScreen } from "./components/pageScreen/pageScreen";
import { useTheme } from "@src/components/theme/hooks/UseTheme";
import { SwitchState } from "@src/components/switch/Switch.styles";
import { themes } from "@src/themes/Theme.types";
import { Icon } from "@src/components/icon/Icon";
import { Switch } from "@src/components/switch/Switch";
import { content } from "@src/locale/en";

interface Props {
	pageKey: PageKey;
}

export const PageHome = ({ pageKey }: Props) => {
	const { theme, setTheme } = useTheme();
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleOnChange = (switchState: SwitchState) => {
		setTheme(switchState === "left" ? themes.light : themes.dark);
	};

	const onClickButtonCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<S.PageContainer>
			<S.MenuContainer $isCollapsed={isCollapsed}>
				<PageMenu selectedItem={PageItem[pageKey].menuItem} />
				<S.ButtonCollapse onClick={onClickButtonCollapse} $isCollapsed={isCollapsed}>
					{isCollapsed ? "+" : "-"}
				</S.ButtonCollapse>
			</S.MenuContainer>

			<S.ScreenContainer>
				<PageHeader>{PageItem[pageKey].pageHeader}</PageHeader>
				<PageScreen>{PageItem[pageKey].pageScreen}</PageScreen>
			</S.ScreenContainer>

			<S.ThemeMode>
				<Icon iconName="sun" />
				<Switch onChange={handleOnChange} state={theme.themeName === "light" ? "left" : "right"} />
				<Icon iconName="moon" />
			</S.ThemeMode>
			<S.Version>{content.all.version.replace(/\{version\}/g, version)}</S.Version>
		</S.PageContainer>
	);
};
