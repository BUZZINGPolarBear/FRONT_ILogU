import styled from 'styled-components';
import * as tokens from '../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const InsurenceRecommendImage = styled.div`
	width: 20%;
	min-width: 50px;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InsurenceRecommendText = styled.div`
	width: 55%;
	height: 100%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	color: #000000;
	${tokens.typography.subtitle_1_SB};
`;

export const InsurenceImage = styled.div`
	width: 40px;
	height: 40px;

	border-radius: 50%;
	${(props) =>
		`background-image: url('/mainScreen/insurence/${props.image}.svg');`}
	${(props) =>
		props.image == 'detailView'
			? `background-size: 16px 16px; background-color: #f6f6f6;`
			: `background-size: 25px 25px; background-color: #ffffff;`}
	background-position: center;
	background-repeat: no-repeat;
`;
