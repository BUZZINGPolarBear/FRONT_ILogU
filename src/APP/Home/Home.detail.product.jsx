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
import * as DetailS from './Styles/Home.detail.product.styles';
function DetailVeiw() {
	return (
		<>
			<DetailS.MainPicWrapper img="/mainScreen/detail/paris.svg"></DetailS.MainPicWrapper>
			<DetailS.MainScreenWrapper>
				<DetailS.MainContentWrapper>
					<DetailS.MainScreenTitleWrapper>
						<DetailS.MainScreenTitle type="main">
							파리여행 26주 적금
						</DetailS.MainScreenTitle>
						<DetailS.MainScreenTitle type="sub">
							아이와 함꼐할 파리여행을 꿈꾸시나요? 하나와 함께하세요!
						</DetailS.MainScreenTitle>
					</DetailS.MainScreenTitleWrapper>
					<DetailS.ContentWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>상품특징</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">
								상품 가입 기간동안 조건 충족 시 우대금리를<br></br> 최고 연 0.5%
								지급
							</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입대상</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">개인</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입기간</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">26주</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입금액</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">제한없음</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입분류</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">적금</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>최저가입금액</DetailS.ContentTitle>
							<DetailS.Content isminimal="true">제한없음</DetailS.Content>
						</DetailS.ContentRowWrapper>
					</DetailS.ContentWrapper>
				</DetailS.MainContentWrapper>
			</DetailS.MainScreenWrapper>
		</>
	);
}

export default DetailVeiw;
