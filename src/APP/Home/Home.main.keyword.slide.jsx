import React, { useEffect, useRef, useState } from 'react';
import * as slideS from './Styles/Home.insurence.slide';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import * as InsurenceApi from './Apis/Home.insurence';

SwiperCore.use([Scrollbar, A11y]);

function KeywordETFrecommendSlide(props) {
	// const [insurenceSlider, setInsurenceSlider] = useState([]);

	// useEffect(() => {
	// 	const fetchInsurence = async () => {
	// 		let fetchResponse = await InsurenceApi.getInsurence();
	// 		// console.log(fetchResponse);
	// 		const insurenceArr = fetchResponse.result;
	// 		let localSlider = [];
	// 		for (let i = 0; i < insurenceArr.length / 2; i++) {
	// 			const localInsurenceInfo = insurenceArr[i];

	// 			localSlider.push(
	// 				<SwiperSlide key={`keyword_slide_${i}`}>
	// 					<slideS.HomeMainSwiperCard
	// 						style={{
	// 							backgroundColor: '#ffffff',
	// 							boxShadow: '2px 3px 3px 3px rgba(0, 0, 0, 0.05)',
	// 						}}
	// 					>
	// 						<slideS.SwiperCardTitle>
	// 							{localInsurenceInfo.name}
	// 						</slideS.SwiperCardTitle>
	// 						<slideS.SwiperInnerTextArea>
	// 							<slideS.SwiperInnerSubText>
	// 								{localInsurenceInfo.managementCompany}
	// 							</slideS.SwiperInnerSubText>
	// 						</slideS.SwiperInnerTextArea>
	// 					</slideS.HomeMainSwiperCard>
	// 				</SwiperSlide>,
	// 			);
	// 		}
	// 		setInsurenceSlider(localSlider);
	// 	};

	// 	fetchInsurence();
	// }, []);

	return (
		<slideS.HomeMainChallengeCard
			style={{ height: '15vh', minHeight: '140px' }}
		>
			<slideS.InvestmentSwiperArea>
				<slideS.StyledSwiper spaceBetween={140} slidesPerView={3}>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							style={{
								backgroundColor: '#ffffff',
								boxShadow: '0 0 5px rgba(0, 0, 0, 0.08)',
								justifyContent: 'space-around',
							}}
						>
							<slideS.SwiperCardTitle style={{ height: '35%' }}>
								TIGER여행레저(주식)
								<slideS.SwiperCardSubTitle>
									수익률 4.3%
								</slideS.SwiperCardSubTitle>
							</slideS.SwiperCardTitle>

							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerSubText>미래에셋</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							style={{
								backgroundColor: '#ffffff',
								boxShadow: '0 0 5px rgba(0, 0, 0, 0.08)',
								justifyContent: 'space-around',
							}}
						>
							<slideS.SwiperCardTitle style={{ height: '35%' }}>
								Defiance Hotel, Airline, Cruise
								<slideS.SwiperCardSubTitle>
									수익률 37.99%
								</slideS.SwiperCardSubTitle>
							</slideS.SwiperCardTitle>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerSubText>
									Defiance ETFs LLC
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							style={{
								backgroundColor: '#ffffff',
								boxShadow: '0 0 5px rgba(0, 0, 0, 0.08)',
								justifyContent: 'space-around',
							}}
						>
							<slideS.SwiperCardTitle style={{ height: '35%' }}>
								ALPS Travel Beneficiaries
								<slideS.SwiperCardSubTitle>
									수익률 23.81%
								</slideS.SwiperCardSubTitle>
							</slideS.SwiperCardTitle>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerSubText>ALPS</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<slideS.HomeMainSwiperCard
							s3tyle={{
								backgroundColor: '#ffffff',
								boxShadow: '0 0 5px rgba(0, 0, 0, 0.08)',
								justifyContent: 'space-around',
							}}
						>
							<slideS.SwiperCardTitle style={{ height: '35%' }}>
								ETFMG Travel Tech
								<slideS.SwiperCardSubTitle>
									수익률 -5.59%
								</slideS.SwiperCardSubTitle>
							</slideS.SwiperCardTitle>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerSubText>ETFMG</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>
					,<SwiperSlide></SwiperSlide>
				</slideS.StyledSwiper>
			</slideS.InvestmentSwiperArea>
		</slideS.HomeMainChallengeCard>
	);
}

export default KeywordETFrecommendSlide;
