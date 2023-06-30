import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HomeMainChallengeCard = styled.div`
	// width: 100%;
	max-width: 800px;
	height: 24vh;
	min-height: 160px;

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
	width: 150px;
	max-width: 400px;
	height: 95%;
	position: relative;
	margin-bottom: 1.5vh;
	padding: 10% 0;

	border-radius: 10px;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;

	color: #000000;
	${tokens.typography.body_3_SB};

	background-color: #f6f6f6;
`;

export const SwiperCardTitle = styled.div`
	width: 80%;
	height: 35%;
	text-align: left;
	font-size: 15px;
	// margin: auto;
`;
export const SwiperCardSubTitle = styled.div`
	width: 80%;
	height: fit-content;
	text-align: left;
	color: #7c7c7c;
	${tokens.typography.sub}// margin: auto;
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
	height: 100%;
	min-height: 160px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const SwiperInnerTextArea = styled.div`
	position: relative;
	width: 100%;
	height: 35%;

	bottom: 0;
	padding: 0 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 10px;

	color: #000000;
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
	padding: 0 10%;
	color: ${tokens.colors.grey_400};
	${tokens.typography.sub};
`;
