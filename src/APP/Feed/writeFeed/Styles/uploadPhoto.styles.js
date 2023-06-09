import styled from 'styled-components';
import * as tokens from '../../../../tokens';

export const TitleDiv = styled.div`
	width: ${(props) => props.width}%;
	height: 100%;

	position: relative;
	border-radius: 10px;
	border: solid 1.5px ${tokens.colors.green_500};
	${(props) =>
		props.typo == 'subtitle_1_sb'
			? tokens.typography.subtitle_1_SB
			: tokens.typography.subtitle_1};
	color: ${tokens.colors.grey_500};

	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding: 10px;

	background-color: white;
`;
