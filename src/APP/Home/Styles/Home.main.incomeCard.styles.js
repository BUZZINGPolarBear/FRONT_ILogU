import styled from "styled-components";
import * as tokens from "../../../tokens";

export const HomeMainIncomeCard = styled.div`
	width: 100%;
	height: fit-content;
	margin-bottom: 1.5vh;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: white;

	position: relative;
	z-index: 10;
`;

export const HomeIncomeInfoText = styled.div`
	width: 60%;
	height: 25%;

	margin: auto;
	margin-bottom: 6%;
	display: flex;
	justify-content: space-between;

	// background-color: antiquewhite;
`;

export const HomeIncomeWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 15%;
	margin: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	// background-color: antiquewhite;
`;

export const HomeIncomeInnerWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 45%;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: white;
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

export const HomeIncomeDetailViewBtn = styled.button`
	width: 90%;
	height: 5vh;
	margin: auto;
	cursor: pointer;
	border: 0;
	color: white;
	${tokens.typography.body_2}
	background-color: ${tokens.colors.green_500};
	border-radius: 10px;
`;
