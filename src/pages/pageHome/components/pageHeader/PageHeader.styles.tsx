import { ITheme } from "@src/themes/Theme.types";
import styled from "styled-components";

export const Title = styled.div`
	color: ${({ theme }: { theme: ITheme }) => theme.color.onBackground};
	font-size: ${({ theme }: { theme: ITheme }) => theme.size.m};
`;
