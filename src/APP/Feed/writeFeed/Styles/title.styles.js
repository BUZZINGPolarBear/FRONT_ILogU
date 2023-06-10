import styled from 'styled-components';
import * as tokens from '../../../../tokens';

export const FeedCategory = styled.div`
	position: relative;
	width: 95%;
	height: fit-content;
	padding: 15px;
	margin: auto;

	display: flex;
	align-items: flex-start;

	border-radius: 10px;
`;

export const FeedCategoryInputWrapper = styled.div`
	width: 100%;
	height: 13vh;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const FeedCategoryImageSpan = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 20px;
	height: 20px;
	margin-right: 10px;

	background-color: ${tokens.colors.green_50};
`;
