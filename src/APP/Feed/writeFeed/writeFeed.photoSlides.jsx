import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as photoStyle from './Styles/uploadPhoto.styles';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function PhotoSlider(props) {
	const selectedImages = props.imageArr;
	const photos = [];

	selectedImages.map((image, index) => photos.push({ id: index, url: image }));

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<photoStyle.StyledSwiper spaceBetween={50} slidesPerView={1}>
			{photos.map((photo) => (
				<photoStyle.StyledSwiperSlide key={photo.id}>
					<img
						src={photo.url}
						style={{
							width: '365px',
							height: '245px',
							borderRadius: '10px',
							objectFit: 'cover',
							objectPosition: '50% 50%',
						}}
						alt={`사진 ${photo.id}`}
					/>
				</photoStyle.StyledSwiperSlide>
			))}
		</photoStyle.StyledSwiper>
	);
}

export default PhotoSlider;
