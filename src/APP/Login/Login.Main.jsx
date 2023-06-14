import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as mainS from './styles/Sign.Main.Styles';

function LoginMain() {
	return (
		<mainS.MainScreenWrapper>
			<mainS.MainLogoArea>여긴 로고인데 나중에 추가</mainS.MainLogoArea>
			<mainS.MainBtnWrapper></mainS.MainBtnWrapper>
		</mainS.MainScreenWrapper>
	);
}

export default LoginMain;
