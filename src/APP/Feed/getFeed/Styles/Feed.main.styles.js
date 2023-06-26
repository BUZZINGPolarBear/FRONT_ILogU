import styled from 'styled-components';
import * as tokens from '../../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TopNavBar = styled.div`
	width: 100%;
	max-width: 800px;
	height: 65px;
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	scroll-y: hidden;
	scroll-x: hidden;

	border-bottom: 1px solid ${tokens.colors.grey_50};
	box-shadow: inset 0px -5px 5px -5px rgba(0, 0, 0, 0.05);
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
	top: 8vh;
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
	height: 55px;

	display: flex;
	align-items: center;
	justify-content: center;

	margin-left: 5%;
	// margin-bottom: 1vh;

	// padding: 1% 5%;
	background-color: white;

	scroll-y: hidden;
	scroll-x: hidden;
	z-index: 9998;
`;

export const TopNavBarCategoryItems = styled.div`
	width: 75px;
	height: 100%;
	border-radius: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	${tokens.typography.subtitle_2};
	${(props) =>
		props.isselected == 'true'
			? `background-color: ${tokens.colors.green_500}; color: #ffffff;`
			: `background-color: rgba(192, 192, 192, 0.1); color: ${tokens.colors.grey_400};`}
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	margin: auto;
	height: 80%;
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

export const WriteFeedIconArea = styled.div`
	position: fixed;
	bottom: 11vh;
	right: 3vw;
	width: 48px;
	height: 48px;
	border-radius: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #1dcb9d;
	box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.2);
	z-index: 9999;
`;

export const WriteFeedIcon = styled.div`
	width: 18px;
	height: 18px;

	background-image: url('/Feed/write_feed.svg');
	background-size: cover;
	background-repeat: no-repeat;
`;
