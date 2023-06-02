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
// import * as challengeS from "../Home/Styles/Home.main.challengeRecommend.styles";
import * as tokens from '../../tokens';
import FeedAll from './Feed.all';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function FeedMain(props) {
	const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태 관리
	const nowLocation = useLocation();
	const navigate = useNavigate();

	const handleNavBtnClick = (e, type) => {
		e.preventDefault();
		props.setNavigateBtn(type);
		navigate(`/${type}`);
	};

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

	return (
		<div style={{ backgroundColor: 'white' }}>
			<div>
				<FeedMainS.TopNavBar
					style={
						nowLocation.pathname == '/feed/main' ? null : { height: '5.5vh' }
					}
				>
					<FeedMainS.TopNavArea>
						<FeedMainS.TopNavBarItem
							onClick={(e) => handleNavBtnClick(e, 'feed/main')}
						>
							<FeedMainS.TopNavBarItemText
								style={
									nowLocation.pathname == '/feed/main'
										? {
												color: tokens.colors.green_500,
												borderBottom: `3px solid ${tokens.colors.green_500}`,
										  }
										: { color: tokens.colors.grey_300 }
								}
							>
								전체 피드
							</FeedMainS.TopNavBarItemText>
						</FeedMainS.TopNavBarItem>
						<FeedMainS.TopNavBarItem
							onClick={(e) => handleNavBtnClick(e, 'feed/participation')}
						>
							<FeedMainS.TopNavBarItemText
								style={
									nowLocation.pathname == '/feed/participation'
										? {
												color: tokens.colors.green_500,
												borderBottom: `3px solid ${tokens.colors.green_500}`,
										  }
										: { color: tokens.colors.grey_300 }
								}
							>
								참여 챌린지
							</FeedMainS.TopNavBarItemText>
						</FeedMainS.TopNavBarItem>
					</FeedMainS.TopNavArea>
					{nowLocation.pathname == '/feed/main' ? (
						<FeedMainS.TopNavBarCategoryItemArea
							onMouseDown={handleMouseDown}
							onMouseUp={handleMouseUp}
							onMouseMove={handleMouseMove}
						>
							{/* <challengeS.StyledSwiper
								spaceBetween={150}
								slidesPerView={2}
							></challengeS.StyledSwiper> */}
							<FeedMainS.TopNavBarCategoryItems
								style={{
									backgroundColor: tokens.colors.green_500,
									color: 'white',
								}}
							>
								전체
							</FeedMainS.TopNavBarCategoryItems>
							<FeedMainS.TopNavBarCategoryItems>
								✈️여행
							</FeedMainS.TopNavBarCategoryItems>
							<FeedMainS.TopNavBarCategoryItems>
								⚽️스포츠
							</FeedMainS.TopNavBarCategoryItems>
							<FeedMainS.TopNavBarCategoryItems>
								🍳요리
							</FeedMainS.TopNavBarCategoryItems>
							<FeedMainS.TopNavBarCategoryItems>
								🏦금융
							</FeedMainS.TopNavBarCategoryItems>
						</FeedMainS.TopNavBarCategoryItemArea>
					) : null}
				</FeedMainS.TopNavBar>

				{nowLocation.pathname == '/feed/main' ? (
					<FeedMainS.FeedMainScreen style={{ backgroundColor: 'white' }}>
						<FeedAll></FeedAll>
					</FeedMainS.FeedMainScreen>
				) : (
					<FeedMainS.FeedMainScreen
						style={{ top: 0, height: '100vh', backgroundColor: 'white' }}
					></FeedMainS.FeedMainScreen>
				)}
			</div>
		</div>
	);
}

export default FeedMain;
