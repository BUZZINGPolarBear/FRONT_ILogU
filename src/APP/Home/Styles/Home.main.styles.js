import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const HomeMainScreen = styled.div`
	width: 100vw;
	max-width: 800px;
	min-height: 100vh;
	height: fit-content;
	margin-bottom: 10vh;
	background-color: #ffffff;
`;

export const HomeMainScreenHeader = styled.div`
	width: 100%;
	height: 15vh;
	margin-top: 10px;
	min-height: 120px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const HomeMainHeaderContent = styled.div`
	width: 90%;
	height: 92%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 15px;
	border-radius: 16px;
	background-color: rgba(29, 203, 157, 0.1);
`;

export const HomeMainHeaderContentTitle = styled.div`
	width: 45%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	background-color: antiquewhite;
`;

export const HomeMainHeaderTitle = styled.span`
	color: ${tokens.colors.green_600};
	${(props) =>
		props.type === 'sub'
			? tokens.typography.body_2
			: tokens.typography.headline_5};
`;
