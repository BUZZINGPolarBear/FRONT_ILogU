import React, { useEffect, useRef, useState } from 'react';
import * as slideS from './Styles/Home.insurence.slide';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import * as InsurenceApi from './Apis/Home.insurence';

SwiperCore.use([Scrollbar, A11y]);

function InsurenceRecommendCard(props) {
	const [insurenceSlider, setInsurenceSlider] = useState([]);

	useEffect(() => {
		const fetchInsurence = async () => {
			let fetchResponse = await InsurenceApi.getInsurence();

			const insurenceArr = fetchResponse.result;
			let localSlider = [];
			for (let i = 0; i < insurenceArr.length / 2; i++) {
				const localInsurenceInfo = insurenceArr[i];

				localSlider.push(
					<SwiperSlide key={`insurence_slider_${i}`}>
						<slideS.HomeMainSwiperCard>
							<slideS.SwiperCardTitle>
								{localInsurenceInfo.name}
							</slideS.SwiperCardTitle>
							<slideS.SwiperInnerTextArea>
								<slideS.SwiperInnerSubText>
									{localInsurenceInfo.managementCompany}
								</slideS.SwiperInnerSubText>
							</slideS.SwiperInnerTextArea>
						</slideS.HomeMainSwiperCard>
					</SwiperSlide>,
				);
			}
			setInsurenceSlider(localSlider);
		};

		fetchInsurence();
	}, []);

	return (
		<slideS.HomeMainChallengeCard>
			<slideS.InvestmentSwiperArea>
				<slideS.StyledSwiper spaceBetween={130} slidesPerView={3}>
					{insurenceSlider}
					<SwiperSlide></SwiperSlide>
				</slideS.StyledSwiper>
			</slideS.InvestmentSwiperArea>
		</slideS.HomeMainChallengeCard>
	);
}

export default InsurenceRecommendCard;
