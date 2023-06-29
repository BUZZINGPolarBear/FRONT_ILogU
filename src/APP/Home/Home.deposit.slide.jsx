import React, { useRef, useState } from 'react';
import * as slideS from './Styles/Home.investment.slide';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';

SwiperCore.use([Scrollbar, A11y]);

function DepositSwiper() {
	const navigate = useNavigate();

	const handleDepositDetailView = (e, type) => {
		e.preventDefault();

		navigate(`/home/deposit/detail/${type}`);
	};

	return (
		<slideS.HomeMainChallengeCard>
			<slideS.InvestmentSwiperArea>
				<slideS.StyledSwiper spaceBetween={180} slidesPerView={3}>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							onClick={(e) => handleDepositDetailView(e, 'travel-log')}
						>
							<slideS.SwiperImage
								style={{
									backgroundImage:
										'url(https://m.hanacard.co.kr/ATTACH/NEW_MOBILE/images/cardinfo/card_img/13917.gif)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									트래블로그 카드
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									수수료 면제 및 하나머니 적립
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage:
										'url(https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/paris.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									파리여행 26주 적금
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									최대금리 4.5% (세전)
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage:
										'url(https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/tailand.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									태국여행 24주 적금
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									최대금리 4.5% (세전)
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperImage
								style={{
									backgroundImage:
										'url(https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/taiwan.svg)',
								}}
							></slideS.SwiperImage>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerTitle>
									대만여행 24주 적금
								</slideS.SwiperInnerTitle>
								<slideS.SwiperInnerSubText>
									최대금리 4.5% (세전)
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

export default DepositSwiper;
