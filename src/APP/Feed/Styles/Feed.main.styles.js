import styled from "styled-components";
import * as tokens from "../../../tokens";

export const TopNavBar = styled.div`
	width: 100%;
	max-width: 800px;
	height: 8vh;
	position: fixed;
	top: 0;

	display: flex;
	justify-content: space-around;

	// background-color: ${tokens.colors.green_500};
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

	top: 8vh;

	// background-color: ${tokens.colors.grey_50};
`;
