import styled from "styled-components";
import * as tokens from "../../../tokens";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 45%;
	max-width: 640px;
	height: 100%;
	position: relative;
	border-radius: 20px;
	background-color: antiquewhite;
`;

export const HomeMainSwiperCard = styled.div`
	width: 70vw;
	max-width: 400px;
	height: 100%;
	position: relative;
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

export const HomeMainChallengeCard = styled.div`
	// width: 100%;
	max-width: 800px;
	height: 40vh;
	min-height: 300px;

	display: flex;
	flex-direction: column;

	margin-bottom: 3vh;

	background-color: white;
	position: relative;

	padding: 5%;
	z-index: 1;
`;
export const SwiperInnerTextArea = styled.div`
	width: 90%;
	height: 17%;
	position: absolute;
	padding: 0 5%;
	top: 0;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${tokens.colors.green_500};
`;

export const SwiperInnerWordCloudArea = styled.div`
	width: 100%;
	height: 84%;
	margin: auto;
	position: absolute;
	top: 17%;

	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;

	background-color: ${tokens.colors.green_50};
`;

export const HomeWordCloudSwiperCard = styled.div`
	width: 45%;
	max-width: 640px;
	height: 100%;
	position: relative;
	border-radius: 20px;
	background-color: antiquewhite;
`;

export const HomeMainChallengeSwiperArea = styled.div`
	width: 100%;
	max-width: 800px;
	height: 90%;
	position: relative;
`;

export const SwiperWordCloudArea = styled.div`
	width: 72vw;
	height: 30%;
	position: absolute;
	padding: 0 5%;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SwiperInnerTitle = styled.div`
	text-align: left;
	color: white;
	${tokens.typography.subtitle_1_SB}
`;

export const SwiperInnerSubText = styled.div`
	width: auto;
	height: 100%;
	text-align: left;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${tokens.typography.sub}
`;
