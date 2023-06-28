import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopNavBar = styled.div`
	position: fixed;
	width: 100vw;
	height: 6vh;
	min-height: 55px;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	border-bottom: solid 1px ${tokens.colors.grey_50};
	background-color: #ffffff;
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
	position: fixed;
	width: 97%;
	height: 25vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	background-color: antiquewhite;
	z-index: 9999;
`;

export const MainWrapper = styled.div`
	position: absolute;
	width: 100vw;
	min-height: 100vh;

	top: 6vh;

	background-color: ${tokens.colors.grey_50};
`;
