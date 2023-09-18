import { ToolBar, ToolBarItem } from "@src/pages/pageHome/components/pageHeader/components/toolBar/ToolBar";
import * as S from "./PageHeader.styles";
interface Props {
	children: React.ReactNode;
}

export const PageHeader = ({ children }: Props) => {
	return (
		<ToolBar>
			<ToolBarItem>
				<S.Title>{children}</S.Title>
			</ToolBarItem>
		</ToolBar>
	);
};
