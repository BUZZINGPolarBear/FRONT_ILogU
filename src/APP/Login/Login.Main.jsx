import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';

import * as mainS from './styles/Sign.Main.Styles';
//recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import * as signInRecoil from './recoil/Login.recoil.states';

function LoginMain() {
	const navigate = useNavigate();

	const handleSignUpBtn = (e) => {
		e.preventDefault();
		navigate('signup');
	};
	const handleSignInBtn = (e) => {
		e.preventDefault();
		navigate('/signin');
	};
	const [isChattingState, setIsChattingState] = useRecoilState(
		signInRecoil.isChattingState,
	);
	useEffect(() => {}, [setIsChattingState(false)]);
	return (
		<mainS.MainScreenWrapper>
			<mainS.MainLogoArea>여긴 로고인데 나중에 추가</mainS.MainLogoArea>
			<mainS.MainBtnWrapper>
				<mainS.MainBtn type="signup" onClick={(e) => handleSignUpBtn(e)}>
					회원가입
				</mainS.MainBtn>
				<mainS.MainBtn type="signin" onClick={(e) => handleSignInBtn(e)}>
					로그인
				</mainS.MainBtn>
			</mainS.MainBtnWrapper>
		</mainS.MainScreenWrapper>
	);
}

export default LoginMain;
