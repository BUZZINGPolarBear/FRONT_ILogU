import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HomeMainChallengeCard = styled.div`
	// width: 100%;
	max-width: 800px;
	height: 30.5vh;

	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;

	margin-bottom: 1.5vh;

	background-color: white;
	position: relative;

	padding: 5% 0 5% 5%;
	z-index: 1;
`;

export const InvestmentSwiperArea = styled.div`
	width: 90vw;
	max-width: 800px;
	height: 100%;
	position: relative;
`;

export const HomeMainSwiperCard = styled.div`
	width: 170px;
	max-width: 400px;
	height: 100%;
	position: relative;
	margin-bottom: 1.5vh;

	border-radius: 20px;
	background-color: white;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;

export const SwiperImage = styled.div`
	width: 100%;
	height: 75%;

	border-radius: 15px;
	background-color: white;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
export const SwiperText = styled.span`
	width: fit-content;
	height: 100%;
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 85%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const SwiperInnerTextArea = styled.div`
	width: 100%;
	height: 35%;
	position: relative;
	bottom: 0;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: white;
`;

export const SwiperInnerTitle = styled.div`
	text-align: left;
	color: ${tokens.colors.grey_400};
	${tokens.typography.subtitle_3};
`;

export const SwiperInnerSubText = styled.div`
	width: 100%;
	text-align: left;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	color: ${tokens.colors.grey_400};
	${tokens.typography.sub};
`;
