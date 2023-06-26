import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const KeywordWrapper = styled.div`
	width: 100%;
	height: 30px;

	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const KeywordDiv = styled.div`
	width: fit-content;
	height: 98%;

	border-radius: 15px;
	border: 1px solid ${tokens.colors.green_600};

	background-color: #1dcb9d1a;
	padding: 0 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-right: 8px;
	color: ${tokens.colors.green_600};
	${tokens.typography.body_2}
`;

export const InvestmentSwiperArea = styled.div`
	width: 100%;
	max-width: 800px;
	height: 150px;
	position: relative;

	background-color: antiquewhite;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 97%;
`;

export const HomeMainSwiperCard = styled.div`
	width: 45vw;
	max-width: 400px;
	height: 96%;
	position: relative;
	margin-bottom: 1.5vh;

	border-radius: 20px;
	background-color: white;

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.07);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;
