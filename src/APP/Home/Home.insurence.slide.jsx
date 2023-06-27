import React, { useEffect, useRef, useState } from 'react';
import * as slideS from './Styles/Home.insurence.slide';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Scrollbar, A11y]);

function InsurenceRecommendCard(props) {
	const insurenceArr = props.insurences;
	const [insurenceSlider, setInsurenceSlider] = useState([]);

	useEffect(() => {
		let localSlider = [];
		for (let i = 0; i < insurenceArr.length; i++) {
			const localInsurenceInfo = insurenceArr[i];
			// console.log(localInsurenceInfo);
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
	}, []);
	console.log(insurenceArr);
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
