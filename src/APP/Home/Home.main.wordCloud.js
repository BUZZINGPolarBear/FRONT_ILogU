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
			<wordCloudS.HomeMainChallengeSwiperArea>
				<challengeS.StyledSwiper spaceBetween={330} slidesPerView={2}>
					<SwiperSlide>
						<wordCloudS.HomeWordCloudSwiperCard>
							<wordCloudS.SwiperInnerTextArea>
								<wordCloudS.SwiperInnerTitle>
									#2차 전지
								</wordCloudS.SwiperInnerTitle>
								<wordCloudS.SwiperInnerSubText>
									<div>상품 자세히 보러가기</div>
									<div>
										<img src="/mainScreen/rightPointer.png"></img>
									</div>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea></wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeWordCloudSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeWordCloudSwiperCard>
							<wordCloudS.SwiperInnerTextArea>
								<wordCloudS.SwiperInnerTitle>
									#2차 전지
								</wordCloudS.SwiperInnerTitle>
								<wordCloudS.SwiperInnerSubText>
									<div>상품 자세히 보러가기</div>
									<div>
										<img src="/mainScreen/rightPointer.png"></img>
									</div>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea></wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeWordCloudSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeWordCloudSwiperCard>
							<challengeS.SwiperInnerTextArea>
								<challengeS.SwiperInnerTitle>
									#아이와 뛰어놀기
								</challengeS.SwiperInnerTitle>
								<challengeS.SwiperInnerSubText>
									아이와 함께하는 추억을 남겨봐요!
								</challengeS.SwiperInnerSubText>
							</challengeS.SwiperInnerTextArea>
						</wordCloudS.HomeWordCloudSwiperCard>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</challengeS.StyledSwiper>
			</wordCloudS.HomeMainChallengeSwiperArea>
			<incomeS.HomeIncomeDetailViewBtn>
				챌린지 도전하기
			</incomeS.HomeIncomeDetailViewBtn>
		</wordCloudS.HomeMainChallengeCard>
	);
}
export default RecommendWordCloudCard;
