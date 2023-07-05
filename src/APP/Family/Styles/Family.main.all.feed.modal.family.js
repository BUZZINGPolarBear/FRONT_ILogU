import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopCommentTitle = styled.div`
	width: 100%;
	height: 55px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	text-align: left;
`;
export const MainTitle = styled.span`
	width: 100%;
	hjeight: fit-content;
	text-align: left;
	color: ${tokens.colors.green_600};
	${tokens.typography.headline_5};
`;
export const DraggableBox = styled.div`
	width: 40%;
	height: 5px;
	border-radius: 10px;
	background-color: ${tokens.colors.grey_50};
`;

export const FamilyStatusWrapper = styled.div`
	width: 100%;
	height: 35vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	background-color: antiquewhite;
`;

export const MoneyCloseBtn = styled.button`
	top: 300px;
	width: 100%;
	height: 50px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	border: none;
	outline: none;
	border-radius: 10px;

	margin-top: 40px;

	${tokens.typography.SUIT};

	${(props) =>
		props.type == 'disable'
			? `background-color: ${tokens.colors.grey_100}; pointer-events: none;`
			: `background-color: ${tokens.colors.green_500};`}

	color: #ffffff;
`;
