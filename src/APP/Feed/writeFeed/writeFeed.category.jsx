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

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedCategory() {
	const [isSelected, setIsSelected] = useState(false);
	const [selectCategory, setSelectCategory] = useState('none');
	const [writeStatusRecoil, setWriteStatusRecoil] = useRecoilState(
		feedRecoil.writeCategoryRecoil,
	);
	const navigate = useNavigate();

	const handleCaterogyClick = (e, category) => {
		setIsSelected(true);
		setSelectCategory(category);
		setWriteStatusRecoil(category);
	};

	const handleNextBtnClick = (e) => {
		e.preventDefault();
		navigate(`/feed/write?type=title&category=${selectCategory}`);
	};

	return (
		<>
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
						is_selected={selectCategory === '여행'}
					>
						<infoS.FeedCategoryImg>✈️</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>여행</infoS.FeedCategoryText>
					</infoS.FeedCategory>
					<infoS.FeedCategory
						onClick={(e) => handleCaterogyClick(e, '스포츠')}
						is_selected={selectCategory === '스포츠'}
					>
						<infoS.FeedCategoryImg>⚽️</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>스포츠</infoS.FeedCategoryText>
					</infoS.FeedCategory>
				</infoS.FeedCategoryWrapper>
				<infoS.FeedCategoryWrapper>
					<infoS.FeedCategory
						onClick={(e) => handleCaterogyClick(e, '요리')}
						is_selected={selectCategory === '요리'}
					>
						<infoS.FeedCategoryImg>🍳</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>요리</infoS.FeedCategoryText>
					</infoS.FeedCategory>
					<infoS.FeedCategory
						onClick={(e) => handleCaterogyClick(e, '금융')}
						is_selected={selectCategory === '금융'}
					>
						<infoS.FeedCategoryImg>🏦</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>금융</infoS.FeedCategoryText>
					</infoS.FeedCategory>
				</infoS.FeedCategoryWrapper>
				<infoS.FeedCategoryWrapper>
					<infoS.FeedCategory
						onClick={(e) => handleCaterogyClick(e, '일상')}
						is_selected={selectCategory === '일상'}
					>
						<infoS.FeedCategoryImg>👩‍👩‍👧‍👦</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>일상</infoS.FeedCategoryText>
					</infoS.FeedCategory>
					<infoS.FeedCategory
						style={{ backgroundColor: 'rgb(250, 250, 250)' }}
					></infoS.FeedCategory>
				</infoS.FeedCategoryWrapper>
			</infoS.FeedCategorySelectArea>
			<infoS.FeedWriteSubmitArea
				is_category_selected={isSelected}
				onClick={(e) => handleNextBtnClick(e, selectCategory)}
			>
				다음
			</infoS.FeedWriteSubmitArea>
		</>
	);
}

export default FeedCategory;
