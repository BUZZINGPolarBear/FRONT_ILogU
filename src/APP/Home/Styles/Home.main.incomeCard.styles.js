import styled from "styled-components";
import * as tokens from "../../../tokens";

export const HomeMainIncomeCard = styled.div`
	width: 100%;
	height: 30vh;
	margin-bottom: 3vh;
	border-radius: 20px;
	background-color: white;

	z-index: 1;
`;

export const HomeIncomeInfoText = styled.div`
	width: 60%;
	height: 25%;

	margin: auto;
	margin-bottom: 2vh;
	display: flex;
	justify-content: space-around;

	// background-color: antiquewhite;
`;

export const HomeIncomeInnerWrapper = styled.div`
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const HomeIncomeInfoTextTitle = styled.div`
	width: 100%;
	height: 15%;
	position: relative;
	${tokens.typography.caption};
	color: ${tokens.colors.grey_300};
	text-align: left;
`;

export const HomeIncomeInfoTextContent = styled.div`
	width: 100%;
	height: 60%;
	position: relative;

	color: ${tokens.colors.grey_300};
	${tokens.typography.caption}
	text-align: left;
`;

export const HomeIncomeInfoHeavyText = styled.span`
	${tokens.typography.subtitle_1_SB};
	color: ${tokens.colors.grey_500};
`;
