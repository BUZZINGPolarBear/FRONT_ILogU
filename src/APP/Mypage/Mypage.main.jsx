import React, { useEffect, useState, useRef } from 'react';

import * as MypageS from './Styles/Mypage.main.styles';

function MypageMain() {
	return (
		<>
			<MypageS.TopNavBar>
				<MypageS.TopNavTitle>마이페이지</MypageS.TopNavTitle>
			</MypageS.TopNavBar>
			<MypageS.MainWrapper></MypageS.MainWrapper>
		</>
	);
}

export default MypageMain;
