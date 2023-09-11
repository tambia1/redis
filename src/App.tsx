import { PageHome } from "@pages/pageHome/PageHome";
import { PageLogin } from "@pages/pageLogin/PageLogin";
import { PageNotFound } from "@pages/pageNotFound/PageNotFound";
import { Pages } from "@pages/Pages.types";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import { Theme } from "./components/theme/Theme";

export const App = () => {
	return (
		<Theme>
			<GlobalStyle />
			<BrowserRouter basename="/redis">
				<Routes>
					<Route path={Pages.notFound} element={<PageNotFound />} />
					<Route path={Pages.login} element={<PageLogin />} />
					<Route path={Pages.home.dataCenter} element={<PageHome pageKey={Pages.home.dataCenter} />} />
					<Route path={Pages.home.themes} element={<PageHome pageKey={Pages.home.themes} />} />
					<Route path={Pages.home.about} element={<PageHome pageKey={Pages.home.about} />} />
				</Routes>
			</BrowserRouter>
		</Theme>
	);
};
