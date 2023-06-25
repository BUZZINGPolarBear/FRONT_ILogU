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
	height: 12vh;
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

	padding: 0 25px;
	border-radius: 16px;
	background-color: rgba(29, 203, 157, 0.1);
`;

export const HomeMainHeaderContentTitle = styled.div`
	width: 45%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	// background-color: antiquewhite;
`;

export const HomeMainHeaderTitle = styled.span`
	color: ${tokens.colors.green_600};
	${(props) =>
		props.type === 'sub'
			? tokens.typography.body_2
			: tokens.typography.headline_5};
`;

export const HomeMainHeaderCircleIcon = styled.div`
	width: 65px;
	height: 65px;
	border-radius: 50%;

	background-image: url('/mainScreen/car_icon.svg');
	background-size: 40px 40px;
	background-position: center;
	background-repeat: no-repeat;

	background-color: #ffffff;

	box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);
`;

export const HomeMainSelectWrapper = styled.div`
	width: 100%;
	height: 60px;
	padding: 0 10%;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-around;

	border-bottom: 1px solid ${tokens.colors.grey_50};
`;

export const HomeMainCategoryBtn = styled.div`
	width: 30%;
	height: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	${tokens.typography.subtitle_3};

	${(props) =>
		props.isSelected
			? `color:${tokens.colors.green_500}; border-bottom: 2px solid ${tokens.colors.green_500};`
			: `color:${tokens.colors.grey_100};`}
`;
