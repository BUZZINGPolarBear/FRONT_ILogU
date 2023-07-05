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
			</MypageS.MainWrapper>
		</>
	);
}

export default MypageMain;
