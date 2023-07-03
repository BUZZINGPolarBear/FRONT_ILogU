import React, { useEffect, useState, useRef } from 'react';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

//custom style
import * as bannerS from './Styles/Home.main.banner.slide.styles';

function Slideshow() {
	SwiperCore.use([Navigation, Pagination, Autoplay]); // Swiper

	return (
		<bannerS.StyledSwiper
			slidesPerView={1}
			centeredSlides={true}
			pagination={{ clickable: true }}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
			loop={true}
		>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/banner_1.svg"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/banner_2.svg"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/banner_3.svg"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/banner_4.svg"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/banner_5.svg"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
		</bannerS.StyledSwiper>
	);
}

export default Slideshow;
