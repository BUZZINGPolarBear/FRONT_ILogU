import styled from 'styled-components';
import * as tokens from '../../../../tokens';
import { Swiper, SwiperSlide } from 'swiper/react';

export const TitleDiv = styled.div`
	width: ${(props) => props.width}%;
	height: 100%;

	position: relative;
	border-radius: 10px;
	border: solid 1.5px ${tokens.colors.green_500};
	${(props) =>
		props.typo == 'subtitle_1_sb'
			? tokens.typography.subtitle_1_SB
			: tokens.typography.subtitle_1};
	color: ${tokens.colors.grey_500};

	display: flex;
	align-items: center;
	justify-content: flex-start;

	padding: 10px;

	background-color: white;
`;

export const PhotoUploadArea = styled.div`
	width: 98%;
	// height: 60%;
	min-width: 340px;
	min-height: 265px;
	position: relative;

	border-radius: 10px;
	border: solid 1px ${tokens.colors.grey_50};
	display: flex;
	align-items: center;
	justify-content: center;

	color: ${tokens.colors.grey_300};
	${tokens.typography.sub};

	background-color: white;
`;

export const PhotoUploadClickArea = styled.div`
	width: 150px;
	height: 180px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PhotoUploadImage = styled.div`
	width: 50px;
	height: 50px;

	border: dashed 1px ${tokens.colors.grey_50};

	background-image: url('/Feed/writeFeed/plus_icon.svg');
	background-size: 15px 15px;
	background-position: center;
	background-repeat: no-repeat;

	border-radius: 50%;

	margin-bottom: 10px;
`;

export const InputText = styled.textarea`
	width: 98%;
	height: 150px;
	padding: 10px;

	font-size: 16px;
	border: 1px solid ${tokens.colors.grey_50};
	border-radius: 4px;
	resize: none;

	&::placeholder {
		color: ${tokens.colors.grey_100};
	}
`;

export const WriteFeedTestArea = styled.div`
	width: 100%;
	height: fit-content;
`;

export const BottomBtnWrapper = styled.div`
	width: 100%;
	height: 35px;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	margin-bottom: 5vh;
`;

export const AutoGenerateStoryBtn = styled.div`
	width: 125px;
	height: 100%;
	border-radius: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: white;
	${tokens.typography.body_3_SB};
	${(props) =>
		props.is_auto_generate_feed_clicked == false
			? `background-color: ${tokens.colors.green_500}; cursor: pointer;`
			: `background-color: ${tokens.colors.grey_100}; cursor: not-allowed;`}
`;

export const SlideImage = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	background-image: url(${(props) => props.picUrl || ''});
	background-size: cover;
	background-position: center;

	background-color: antiquewhite;
	@media (max-width: 380px) {
		width: 40px;
		height: 40px;
	}
`;

export const StyledSwiper = styled(Swiper)`
	width: 100%;
	max-width: 800px;
	height: 100%;

	position: relative;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
	width: 100%;
	height: 100%;

	overflow: hidden;
	background-image: url(${(props) => props.picUrl || ''});
	background-size: cover;
	background-position: center;
`;

export const SlideImageInfo = styled.div`
	width: 100%;
	height: 30px;

	margin-bottom: 10px;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const RecommendIcon = styled.div`
	width: 15px;
	height: 15px;

	margin-right: 10px;

	background-image: url('/SignIn/info.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center top;
`;

export const InfoText = styled.span`
	color: ${tokens.colors.grey_200};
	${tokens.typography.sub};
`;
