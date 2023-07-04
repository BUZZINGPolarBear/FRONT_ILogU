import React, { useEffect, useState } from 'react';
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

function FeedCategory() {
	const [isSelected, setIsSelected] = useState('false');
	const [selectCategory, setSelectCategory] = useState('none');
	const [writeStatusRecoil, setWriteStatusRecoil] = useRecoilState(
		feedRecoil.writeCategoryRecoil,
	);
	const navigate = useNavigate();

	const handleCaterogyClick = (e, category) => {
		setIsSelected('true');
		setSelectCategory(category);
		setWriteStatusRecoil(category);
	};

	const handleNextBtnClick = (e) => {
		e.preventDefault();
		navigate(`/write?type=title&category=${selectCategory}`);
	};

	return (
		<>
			<infoS.FeedCatergoryTitleArea>
				<infoS.FeedTitleMain>
					기록하고 싶은 <br></br>카테고리가 무엇인가요?
				</infoS.FeedTitleMain>
				<infoS.FeedSubTitleMain>
					카테고리를 선택해 아이와의 순간을 기록해주세요!
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
				</infoS.FeedCategoryWrapper>
				<infoS.FeedCategoryWrapper>
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
						onClick={(e) => handleCaterogyClick(e, '일상')}
						is_selected={selectCategory === '일상'}
					>
						<infoS.FeedCategoryImg>👩‍👩‍👧‍👦</infoS.FeedCategoryImg>
						<infoS.FeedCategoryText>일상</infoS.FeedCategoryText>
					</infoS.FeedCategory>
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
