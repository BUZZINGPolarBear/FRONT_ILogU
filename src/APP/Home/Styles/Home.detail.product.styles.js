import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const MainPicWrapper = styled.div`
	position: fixed;
	width: 100vw;
	max-width: 800px;
	height: 40vh;

	background-image: url('${(props) => props.img}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	top: 0;
	z-index: 9999;
`;

export const MainScreenWrapper = styled.div`
	position: absolute;
	padding: 5% 5%;
	top: 40vh;
	width: 100vw;
	max-width: 800px;
	height: 75vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-around;

	z-index: 1;
`;

export const MainContentWrapper = styled.div`
	width: 100%;
	height: 55%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const MainScreenTitleWrapper = styled.div`
    width: 100%;
    height: 10%:

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const MainScreenTitle = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${(props) =>
		props.type == 'main'
			? `color: ${tokens.colors.grey_700}; font-size: ${tokens.typography.subtitle_1_SB.fontSize}; font-weight: ${tokens.typography.subtitle_1_SB.fontWeight};`
			: `color: ${tokens.colors.grey_300}; font-size: ${tokens.typography.sub.fontSize}; font-weight: ${tokens.typography.sub.fontWeight};`}
`;

export const ContentWrapper = styled.div`
	width: 100%;
	height: 80%;
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const ContentRowWrapper = styled.div`
	width: 100%;
	height: 14%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ContentTitle = styled.span`
	width: fit-content;
	height: fit-content;
	min-width: 61px;

	padding: 4px 6px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	border-radius: 10px;

	background-color: #1dcb9d1a;

	color: ${tokens.colors.green_500};
	${tokens.typography.caption};
`;

export const Content = styled.span`
	width: ${(props) => (props.isminimal == 'false' ? '80%;' : '75%;')}
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	text-align: left;

	color: ${tokens.colors.grey_700};
	${tokens.typography.body_2}
`;
