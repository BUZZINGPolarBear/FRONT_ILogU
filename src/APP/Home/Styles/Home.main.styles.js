import styled from "styled-components";
import * as tokens from "../../../tokens";

export const HomeMainScreen = styled.div`
	width: 100%;

	min-height: 100vh;
	height: fit-content;
`;

export const HomeMainTopUserInfo = styled.div`
	width: 100%;
	height: 17vh;

	display: flex;
	justify-content: space-between;
	position: relative;

	background-color: ${tokens.colors.green_500};
`;

export const HomeMainTopInfoArea = styled.div`
	width: 44vw;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${tokens.typography.subtitle_2}
	color: white;
	position: relative;
`;

export const DivFullImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
`;
