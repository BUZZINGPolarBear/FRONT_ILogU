import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as FeedMainS from './Styles/Feed.main.styles';
import * as tokens from '../../../tokens';

import FeedAll from './Feed.all';
import FeedParticipation from './Feed.participation';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function FeedMain(props) {
	const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태 관리
	const nowLocation = useLocation();
	const [selectedCategory, setSelectedCategory] = useState('전체');

	const handleMouseDown = (event) => {
		console.log('Down');
		event.preventDefault();
		setIsDragging(true); // 드래그 시작 시 상태 업데이트
	};

	const handleMouseUp = (event) => {
		console.log('Up');
		event.preventDefault();
		setIsDragging(false); // 드래그 종료 시 상태 업데이트
	};

	const handleMouseMove = (event) => {
		if (!isDragging) return; // 드래그 중이 아닌 경우 무시
		event.preventDefault();

		const deltaX = event.nativeEvent.movementX; // X 좌표 이동 거리
		console.log(deltaX);
		event.target.scrollLeft -= deltaX; // 가로 스크롤 이동
	};

	const handleCategoryClick = (event, category) => {
		event.preventDefault();
		setSelectedCategory(category);
	};

	return (
		<div style={{ backgroundColor: 'white' }}>
			<div>
				<FeedMainS.TopNavBar>
					{nowLocation.pathname == '/feed/main' && (
						<FeedMainS.TopNavBarCategoryItemArea
							onMouseDown={handleMouseDown}
							onMouseUp={handleMouseUp}
							onMouseMove={handleMouseMove}
						>
							<FeedMainS.StyledSwiper spaceBetween={7} slidesPerView={4}>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems
										isselected={selectedCategory == '전체' ? 'true' : 'false'}
										onClick={(e) => {
											handleCategoryClick(e, '전체');
										}}
									>
										전체
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems
										isselected={selectedCategory == '여행' ? 'true' : 'false'}
										onClick={(e) => {
											handleCategoryClick(e, '여행');
										}}
									>
										✈️여행
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems
										isselected={selectedCategory == '스포츠' ? 'true' : 'false'}
										onClick={(e) => {
											handleCategoryClick(e, '스포츠');
										}}
									>
										⚽️스포츠
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems
										isselected={selectedCategory == '일상' ? 'true' : 'false'}
										onClick={(e) => {
											handleCategoryClick(e, '일상');
										}}
									>
										👩‍👩‍👧‍👦일상
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<div
										style={{
											width: '5px',
										}}
									></div>
								</SwiperSlide>
							</FeedMainS.StyledSwiper>
						</FeedMainS.TopNavBarCategoryItemArea>
					)}
					{nowLocation.pathname == '/feed/participation' && (
						<div
							style={{
								width: '90%',
								margin: 'auto',
								marginTop: '1.4vh',
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						></div>

						// </FeedMainS.TopNavBarCategoryItemArea>
					)}
				</FeedMainS.TopNavBar>

				{nowLocation.pathname == '/feed/main' ? (
					<FeedMainS.FeedMainScreen>
						<FeedAll></FeedAll>
					</FeedMainS.FeedMainScreen>
				) : (
					<FeedMainS.FeedMainScreen>
						<FeedParticipation></FeedParticipation>
					</FeedMainS.FeedMainScreen>
				)}
			</div>
		</div>
	);
}

export default FeedMain;
