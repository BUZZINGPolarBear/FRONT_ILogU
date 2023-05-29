import styled from "styled-components";
import * as tokens from "../../../tokens";

export const TopNavBar = styled.div`
	width: 100%;
	max-width: 800px;
	height: 5.5vh;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: space-around;
	z-index: 9999;
	background-color: white;
`;

export const TopNavBarItem = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	// background-color: ${tokens.colors.grey_500};
`;
export const TopNavBarItemText = styled.div`
	width: 60%;
	height: 100%;
	color: ${tokens.typography.grey_300};
	${tokens.typography.subtitle_3};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// background-color: white;
`;
export const FeedMainScreen = styled.div`
	width: 100%;
	min-height: 100vh;
	height: fit-content;
	position: relative;
	top: 12vh;
	padding-bottom: 5vh;
	// background-color: ${tokens.colors.grey_500};
`;

export const TopNavBarCategoryItemArea = styled.div`
	width: fit-content;
	max-width: 800px;
	position: fixed;
	top: 0;
	height: 11.5vh;

	display: flex;
	align-items: flex-end;
	justify-content: space-around;
	padding: 1% 5%;
	background-color: white;

	overflow-x: scroll;

	z-index: 9998;
`;

export const TopNavBarCategoryItems = styled.div`
	width: 75px;
	height: 35px;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
	${tokens.typography.subtitle_2};
	color: ${tokens.colors.grey_400};
	background-color: rgba(192, 192, 192, 0.1);
`;
