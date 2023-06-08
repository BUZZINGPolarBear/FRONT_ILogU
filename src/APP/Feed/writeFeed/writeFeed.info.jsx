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

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedWrite(props) {
	const [isSelected, setIsSelected] = useState(false);
	const [selectCategory, setSelectCategory] = useState('none');
	const navigate = useNavigate();

	const handleCaterogyClick = (e, category) => {
		setIsSelected(true);
		setSelectCategory(category);
	};

	const handleBackwardClick = (e) => {
		navigate(`/feed/main`);
	};
	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea
					onClick={(e) => handleBackwardClick()}
				></infoS.TopBackwardArea>
				<infoS.TopTextArea>기록하기</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.FeedWriteArea>
				<infoS.FeedCatergoryTitleArea>
					<infoS.FeedTitleMain>
						참여중인 챌린지 중 <br></br>기록할 카테고리는 무엇인가요?
					</infoS.FeedTitleMain>
					<infoS.FeedSubTitleMain>
						참여 중인 챌린지 카테고리 중 선택할 수 있어요!
					</infoS.FeedSubTitleMain>
				</infoS.FeedCatergoryTitleArea>
				<infoS.FeedCategorySelectArea>
					<infoS.FeedCategoryWrapper>
						<infoS.FeedCategory
							onClick={(e) => handleCaterogyClick(e, '여행')}
							isSelected={selectCategory === '여행'}
						>
							<infoS.FeedCategoryImg>✈️</infoS.FeedCategoryImg>
							<infoS.FeedCategoryText>여행</infoS.FeedCategoryText>
						</infoS.FeedCategory>
						<infoS.FeedCategory
							onClick={(e) => handleCaterogyClick(e, '스포츠')}
							isSelected={selectCategory === '스포츠'}
						>
							<infoS.FeedCategoryImg>⚽️</infoS.FeedCategoryImg>
							<infoS.FeedCategoryText>스포츠</infoS.FeedCategoryText>
						</infoS.FeedCategory>
					</infoS.FeedCategoryWrapper>
					<infoS.FeedCategoryWrapper>
						<infoS.FeedCategory
							onClick={(e) => handleCaterogyClick(e, '요리')}
							isSelected={selectCategory === '요리'}
						>
							<infoS.FeedCategoryImg>🍳</infoS.FeedCategoryImg>
							<infoS.FeedCategoryText>요리</infoS.FeedCategoryText>
						</infoS.FeedCategory>
						<infoS.FeedCategory
							onClick={(e) => handleCaterogyClick(e, '금융')}
							isSelected={selectCategory === '금융'}
						>
							<infoS.FeedCategoryImg>🏦</infoS.FeedCategoryImg>
							<infoS.FeedCategoryText>금융</infoS.FeedCategoryText>
						</infoS.FeedCategory>
					</infoS.FeedCategoryWrapper>
					<infoS.FeedCategoryWrapper>
						<infoS.FeedCategory
							onClick={(e) => handleCaterogyClick(e, '일상')}
							isSelected={selectCategory === '일상'}
						>
							<infoS.FeedCategoryImg>👩‍👩‍👧‍👦</infoS.FeedCategoryImg>
							<infoS.FeedCategoryText>일상</infoS.FeedCategoryText>
						</infoS.FeedCategory>
						<infoS.FeedCategory
							style={{ backgroundColor: 'rgb(250, 250, 250)' }}
						></infoS.FeedCategory>
					</infoS.FeedCategoryWrapper>
				</infoS.FeedCategorySelectArea>
				<infoS.FeedWriteSubmitArea isCategorySelected={isSelected}>
					다음
				</infoS.FeedWriteSubmitArea>
			</infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
