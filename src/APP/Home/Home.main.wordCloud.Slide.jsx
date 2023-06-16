import React, { useRef, useState, useEffect } from 'react';
import * as HomeS from './Styles/Home.main.styles';
import * as challengeS from './Styles/Home.main.challengeRecommend.styles';
import * as wordCloudS from './Styles/Home.main.wordCloud.styles';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import KeywordCloud from './Home.main.wordCloud.cloud';

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
		calculateSpaceBetween(window.innerWidth),
	);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
			setSwiperSpacing(calculateSpaceBetween(windowWidth));
		};

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	return (
		<wordCloudS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle style={{ height: '12%' }}>
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
									<span style={{ marginLeft: '10px' }}>
										<img
											src="/mainScreen/rightPointer.png"
											alt="오른쪽 포인터"
										></img>
									</span>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea>
								<KeywordCloud searchKeyword={'2차 전지'}></KeywordCloud>
							</wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard>
							<wordCloudS.SwiperInnerTextArea>
								<wordCloudS.SwiperInnerTitle>#ESG</wordCloudS.SwiperInnerTitle>
								<wordCloudS.SwiperInnerSubText>
									상품 자세히 보러가기
									<span style={{ marginLeft: '10px' }}>
										<img
											src="/mainScreen/rightPointer.png"
											alt="오른쪽 포인터"
										></img>
									</span>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea>
								<KeywordCloud searchKeyword={'ESG'}></KeywordCloud>
							</wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<wordCloudS.HomeMainSwiperCard>
							<wordCloudS.SwiperInnerTextArea>
								<wordCloudS.SwiperInnerTitle>
									#우주기술
								</wordCloudS.SwiperInnerTitle>
								<wordCloudS.SwiperInnerSubText>
									상품 자세히 보러가기
									<span style={{ marginLeft: '10px' }}>
										<img
											src="/mainScreen/rightPointer.png"
											alt="오른쪽 포인터"
										></img>
									</span>
								</wordCloudS.SwiperInnerSubText>
							</wordCloudS.SwiperInnerTextArea>
							<wordCloudS.SwiperInnerWordCloudArea>
								<KeywordCloud searchKeyword={'우주 탐사'}></KeywordCloud>
							</wordCloudS.SwiperInnerWordCloudArea>
						</wordCloudS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</challengeS.StyledSwiper>
			</challengeS.HomeMainChallengeSwiperArea>
		</wordCloudS.HomeMainChallengeCard>
	);
}
export default RecommendWordCloudCard;
