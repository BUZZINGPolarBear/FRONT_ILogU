import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const SimpleFeedWrapper = styled.div`
	width: 100%;
	height: 30%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const SimpleFeedPic = styled.div`
	width: 80px;
	height: 80px;

	border-radius: 10px;

	height: 100%;
	background-image: url(${(props) => props.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const SimpleFeedContentWrapper = styled.div`
	width: 75%;
	height: 90%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-around;
`;

export const SimpleFeedContent = styled.span`
	width: 100%;
	height: fit-content;
	text-align: left;

	${(props) =>
		props.type == 'main'
			? `color: ${tokens.colors.grey_700}; font-size: ${tokens.typography.subtitle_3.fontSize}; font-weight: ${tokens.typography.subtitle_3.fontWeight};`
			: `color: ${tokens.colors.grey_300}; font-size: ${tokens.typography.body_2.fontSize}; font-weight: ${tokens.typography.body_2.fontWeight};`};
`;

export const SimpleFeedInfo = styled.div`
	width: 100%;
	height: 30px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const InfoContentWrapper = styled.div`
	width: fit-content;
	height: 100%;
	margin-right: 15px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	color: ${tokens.colors.grey_300};
	${tokens.typography.caption};
`;

export const SimpleFeedIcon = styled.img`
	width: 15px;
	height: 15px;
	margin-right: 5px;

	background-image: ${(props) => props.src};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
