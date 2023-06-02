import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import * as HomeS from './Styles/Home.main.styles';
import * as incomeS from './Styles/Home.main.incomeCard.styles';
import * as challengeS from './Styles/Home.main.challengeRecommend.styles';
import * as tokens from '../../tokens';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Scrollbar, A11y]);

function ChallengRecommendCard() {
	return (
		<challengeS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle>이런 챌린지가 인기!</HomeS.HomeMainCardTitle>
			<challengeS.HomeMainChallengeSwiperArea>
				<challengeS.StyledSwiper spaceBetween={150} slidesPerView={2}>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyPicture.svg)',
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
						</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyPlayWith.svg)',
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
						</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard
							style={{
								backgroundImage: 'url(/mainScreen/babyTravel.svg)',
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
						</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</challengeS.StyledSwiper>
			</challengeS.HomeMainChallengeSwiperArea>
			<div style={{ width: '90vw', display: 'flex', alignItems: 'center' }}>
				<incomeS.HomeIncomeDetailViewBtn style={{ width: '100%' }}>
					챌린지 도전하기
				</incomeS.HomeIncomeDetailViewBtn>
			</div>
		</challengeS.HomeMainChallengeCard>
	);
}

export default ChallengRecommendCard;
