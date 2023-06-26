import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const KeywordWrapper = styled.div`
	width: 100%;
	height: 30px;

	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const KeywordDiv = styled.div`
	width: fit-content;
	height: 98%;

	border-radius: 15px;
	border: 1px solid ${tokens.colors.green_600};

	background-color: #1dcb9d1a;
	padding: 0 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
	color: ${tokens.colors.green_600};
	${tokens.typography.body_2}
`;
