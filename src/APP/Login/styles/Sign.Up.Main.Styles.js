import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopNavBar = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	max-width: 800px;
	height: 7vh;

	border-bottom: solid 1px ${tokens.colors.grey_50};
	box-shadow: 0px 5px 3px 0 rgba(0, 0, 0, 0.01);
	background-color: white;
	z-index: 10;
`;

export const TopBackwardArea = styled.div`
	width: 15%;
	height: 7vh;
	position: fixed;

	background-image: url('/Feed/writeFeed/backward.svg');
	background-repeat: no-repeat;
	background-position: center;

	background-color: #fffff;
	z-index: 9999;
`;

export const SignUpMain = styled.div`
	position: fixed;
	top: 7vh;
	padding: 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 100vw;
	max-width: 800px;
	min-height: 100vh;
	margin-bottom: 10vh;

	background-color: rgb(252, 252, 252);
`;

export const TopTextArea = styled.div`
	width: 100%;
	max-width: 800px;
	height: 7vh;
	position: fixed;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #000000;
	${tokens.typography.subtitle_1_SB};

	z-index: 9990;
`;

export const MainTitleWrapper = styled.div`
	position: relative;
	width: 95%;
	height: 5vh;
	max-height: 60px;

	margin: auto;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
	// background-color: antiquewhite;
`;

export const MainContentWrapper = styled.div`
	position: relative;
	width: 95%;
	height: 82vh;

	margin: auto;
`;

export const MainTitle = styled.h1`
	${tokens.typography.headline_5};
`;

export const MainSubTitle = styled.p`
	color: ${tokens.colors.grey_300};
	${tokens.typography.caption}
`;

export const MainQuestionWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 10%;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	// background-color: antiquewhite;
`;

export const CheckBoxWrapper = styled.div`
	width: 20px;
	height: 20px;

	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.isSelected == false
			? `background-image: url('/SignIn/checkbox_unclicked.svg')`
			: `background-image: url('/SignIn/checkbox_clicked.svg')`};

	background-size: cover;
	background-position: center;
`;

export const CheckBoxTitle = styled.div`
	width: 85%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	${(props) =>
		props.is_main == true
			? tokens.typography.SUIT
			: tokens.typography.SUIT_sub};
`;
