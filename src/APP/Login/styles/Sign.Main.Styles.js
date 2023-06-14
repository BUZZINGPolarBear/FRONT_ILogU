import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const MainScreenWrapper = styled.div`
	min-width: 100vw;
	max-width: 800px;
	min-height: 100vh;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-color: ${tokens.colors.green_50};
`;
export const MainLogoArea = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	height: 65vh;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${tokens.colors.grey_50};
`;

export const MainBtnWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 25vh;

	background-color: ${tokens.colors.green_100};
`;
