import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';

import * as infoS from './Styles/Home.main.keyword';
import * as HomeS from './Styles/Home.main.styles';
import KeywordCloud from './Home.main.keyword.cloud';
import TrendPredictionGraph from './Home.main.keyword.chart';

function DetailKeyword() {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	//키워드 파싱
	const urlParams = new URLSearchParams(nowLocation.search);
	const keyword = urlParams.get('word');

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/home/main`);
	};
	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></infoS.TopBackwardArea>
				<infoS.TopTextArea>키워드</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.KeywordInfoArea style={{ justifyContent: 'flex-start' }}>
				<HomeS.MainCardWrapper style={{ marginTop: '70px' }}>
					<HomeS.MainCardTitleWrapper>
						<HomeS.MainCardTitle ismain="true">
							워드클라우드
						</HomeS.MainCardTitle>
						<HomeS.MainCardTitle ismain="false">
							키워드를 바탕으로 도출된 워드 클라우드입니다
						</HomeS.MainCardTitle>
					</HomeS.MainCardTitleWrapper>
					<infoS.KeywordDetailInfoArea>
						<KeywordCloud searchKeyword={keyword}></KeywordCloud>
					</infoS.KeywordDetailInfoArea>
				</HomeS.MainCardWrapper>

				<HomeS.MainCardWrapper style={{ marginTop: '20px' }}>
					<HomeS.MainCardTitleWrapper
						style={{ height: '15%', minHeight: '35px' }}
					>
						<HomeS.MainCardTitle ismain="true">
							트렌드 지속 확인
						</HomeS.MainCardTitle>
					</HomeS.MainCardTitleWrapper>
					<infoS.KeywordDetailInfoArea>
						{/* <TrendPredictionGraph></TrendPredictionGraph> */}
					</infoS.KeywordDetailInfoArea>
				</HomeS.MainCardWrapper>
			</infoS.KeywordInfoArea>
		</>
	);
}

export default DetailKeyword;
