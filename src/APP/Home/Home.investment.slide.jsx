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
						<slideS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyPicture.svg)',
							}}
						>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									#아이 지문 등록하기
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									가까운 하나은행에서 아이의 지문을 등록해봐요!
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyPlayWith.svg)',
							}}
						>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									#아이와 뛰어놀기
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									아이와 함께하는 추억을 남겨봐요!
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyTravel.svg)',
							}}
						>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									#3대가 함께하는 여행
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									온 가족이 함께하는 여행으로 추억을 남겨보세요!
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
