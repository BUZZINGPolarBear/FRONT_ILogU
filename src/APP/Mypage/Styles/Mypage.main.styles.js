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

	padding-top: 15px;
	max-width: 760px;
	min-height: 100vh;

	top: 6vh;

	background-color: #ffffff;
`;

export const MainUserWrapper = styled.div`
	width: 100%;
	height: 100px;

	padding: 20px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const UserInfoWrapper = styled.div`
	width: 75%;
	height: 80px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	color: #161618;
	${tokens.typography.headline_6}
`;

export const UserInfoModify = styled.span`
	width: 20%;
	height: 80px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;

	color: #95959d;
	font-size: 10px;
	font-weight: 500;
	text-decoration: underline;
`;

export const UserProfilePic = styled.div`
	width: 60px;
	height: 60px;

	border-radius: 10px;
	margin-right: 10px;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const MainContentWrapper = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	padding: 0 10px;

	margin-bottom: 3vh;
`;

export const MainContentContent = styled.span`
	width: 100%;
	height: fit-content;
	text-align: left;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${tokens.typography.body_2};
	${(props) =>
		props.type == 'main'
			? `color: ${tokens.colors.grey_200}; margin-bottom: 15px;`
			: `color: #161616; margin-bottom: 10px;`}
`;
