import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function blobToDataURL(blob, callback) {
	var reader = new FileReader();
	reader.onloadend = function () {
		callback(reader.result);
	};
	reader.readAsDataURL(blob);
}

function PhotoSlider(props) {
	const selectedImages = props.imageArr;
	const photos = [];

	selectedImages.map((image, index) => photos.push({ id: index, url: image }));

	console.log(photos);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{photos.map((photo) => (
				<div key={photo.id}>
					<img src={photo.url} alt={`Photo ${photo.id}`} />
				</div>
			))}
		</Slider>
	);
}

export default PhotoSlider;
