import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const InsurenceRecommendText = styled.div`
	width: 75%;
	height: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	color: #000000;
	${(props) =>
		props.type == 'main'
			? `font-size: ${tokens.typography.subtitle_2.fontSize}; font-weight: ${tokens.typography.subtitle_2.fontWeight}; color: #000000`
			: `font-size: ${tokens.typography.sub.fontSize}; font-weight: ${tokens.typography.sub.fontWeight}; color: ${tokens.colors.grey_400}`};
`;

export const InsurenceRecommendTextWrapper = styled.div`
	width: 80%;
	height: 60%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-around;
`;
