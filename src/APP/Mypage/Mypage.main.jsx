import React, { useEffect, useState, useRef } from 'react';

import * as MypageS from './Styles/Mypage.main.styles';

function MypageMain() {
	const profileUrl = localStorage.getItem('userProfile');
	return (
		<>
			<MypageS.TopNavBar>
				<MypageS.TopNavTitle>마이페이지</MypageS.TopNavTitle>
			</MypageS.TopNavBar>
			<MypageS.MainWrapper>
				<MypageS.MainUserWrapper>
					<MypageS.UserInfoWrapper>
						<MypageS.UserProfilePic img={profileUrl}></MypageS.UserProfilePic>
						루리맘
					</MypageS.UserInfoWrapper>
					<MypageS.UserInfoModify>정보수정</MypageS.UserInfoModify>
				</MypageS.MainUserWrapper>

				<MypageS.MainContentWrapper>
					<MypageS.MainContentContent type="main">
						고객센터
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						자주 묻는 질문
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						1 : 1 문의하기
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						공지사항
					</MypageS.MainContentContent>
				</MypageS.MainContentWrapper>

				<MypageS.MainContentWrapper>
					<MypageS.MainContentContent type="main">
						서비스 설정
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						개인정보 처리 방침
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						서비스 이용 약관
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						오픈소스 라이센스
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						실험실
					</MypageS.MainContentContent>
					<MypageS.MainContentContent type="sub">
						<span>버전 정보 0.0000.1</span>
						<span style={{ color: '#a1a1a1' }}>최신 버전 입니다.</span>
					</MypageS.MainContentContent>
				</MypageS.MainContentWrapper>
			</MypageS.MainWrapper>
		</>
	);
}

export default MypageMain;
