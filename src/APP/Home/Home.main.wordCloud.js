import React, { useRef, useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import * as HomeS from "./Styles/Home.main.styles";
import * as incomeS from "./Styles/Home.main.incomeCard.styles";
import * as challengeS from "./Styles/Home.main.challengeRecommend.styles";
import * as wordCloudS from "./Styles/Home.main.wordCloud.styles";
import * as tokens from "../../tokens";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function RecommendWordCloudCard() {
	const [swiperSpacing, setSwiperSpacing] = useState(window.innerWidth * 0.1);

	return (
		<wordCloudS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle>
				김하나님에게 이런 상품을 추천해요!
			</HomeS.HomeMainCardTitle>
			<challengeS.HomeMainChallengeSwiperArea>
				<challengeS.StyledSwiper spaceBetween={300} slidesPerView={2}>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyPicture.svg)",
							}}
						>
							<challengeS.SwiperInnerTextArea>
								<challengeS.SwiperInnerTitle>
									#아이 지문 등록하기
								</challengeS.SwiperInnerTitle>
								<challengeS.SwiperInnerSubText>
									가까운 하나은행에서 아이의 지문을 등록해봐요!
								</challengeS.SwiperInnerSubText>
							</challengeS.SwiperInnerTextArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyPlayWith.svg)",
							}}
						>
							<challengeS.SwiperInnerTextArea>
								<challengeS.SwiperInnerTitle>
									#아이와 뛰어놀기
								</challengeS.SwiperInnerTitle>
								<challengeS.SwiperInnerSubText>
									아이와 함께하는 추억을 남겨봐요!
								</challengeS.SwiperInnerSubText>
							</challengeS.SwiperInnerTextArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyTravel.svg)",
							}}
						>
							<challengeS.SwiperInnerTextArea>
								<challengeS.SwiperInnerTitle>
									#3대가 함께하는 여행
								</challengeS.SwiperInnerTitle>
								<challengeS.SwiperInnerSubText>
									온 가족이 함께하는 여행으로 추억을 남겨보세요!
								</challengeS.SwiperInnerSubText>
							</challengeS.SwiperInnerTextArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</challengeS.StyledSwiper>
			</challengeS.HomeMainChallengeSwiperArea>
			<incomeS.HomeIncomeDetailViewBtn>
				챌린지 도전하기
			</incomeS.HomeIncomeDetailViewBtn>
		</wordCloudS.HomeMainChallengeCard>
	);
}
export default RecommendWordCloudCard;
