import React, { useEffect, useState, useRef } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as HomeS from './Styles/Home.main.styles';
import * as InvestS from './Styles/Home.investment';
import InvestRecommendSwiper from './Home.investment.slide';

function InvestmentComponent() {
	const navigate = useNavigate();

	const handleKeywordClick = (e, keyword) => {
		e.preventDefault();
		navigate(`/home/keyword?word=${keyword}`);
	};

	return (
		<>
			<HomeS.MainCardWrapper style={{ paddingBottom: 0 }}>
				<HomeS.MainCardTitleWrapper>
					<HomeS.MainCardTitle ismain="true">
						실시간 여행 #키워드
					</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						여행관련 이슈 키워드를 확인하세요!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<InvestS.KeywordWrapper style={{ marginTop: '15px' }}>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '자연')}>
						#자연
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '캠핑')}>
						#캠핑
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '축제')}>
						#축제
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '호캉스')}>
						#호캉스
					</InvestS.KeywordDiv>
				</InvestS.KeywordWrapper>
				<InvestS.KeywordWrapper>
					<InvestS.KeywordDiv
						onClick={(e) => handleKeywordClick(e, '도시여행')}
					>
						#도시여행
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '꽃놀이')}>
						#꽃놀이
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '물놀이')}>
						#물놀이
					</InvestS.KeywordDiv>
				</InvestS.KeywordWrapper>
				<InvestS.KeywordWrapper>
					<InvestS.KeywordDiv
						onClick={(e) => handleKeywordClick(e, '해외여행')}
					>
						#해외여행
					</InvestS.KeywordDiv>
					<InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '차박')}>
						#차박
					</InvestS.KeywordDiv>
					{/* <InvestS.KeywordDiv onClick={(e) => handleKeywordClick(e, '강원도')}>
						#강원도
					</InvestS.KeywordDiv> */}
				</InvestS.KeywordWrapper>
			</HomeS.MainCardWrapper>

			<HomeS.MainCardWrapper style={{ marginTop: 0, paddingTop: 0 }}>
				<HomeS.MainCardTitleWrapper>
					<HomeS.MainCardTitle ismain="true">ETF 상품</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						프로여행러에게 이런 ETF 상품을 추천해요!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<InvestRecommendSwiper></InvestRecommendSwiper>
			</HomeS.MainCardWrapper>
		</>
	);
}

export default InvestmentComponent;
