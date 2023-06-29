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

	background-color: #ffffff;
`;
export const MainLogoArea = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	height: 65vh;

	display: flex;
	align-items: center;
	justify-content: center;

	// background-color: ${tokens.colors.grey_50};
`;

export const MainLogo = styled.div`
	width: 108px;
	height: 73px;

	background-image: url('/mainLogo/mainScreenLogo.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;

export const MainBtnWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 800px;
	height: 25vh;
`;

export const MainBtn = styled.button`
	width: 90%;
	height: 50px;
	max-width: 760px;

	margin: auto;
	margin-bottom: 2vh;
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 10px;
	border: 1px solid ${tokens.colors.green_500};

	${tokens.typography.subtitle_1};

	${(props) =>
		props.type == 'signup'
			? `background-color: ${tokens.colors.green_500}; color: white;`
			: `background-color: white; color: ${tokens.colors.green_500};`}
`;
