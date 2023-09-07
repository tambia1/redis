import { Pages } from "@pages/Pages.types";
import { version } from "@src/../package.json";
import { Button } from "@src/components/button/Button";
import { content } from "@src/locale/en";
import { useNavigate } from "react-router-dom";
import { PageContainer, ScreenContainer } from "../pageHome/PageHome.styles";
import * as S from "./pageNotFound.styles";

export const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<PageContainer>
			<ScreenContainer>
				<S.Container>
					<S.Box>
						<S.Title>Page Not Found</S.Title>
						<Button onClick={() => navigate(Pages.login)}>Login</Button>
					</S.Box>
				</S.Container>
				<S.Version>{content.all.version.replace(/\{version\}/g, version)}</S.Version>
			</ScreenContainer>
		</PageContainer>
	);
};
