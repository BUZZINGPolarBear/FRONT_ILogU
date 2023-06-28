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

	border-bottom: solid 1px ${tokens.colors.grey_50};
	background-color: #ffffff;
	z-index: 9999;
`;

export const TopNavIcon = styled.div`
	height: 45px;
	width: 45px;

	${(props) =>
		props.icon === 'baby'
			? `background-image: url('/Family/baby.svg');`
			: `background-image: url('/Family/money.svg');`}

	background-repeat: no-repeat;
	background-position: center;
	background-size: 25px 25px;
`;

export const RankWrapper = styled.div`
	width: 97%;
	max-width: 776px;
	height: 30vh;
	margin: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
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

export const MainWrapperTitle = styled.h1`
	width: 100%;
	height: fit-content;
	text-align: left;
	color: #000000;
	${tokens.typography.headline_6};
`;

export const MainRankWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 70%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	background-color: #ffffff;
`;

export const RankArea = styled.div`
	position: relative;
	width: 100%;
	height: 31%;
	min-height: 55px;

	display: flex;
	align-items: center;
	justify-content: space-around;

	// background-color: ${tokens.colors.grey_100};
`;

export const RankNum = styled.span`
	width: 5%;
	height: 100%;
	text-align: left;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	color: ${(props) =>
		props.type == 'money' ? tokens.colors.green_500 : tokens.colors.red_500};
	${tokens.typography.headline_6};

	// background-color: antiquewhite;
`;

export const RankTitle = styled.span`
	width: 60%;

	height: 100%;
	text-align: center;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	color: ${tokens.colors.grey_700};
	${tokens.typography.subtitle_1_SB};

	// background-color: antiquewhite;
`;

export const RankContentArea = styled.div`
	width: 25%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const RankContent = styled.span`
	width: fit-content;
	height: ${tokens.typography.subtitle_1_SB.fontSize};

	padding: 15px 15px;
	border-radius: 6px;

	background-color: ${(props) =>
		props.type == 'money' ? '#1dcb9d33' : '#FE2C6233'};

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${(props) =>
		props.type == 'money' ? tokens.colors.green_500 : tokens.colors.red_500};
	${tokens.typography.body_2};
`;

export const RankProfilePic = styled.div`
	width: 45px;
	height: 45px;
	margin-right: 10px;
	border-radius: 50%;

	${(props) =>
		props.url != 'null'
			? `background-image: url(${props.url});`
			: `background-image: url('/Feed/Default_pfp.png');`}

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
