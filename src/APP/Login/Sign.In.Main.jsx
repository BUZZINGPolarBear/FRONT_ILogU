import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import * as signUpS from './styles/Sign.Up.Main.Styles';
import * as signInRecoil from './recoil/Login.recoil.states';

function SignInMain() {
	const navigate = useNavigate();
	const handleBackwardClick = (e) => {
		navigate(`/`);
	};

	return (
		<>
			<signUpS.TopNavBar>
				<signUpS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></signUpS.TopBackwardArea>
				<signUpS.TopTextArea>회원가입</signUpS.TopTextArea>
			</signUpS.TopNavBar>
			<signUpS.SignUpMain>로그인 화면</signUpS.SignUpMain>
		</>
	);
}

export default SignInMain;
