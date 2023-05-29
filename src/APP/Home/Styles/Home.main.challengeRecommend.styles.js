import styled from "styled-components";
import * as tokens from "../../../tokens";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeMainChallengeCard = styled.div`
	// width: 100%;
	max-width: 800px;
	height: 30.5vh;

	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;

	margin-bottom: 3vh;

	background-color: white;
	position: relative;

	padding: 5% 0 5% 5%;
	z-index: 1;
`;

export const HomeMainChallengeSwiperArea = styled.div`
	width: 100%;
	max-width: 800px;
	height: 60%;
	position: relative;
`;

export const HomeMainSwiperCard = styled.div`
	width: 62vw;
	max-width: 400px;
	height: 96%;
	position: relative;
	margin-bottom: 1.5vh;

	border-radius: 20px;
	background-color: white;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 97%;
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
	margin-left: 14px;
	color: ${tokens.colors.grey_400};
	${tokens.typography.subtitle_3};
`;

export const SwiperInnerSubText = styled.div`
	text-align: left;
	margin-left: 14px;
	color: ${tokens.colors.grey_400};
	${tokens.typography.sub};
`;
