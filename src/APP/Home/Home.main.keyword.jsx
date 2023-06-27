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
			<infoS.KeywordInfoArea>
				<HomeS.MainCardWrapper>
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
			</infoS.KeywordInfoArea>
		</>
	);
}

export default DetailKeyword;
