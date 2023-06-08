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
import { useRecoilState, useRecoilValue } from 'recoil';
import * as feedRecoil from './recoil/recoild.feed';
import queryString from 'query-string';
import 'bulma/css/bulma.css';

import * as infoS from './Styles/info.styles';
import * as titleS from './Styles/title.styles';
import * as tokens from '../../../tokens';

// material ui
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, makeStyles } from '@material-ui/core';

function FeedTitle(props) {
	const [isActive, setIsActive] = useState(false);
	const onClick = () => {
		setIsActive(!isActive);
	};
	const [isDragging, setIsDragging] = useState(false); // 드래그 여부 상태 관리

	const nowLocation = useLocation();
	const navigate = useNavigate();
	const [active, setActive] = useState(false);
	const [value, setValue] = React.useState(props.category);

	//Drop Down
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleNavBtnClick = (e, type) => {
		e.preventDefault();
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
		<>
			<infoS.FeedCatergoryTitleArea>
				<infoS.FeedTitleMain>챌린지 제목을 설정해주세요</infoS.FeedTitleMain>
				<infoS.FeedSubTitleMain>
					#으로 제목을 설정할 수 있어요!
				</infoS.FeedSubTitleMain>
			</infoS.FeedCatergoryTitleArea>
			<infoS.FeedCategorySelectArea>
				<titleS.FeedCategory>
					<titleS.FeedCategoryInputWrapper>
						<FormControl
							sx={{
								m: 1,
								width: '140px',

								borderColor: '#ffffff',
							}}
						>
							<Select
								value={value}
								onChange={handleChange}
								// displayEmpty
								inputProps={{ 'aria-label': 'Without label' }}
								displayEmpty
								style={{
									borderRadius: '10px',
									height: '60px',
									...tokens.typography.subtitle_1_SB,
								}}
							>
								<MenuItem
									value="여행"
									style={{
										color: tokens.colors.grey_500,
										textAlign: 'left',
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
											backgroundColor: tokens.colors.green_50,
											marginRight: '10px',
										}}
									>
										✈️
									</span>
									여행
								</MenuItem>
								<MenuItem
									value={'스포츠'}
									style={{
										color: tokens.colors.grey_500,
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
											backgroundColor: tokens.colors.green_50,
											marginRight: '10px',
										}}
									>
										⚽️
									</span>
									스포츠
								</MenuItem>
								<MenuItem
									value={'요리'}
									style={{
										color: tokens.colors.grey_500,
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
											backgroundColor: tokens.colors.green_50,
											marginRight: '10px',
										}}
									>
										🍳
									</span>
									요리
								</MenuItem>
								<MenuItem
									value={'금융'}
									style={{
										color: tokens.colors.grey_500,
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
											backgroundColor: tokens.colors.green_50,
											marginRight: '10px',
										}}
									>
										🏦
									</span>
									금융
								</MenuItem>
								<MenuItem
									value={'일상'}
									style={{
										color: tokens.colors.grey_500,
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
											backgroundColor: tokens.colors.green_50,
											marginRight: '10px',
										}}
									>
										👩‍👩‍👧‍👦
									</span>
									일상
								</MenuItem>
							</Select>
						</FormControl>
						<div className="field">
							<div className="control">
								<input
									className="input"
									type="text"
									placeholder={
										value == '여행'
											? '#아이와 함께 경주'
											: value == '스포츠'
											? '#아이와 함께 축구'
											: value == '요리'
											? '#아이와 함께 제빵'
											: value == '금융'
											? '#아이와 함께 하나은행'
											: value == '기타'
											? '#아이와 추억쌓기'
											: '#아이와 추억쌓기'
									}
									style={{ height: '60px' }}
								/>
							</div>
						</div>
					</titleS.FeedCategoryInputWrapper>
				</titleS.FeedCategory>
			</infoS.FeedCategorySelectArea>
			<infoS.FeedWriteSubmitArea>다음</infoS.FeedWriteSubmitArea>
		</>
	);
}

export default FeedTitle;
