import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';

import * as tokens from '../../tokens';
import * as infoS from './Styles/Home.main.keyword';
import * as HomeS from './Styles/Home.main.styles';
import KeywordCloud from './Home.main.keyword.cloud';
import TrendPredictionGraph from './Home.main.keyword.chart';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import * as trendRecoil from './recoil/Home.main.keyword.chart';

function DetailKeyword() {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	const [rankSelectedKeyword, setRankSelectedKeyword] = useRecoilState(
		trendRecoil.rankSelectedKeyword,
	);
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
							키워드를 바탕으로 네이버 뉴스 증권을 기준으로 도출된 워드
							클라우드입니다
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

					{rankSelectedKeyword != '' ? (
						<infoS.KeywordDetailInfoArea>
							<infoS.KeywordTitle>
								<infoS.TitleWrapper>
									<infoS.TitleCircle color="green"></infoS.TitleCircle> Predict
									value
								</infoS.TitleWrapper>
								<infoS.TitleWrapper>
									<infoS.TitleCircle color="red"></infoS.TitleCircle> Real value
								</infoS.TitleWrapper>
							</infoS.KeywordTitle>
							<infoS.ChartArea>
								<TrendPredictionGraph></TrendPredictionGraph>
							</infoS.ChartArea>
							<infoS.KeywordTitle
								style={{
									justifyContent: 'space-around',
									color: tokens.colors.grey_300,
								}}
							>
								<span>2019.06</span>
								<span>2022.01</span>
								<span>2022.06</span>
								<span>2023.01</span>
								<span>2023.12</span>
								<span>2024.06</span>
							</infoS.KeywordTitle>
						</infoS.KeywordDetailInfoArea>
					) : (
						<infoS.KeywordDetailInfoArea
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<HomeS.ChartNotSelectedWrapper>
								<HomeS.ChartNotSelectedIcon></HomeS.ChartNotSelectedIcon>
								<span>키워드를 선택해주세요</span>
							</HomeS.ChartNotSelectedWrapper>
						</infoS.KeywordDetailInfoArea>
					)}
				</HomeS.MainCardWrapper>
			</infoS.KeywordInfoArea>
		</>
	);
}

export default DetailKeyword;
