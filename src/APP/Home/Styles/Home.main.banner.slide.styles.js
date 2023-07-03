import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';
/* Slideshow */

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 130px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
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

export const HomeMainSwiperCardContent = styled.div`
	width: 90%;
	height: 92px;
	margin: 0 auto;
	border-radius: 10px;
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
