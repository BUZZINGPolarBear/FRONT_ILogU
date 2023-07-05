import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopNavBar = styled.div`
	position: fixed;
	width: 100vw;
	max-width: 800px;
	height: 6vh;
	min-height: 55px;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	color: ${tokens.colors.grey_900};
	${tokens.typography.subtitle_1_SB};
	border-bottom: solid 1px ${tokens.colors.grey_50};
	background-color: #ffffff;
	z-index: 9999;
`;

export const TopNavTitle = styled.span`
	position: absolute;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MainWrapper = styled.div`
	position: absolute;
	width: 95vw;
	margin-left: 2.5vw;
	margin-right: 2.5vw;

	padding-top: 25px;
	max-width: 760px;
	min-height: 100vh;

	top: 6vh;

	background-color: #ffffff;
`;
