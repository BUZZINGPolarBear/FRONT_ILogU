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
	z-index: 20;
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
	${(props) =>
		props.isChattingState == true
			? `position: absolute; min-height: 140vh;`
			: `position: fixed; min-height: 100vh;`};

	top: 7vh;
	padding: 20px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 100vw;
	max-width: 800px;

	margin-bottom: 10vh;
	padding-bottom: 11vh;
	background-color: rgb(252, 252, 252);
	z-index: 10;
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
	height: 48vh;

	margin: auto;
`;

export const BtnWrapper = styled.div`
	position: relative;
	width: 95%;
	height: 55px;

	margin: auto;
	margin-bottom: 10vh;
	background-color: antiquewhite;

	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	color: #ffffff;
	${tokens.typography.subtitle_1}
	${(props) =>
		props.is_btn_available == true
			? `background-color: ${tokens.colors.green_500}; cursor: pointer;`
			: `background-color: ${tokens.colors.grey_100}; cursor: not-allowed;`}
`;

export const MainTitle = styled.h1`
	${tokens.typography.headline_5};
`;

export const MainSubTitle = styled.p`
	color: ${tokens.colors.grey_300};
	${tokens.typography.caption}
`;

export const MainCheckBoxWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 10%;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	// background-color: antiquewhite;
`;

export const SubCheckBoxWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 30px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	// background-color: antiquewhite;
`;

export const CheckBoxImageWrapper = styled.div`
	width: 20px;
	height: 20px;

	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.is_selected == false
			? `background-image: url('/SignIn/checkbox_unclicked.svg')`
			: `background-image: url('/SignIn/checkbox_clicked.svg')`};

	background-size: cover;
	background-position: center;
`;

export const SubCheckBoxImageWrapper = styled.div`
	width: 20px;
	height: 20px;

	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;

	${(props) =>
		props.is_selected == false
			? `background-image: url('/SignIn/check_unclicked.svg')`
			: `background-image: url('/SignIn/check_clicked.svg')`};

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

export const BinarySelectBox = styled.div`
	width: 48%;
	height: 50%;

	padding: 3% 5%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	border-radius: 24px;
	box-shadow: 1px 5px 4px 1px rgba(0, 0, 0, 0.06);

	${(props) =>
		props.is_clicked === true
			? `border: 2px solid ${tokens.colors.green_500}; background-color: rgba(26, 185, 143, 0.2);`
			: `border: none; background-color: #ffffff;`}
`;

export const BinarySelectBoxContentWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
export const BinarySelectPic = styled.div`
	width: 80%;
	height: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) =>
		props.type == 'family'
			? `background-image: url('/SignIn/Family.svg')`
			: `background-image: url('/SignIn/love_letter.svg')`};

	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

export const BinarySelectTitle = styled.span`
	width: 100%;
	height: 50%;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${tokens.colors.grey_600};
	${tokens.typography.SUIT}
`;

export const BinarySelectTitleImpact = styled.span`
	font-size: 18px;
	font-weight: 700;
`;
