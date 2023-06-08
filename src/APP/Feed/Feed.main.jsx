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
import * as tokens from '../../tokens';

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
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [value, setValue] = React.useState('전체');

	//Drop Down
	const handleChange = (event) => {
		setValue(event.target.value);
	};

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
				<FeedMainS.TopNavBar>
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
					{nowLocation.pathname == '/feed/main' && (
						<FeedMainS.TopNavBarCategoryItemArea
							onMouseDown={handleMouseDown}
							onMouseUp={handleMouseUp}
							onMouseMove={handleMouseMove}
						>
							<FeedMainS.StyledSwiper spaceBetween={7} slidesPerView={5}>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems
										style={{
											backgroundColor: tokens.colors.green_500,
											color: 'white',
										}}
									>
										전체
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems>
										✈️여행
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems>
										⚽️스포츠
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems>
										🍳요리
									</FeedMainS.TopNavBarCategoryItems>
								</SwiperSlide>
								<SwiperSlide>
									<FeedMainS.TopNavBarCategoryItems>
										🏦금융
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
						>
							<FormControl
								sx={{ m: 1, width: 85, borderColor: 'rgb(245, 245, 245)' }}
								size="small"
							>
								<Select
									value={value}
									onChange={handleChange}
									// displayEmpty
									inputProps={{ 'aria-label': 'Without label' }}
									displayEmpty
									style={{
										borderRadius: '40px',
										...tokens.typography.caption,
									}}
								>
									<MenuItem
										value="전체"
										style={{
											color: tokens.colors.grey_500,
											...tokens.typography.caption,
										}}
									>
										전체
									</MenuItem>
									<MenuItem
										value={'운동'}
										style={{
											color: tokens.colors.grey_500,
											...tokens.typography.caption,
										}}
									>
										운동
									</MenuItem>
									<MenuItem
										value={'여행'}
										style={{
											color: tokens.colors.grey_500,
											...tokens.typography.caption,
										}}
									>
										여행
									</MenuItem>
									<MenuItem
										value={'요리'}
										style={{
											color: tokens.colors.grey_500,
											...tokens.typography.caption,
										}}
									>
										요리
									</MenuItem>
									<MenuItem
										value={'금융'}
										style={{
											color: tokens.colors.grey_500,
											...tokens.typography.caption,
										}}
									>
										금융
									</MenuItem>
								</Select>
							</FormControl>
						</div>

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
				<FeedMainS.WriteFeedIconArea>
					<FeedMainS.WriteFeedIcon></FeedMainS.WriteFeedIcon>
				</FeedMainS.WriteFeedIconArea>
			</div>
		</div>
	);
}

export default FeedMain;
