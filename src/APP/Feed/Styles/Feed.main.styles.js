import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TopNavBar = styled.div`
	width: 100%;
	max-width: 800px;
	height: 12vh;
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	z-index: 9999;
`;
export const TopNavArea = styled.div`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: space-around;
`;
export const TopNavBarItem = styled.div`
	width: 40%;
	height: 5vh;
	display: flex;
	align-items: center;
	justify-content: center;

	// background-color: ${tokens.colors.grey_500};
`;
export const TopNavBarItemText = styled.div`
	width: 60%;
	height: 100%;
	color: ${tokens.typography.grey_300};
	${tokens.typography.subtitle_3};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	// background-color: white;
`;
export const FeedMainScreen = styled.div`
	width: 100%;
	min-height: 100vh;
	top: 12vh;
	height: fit-content;
	position: relative;
	margin-bottom: 23vh;
	background-color: white;
	z-index: 1;
`;

export const TopNavBarCategoryItemArea = styled.div`
	width: 95%;
	// max-width: 100%;
	position: relative;
	height: 3.5vh;

	display: flex;
	align-items: flex-start;
	justify-content: space-around;

	margin-left: 5%;
	margin-bottom: 1vh;

	// padding: 1% 5%;
	background-color: white;
	overflow-x: scroll;
	z-index: 9998;
`;

export const TopNavBarCategoryItems = styled.div`
	width: 75px;
	height: 3.5vh;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	${tokens.typography.subtitle_2};
	color: ${tokens.colors.grey_400};
	background-color: rgba(192, 192, 192, 0.1);
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	margin: auto;
	height: 97%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const DropdownCustom = styled.div`
	width: 80px;
	height: 30px;
	border-radius: 40px;
	background-color: ${tokens.colors.grey_50};
`;
