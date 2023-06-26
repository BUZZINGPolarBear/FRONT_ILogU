import React, { useRef, useState } from 'react';
import * as slideS from './Styles/Home.investment.slide';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Scrollbar, A11y]);

function ChallengRecommendCard() {
	return (
		<slideS.HomeMainChallengeCard>
			<slideS.InvestmentSwiperArea>
				<slideS.StyledSwiper spaceBetween={180} slidesPerView={3}>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage: 'url(/mainScreen/ETF_1.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									KOSEF KRX 레저 여행
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									미래에셋자산운용&emsp;&emsp;수익률 19.6%
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage: 'url(/mainScreen/ETF_2.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									KOSEF KRX 레저 여행
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									미래에셋자산운용&emsp;&emsp;수익률 19.6%
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage: 'url(/mainScreen/ETF_3.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									KOSEF KRX 레저 여행
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									미래에셋자산운용&emsp;&emsp;수익률 19.6%
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</slideS.StyledSwiper>
			</slideS.InvestmentSwiperArea>
		</slideS.HomeMainChallengeCard>
	);
}

export default ChallengRecommendCard;
