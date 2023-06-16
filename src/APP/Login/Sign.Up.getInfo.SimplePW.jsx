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

function SimplePassWord() {
	const navigate = useNavigate();

	const [isNextBtnClicked, setIsNextBtnClicked] = useRecoilState(
		signInRecoil.isTermsOfAgreeBtnClicked,
	);

	const handleSubmitBtnClick = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<signUpS.SignUpMain>
				<signUpS.MainTitleWrapper>
					<signUpS.MainTitle>
						마지막이에요! <br></br>간편비밀번호를 입력해주세요.
					</signUpS.MainTitle>
					<signUpS.MainSubTitle>
						6자리의 숫자를 입력해주세요.
					</signUpS.MainSubTitle>
				</signUpS.MainTitleWrapper>

				<signUpS.MainContentWrapper></signUpS.MainContentWrapper>
				<signUpS.BtnWrapper
					is_btn_available={false}
					onClick={(e) => handleSubmitBtnClick(e)}
				>
					약관에 동의합니다
				</signUpS.BtnWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SimplePassWord;
