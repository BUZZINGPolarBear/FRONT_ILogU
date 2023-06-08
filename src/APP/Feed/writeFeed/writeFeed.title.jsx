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
	const [clicked, setClicked] = useState(false);
	const [value, setValue] = useState(props.category);
	const [isDragging, setIsDragging] = useState(false);

	//Drop Down
	const handleChange = (event) => {
		setValue(event.target.value);
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

	//Bulma InputBoxconst
	const bulmaInputStyles = clicked
		? {
				border: `solid 2px ${tokens.colors.green_500}`,
				height: '60px',
				boxShadow: 'none',
		  }
		: {
				border: `solid 2px ${tokens.colors.green_500}`,
				boxShadow: 'none',
				height: '60px',
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
									display: 'flex',
									...tokens.typography.subtitle_1_SB,
								}}
							>
								<MenuItem
									value="여행"
									style={{
										color: tokens.colors.grey_500,
										...tokens.typography.subtitle_1_SB,
									}}
								>
									<span
										style={{
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
									autoFocus
									className="input"
									type="text"
									onClicked={() => setClicked(true)}
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
									style={bulmaInputStyles}
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
