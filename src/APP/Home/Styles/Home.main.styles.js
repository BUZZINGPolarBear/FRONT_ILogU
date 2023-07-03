import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

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

export const HomeMainBannerWrapper = styled.div`
	width: 100%;
	height: 140px;

	display: flex;
	flex-direction: row;
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

export const HomeMainCategoryArea = styled.div`
	width: 98%;
	height: 70vh;
	margin: auto;
`;

export const MainCardWrapper = styled.div`
	width: 96%;
	height: 30vh;
	min-height: 200px;
	margin-top: 0;
	padding: 5% 5%;

	display: flex;
	flex-direction: column;
	align-items: center;

	// background-color: antiquewhite;
`;

export const MainCardTitleWrapper = styled.div`
	width: 100%;
	height: 20%;
	min-height: 60px;
	padding: 5% 5%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const MainCardTitle = styled.div`
	text-align: left;
	padding: 0 5px;

	${(props) =>
		props.ismain == 'true'
			? `color: ${tokens.colors.grey_700}; font-weight: ${tokens.typography.headline_6.fontWeight}; font-size: ${tokens.typography.headline_6.fontSize};`
			: `color: ${tokens.colors.grey_300}; font-weight: ${tokens.typography.sub}; font-size: ${tokens.typography.sub.fontSize};`};
`;

export const MainRecommendCardWrapper = styled.div`
	width: 100%;
	height: 16vh;
	min-height: 200px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const MainRecommendContentWrapper = styled.div`
	width: 100%;
	height: 28%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	border-radius: 16px;

	background-color: #f6f6f6;
`;

export const ChartNotSelectedWrapper = styled.div`
	width: 60%;
	height: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	color: ${tokens.colors.grey_500};
	${tokens.typography.caption}
`;

export const ChartNotSelectedIcon = styled.div`
	width: 30px;
	height: 30px;

	background-image: url('/mainScreen/detail/hand.svg');
	background-size: 30px 30px;
	background-position: center;
	background-repeat: no-repeat;
`;
