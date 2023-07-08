import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const MainWrapper = styled.div`
	width: 95%;
	max-width: 760px;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RecommendIdPwWrapper = styled.div`
	position: relative;
	width: 100%;
	height: fit-content;
	padding: 10px 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	border-radius: 10px;
	background-color: rgba(29, 203, 157, 0.2);
`;

export const RecommendIcon = styled.div`
	width: 10%;
	height: 50%;

	background-image: url('/SignIn/info.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center top;
`;
export const RecommendText = styled.div`
	width: 85%;
	height: 100%;
	text-align: left;
	color: ${tokens.colors.grey_700};
	${tokens.typography.caption}
`;
export const SignInWrapper = styled.div`
	margin-top: 5%;
	position: relative;
	width: 100%;
	height: 20%;

	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`;
export const SignInBtn = styled.button`
	margin-top: 10%;
	color: #ffffff;
	background-color: ${(props) =>
		props.isAvailable ? tokens.colors.green_500 : tokens.colors.grey_100};
	position: relative;
	width: 100%;
	height: 60px;
	border: none;
	border-radius: 20px;
	cursor: pointer;

	${(props) =>
		props.isAvailable
			? `background-color: ${tokens.colors.green_500}; pointer-events: auto; pointer: cursor;`
			: `background-color: ${tokens.colors.grey_100}; pointer-events: none; pointer: default;`};

	${tokens.typography.subtitle_1};
`;
export const userInput = styled.input`
	width: 100%;
	height: 35%;
	border: none;
	border-radius: 10px;
	padding: 0 10px;
	color: #000000;
	background-color: ${tokens.colors.grey_50};
	${tokens.typography.body_2};
	&::placeholder {
		color: #797a7a; /* Set the desired placeholder text color */
	}
	&:focus {
		outline: none;
		border-color: transparent;
		/* Additional styling as needed */
	}
`;
export const SignInTextWrapper = styled.div`
	width: 100%;
	height: 20%;
	border: none;
	outline: none;
	padding: 0 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const AutoSignInWrapper = styled.div`
	width: fit-content;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	align-items: center;
	${tokens.typography.caption};
	color: ${tokens.colors.grey_300};
`;

export const AutoSignInBox = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 15px;

	${(props) =>
		props.isCheckboxClicked
			? `background-image: url('/SignIn/signIn_check_clicked.svg');`
			: `background-image: url('/SignIn/signIn_check_unclicked.svg');`}
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;
export const FindPassword = styled.span`
	width: 50%;
	height: 100%;
	text-align: right;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	${tokens.typography.caption};
	color: ${tokens.colors.grey_300};
`;
export const SignUpTitle = styled.span`
	color: ${tokens.colors.grey_300};
	margin-right: 15px;
`;

export const SignUpBtn = styled.span`
	color: ${tokens.colors.grey_700};
	text-decoration: underline;
`;
