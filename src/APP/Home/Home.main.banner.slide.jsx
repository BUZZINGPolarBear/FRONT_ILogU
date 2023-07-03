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
				<bannerS.HomeMainSwiperCardContent src="/mainScreen/banner/banner_1.png"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="/mainScreen/banner/banner_2.png"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="/mainScreen/banner/banner_3.png"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="/mainScreen/banner/banner_4.png"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
			<SwiperSlide>
				<bannerS.HomeMainSwiperCardContent src="/mainScreen/banner/banner_5.png"></bannerS.HomeMainSwiperCardContent>
			</SwiperSlide>
		</bannerS.StyledSwiper>
	);
}

export default Slideshow;
