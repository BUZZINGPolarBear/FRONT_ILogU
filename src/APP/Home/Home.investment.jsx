import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as InvestS from './Styles/Home.investment';
import InvestRecommendSwiper from './Home.investment.slide';
function InvestmentComponent() {
	return (
		<>
			<HomeS.MainCardWrapper>
				<HomeS.MainCardTitleWrapper>
					<HomeS.MainCardTitle ismain="true">
						실시간 여행 #키워드
					</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						여행관련 이슈 키워드를 확인하세요!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<InvestS.KeywordWrapper style={{ marginTop: '15px' }}>
					<InvestS.KeywordDiv>#자연</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#캠핑</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#축제</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#호캉스</InvestS.KeywordDiv>
				</InvestS.KeywordWrapper>
				<InvestS.KeywordWrapper>
					<InvestS.KeywordDiv>#도시여행</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#꽃놀이</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#물놀이</InvestS.KeywordDiv>
				</InvestS.KeywordWrapper>
				<InvestS.KeywordWrapper>
					<InvestS.KeywordDiv>#해외여행</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#차박</InvestS.KeywordDiv>
					<InvestS.KeywordDiv>#강원도</InvestS.KeywordDiv>
				</InvestS.KeywordWrapper>
			</HomeS.MainCardWrapper>

			<HomeS.MainCardWrapper style={{ marginTop: '1vh' }}>
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
