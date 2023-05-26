import styled from "styled-components";
import * as tokens from "../../../tokens";

export const HomeMainScreen = styled.div`
	width: 100%;
	max-width: 800px;
	// min-height: 100vh;
	height: fit-content;
`;

export const HomeMainTopUserInfo = styled.div`
	width: 100%;
	max-width: 800px;
	height: 20vh;

	display: flex;
	justify-content: space-between;
	position: relative;

	background-color: ${tokens.colors.green_500};
	z-index: 0;
`;

export const HomeMainTopInfoArea = styled.div`
	width: 44%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${tokens.typography.subtitle_2}
	color: white;
	position: relative;
`;

export const DivInnerContainer = styled.div`
	width: 100%;
	max-width: 800px;
	min-height: 95vh;
	height: fit-content;
	top: 18vh;
	position: absolute;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	padding-bottom: 10vh;

	background-color: ${tokens.colors.grey_50};
	z-index: 2;
`;

export const HomeMainCardTitle = styled.div`
	width: 90%;
	height: 10%;
	position: relative;
	text-align: left;

	${tokens.typography.subtitle_1_SB}
`;
