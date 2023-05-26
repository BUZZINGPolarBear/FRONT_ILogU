import React, { useRef, useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import styled from "styled-components";
import * as HomeS from "./Styles/Home.main.styles";
import * as incomeS from "./Styles/Home.main.incomeCard.styles";
import * as challengeS from "./Styles/Home.main.challengeRecommend.styles";
import * as wordCloudS from "./Styles/Home.main.wordCloud.styles";
import * as tokens from "../../tokens";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import KeywordCloud from "./Home.main.wordCloud.cloud";

SwiperCore.use([Scrollbar, A11y]);

function calculateSpaceBetween(width) {
	const minWidth = 0.15;
	const maxWidth = 0.6;
	const maxScreenWidth = 800;
	const minScreenWidth = 500;

	if (width <= minScreenWidth) return width * 0.6;
	if (width <= minScreenWidth + 100) return width * 0.55;
	if (width <= minScreenWidth + 200) return width * 0.5;
	if (width <= minScreenWidth + 300) return width * 0.45;
	if (width > minScreenWidth + 300) return 800 * 0.2;
}

function RecommendWordCloudCard() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [swiperSpacing, setSwiperSpacing] = useState(
		calculateSpaceBetween(window.innerWidth)
	);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
			setSwiperSpacing(calculateSpaceBetween(windowWidth));
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});

	return (
		<wordCloudS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle>
				김하나님에게 이런 상품을 추천해요!
			</HomeS.HomeMainCardTitle>
			<challengeS.HomeMainChallengeSwiperArea>
				<challengeS.StyledSwiper spaceBetween={swiperSpacing} slidesPerView={2}>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard>
							<wordCloudS.SwiperInnerTextArea>
								<wordCloudS.SwiperInnerTitle>
									#2차 전지
								</wordCloudS.SwiperInnerTitle>
								<wordCloudS.SwiperInnerSubText>
									상품 자세히 보러가기
									<span style={{ marginLeft: "10px" }}>
										<img src="/mainScreen/rightPointer.png"></img>
									</span>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea>
								<KeywordCloud searchKeyword={"2차 전지"}></KeywordCloud>
							</wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyPlayWith.svg)",
							}}
						>
							<wordCloudS.SwiperInnerTextArea>
								<challengeS.SwiperInnerTitle>
									#아이와 뛰어놀기
								</challengeS.SwiperInnerTitle>
								<challengeS.SwiperInnerSubText>
									아이와 함께하는 추억을 남겨봐요!
								</challengeS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
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
