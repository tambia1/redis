import { AnimationShowFrames } from "@src/styles/globalStyles";
import { ITheme } from "@src/themes/Theme.types";
import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	flex-direction: column;
	gap: 0.5rem;
`;

export const WorldMapContainer = styled.div`
	position: relative;
	width: auto;
	height: auto;
	display: flex;
	justify-content: center;
`;

export const Title = styled.div`
	color: ${({ theme }: { theme: ITheme }) => theme.color.onBackground};
	font-size: ${({ theme }: { theme: ITheme }) => theme.size.m};
`;

export const Cost = styled.div`
	color: ${({ theme }: { theme: ITheme }) => theme.color.onBackground};
	font-size: ${({ theme }: { theme: ITheme }) => theme.size.m};
	font-weight: bold;
`;

export const WorldMap = styled.div`
	position: relative;
	width: 700px;
	height: 300px;

	background-image: url(${({ theme }: { theme: ITheme }) => theme.images.map});
	background-repeat: no-repeat;
	background-size: 100% 100%;
`;

export const WorldMapPin = styled.div<{ $isSelected: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100%;
	border: solid 0.2rem ${({ theme, $isSelected }: { theme: ITheme; $isSelected: boolean }) => ($isSelected ? theme.color.primary : theme.color.secondary)};
	border-radius: 100%;
	background: linear-gradient(-45deg, #03e5b7 0%, #037ade 100%);
	font-size: 0%;
	color: #000000;
	white-space: pre-wrap;
	transform: translate(-50%, -50%);
	transition: all 0.3s ease;

	${({ $isSelected }) =>
		$isSelected &&
		css`
			font-size: 80%;
			width: 30px;
			height: 30px;
		`}

	&:hover {
		font-size: 100%;
		width: 40px;
		height: 40px;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Servers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	position: relative;
`;

export const Server = styled.div`
	display: flex;
	animation: ${AnimationShowFrames} 0.3s ease-in 0s 1 normal both running;
`;

export const Plans = styled.div`
	width: auto;
	height: 15rem;
`;

export const PlanName = styled.span``;

export const PlanPrice = styled.span<{ $isEnabled: boolean }>`
	font-weight: bold;
	font-style: italic;
	color: ${({ theme, $isEnabled }: { theme: ITheme; $isEnabled: boolean }) => ($isEnabled ? theme.color.success : theme.color.error)};
`;

export const Plan = styled.div<{ $isEnabled: boolean }>`
	transition: all 0.3s ease;
	color: ${({ theme, $isEnabled }: { theme: ITheme; $isEnabled: boolean }) => ($isEnabled ? theme.color.onBackground : theme.color.secondary)};
`;

export const Tips = styled.div`
	width: auto;
	height: 100%;
	display: contents;
`;

export const Tip = styled.div`
	color: ${({ theme }: { theme: ITheme }) => theme.color.onBackground};
	white-space: pre-wrap;
	animation: ${AnimationShowFrames} 0.3s ease-in 0s 1 normal both running;
`;

export const WorldMapCanvas = styled.div`
	width: 700px;
	height: 300px;
	position: absolute;
	z-index: 1;
	pointer-events: none;
`;

export const Canvas = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	pointer-events: none;
`;

export const Mark1 = styled.span`
	color: lightgreen;
`;

export const Mark2 = styled.span`
	color: cyan;
`;
