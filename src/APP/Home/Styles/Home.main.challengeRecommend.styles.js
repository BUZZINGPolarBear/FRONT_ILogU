import styled from "styled-components";
import * as tokens from "../../../tokens";
import { Swiper, SwiperSlide } from "swiper/react";

export const HomeMainChallengeCard = styled.div`
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: space-between;
	width: 100%;
	height: 35vh;
	margin-bottom: 3vh;

	background-color: white;
	position: relative;

	padding: 5%;
	z-index: 1;
`;

export const HomeMainChallengeSwiperArea = styled.div`
	width: 100%;
	height: 70%;
	position: relative;
`;

export const HomeMainSwiperCard = styled.div`
	width: 60vw;
	height: 100%;
	position: relative;
	border-radius: 20px;
	background-color: white;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const SwiperInnerTextArea = styled.div`
	width: 100%;
	height: 30%;
	position: absolute;
	padding: 0 5%;
	bottom: 0;

	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: white;
`;

export const SwiperInnerTitle = styled.div`
	text-align: left;
	${tokens.typography.subtitle_3}
`;

export const SwiperInnerSubText = styled.div`
	text-align: left;
	${tokens.typography.sub}
`;
