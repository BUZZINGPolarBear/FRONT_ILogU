import React, { useEffect, useState, useRef } from 'react';
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
import * as signInS from './styles/Sign.In.Styles';
import * as signInRecoil from './recoil/Login.recoil.states';

function SignInMain() {
	const navigate = useNavigate();
	const [isLoginAvailable, setIsLoginAvailable] = useState(false);
	const [idInput, setIdInput] = useState('');
	const [pwInput, setPwInput] = useState('');
	const [isCheckboxClicked, setIsCheckboxClicked] = useState(
		localStorage.getItem('isCheckboxClicked'),
	);

	const handleBackwardClick = (e) => {
		navigate(`/`);
	};

	const handleIdEnter = (e, type) => {
		const inputValue = e.target.value;
		if (type == 'id') {
			setIdInput(inputValue);

			if (inputValue.length === 0 || pwInput.length === 0) {
				setIsLoginAvailable(false);
			} else {
				setIsLoginAvailable(true);
			}
		}
		if (type == 'pw') {
			setPwInput(e.target.value);

			if (inputValue.length === 0 || idInput.length === 0) {
				setIsLoginAvailable(false);
			} else {
				setIsLoginAvailable(true);
			}
		}
	};

	const handleAutoLoginBtn = (e) => {
		setIsCheckboxClicked(!isCheckboxClicked);
	};

	return (
		<>
			<signUpS.TopNavBar>
				<signUpS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></signUpS.TopBackwardArea>
				<signUpS.TopTextArea>로그인</signUpS.TopTextArea>
			</signUpS.TopNavBar>
			<signUpS.SignUpMain>
				<signInS.MainWrapper>
					<signInS.RecommendIdPwWrapper>
						<signInS.RecommendIcon></signInS.RecommendIcon>
						<signInS.RecommendText>
							테스트 계정으로 로그인해보세요<br></br> ID: onehana / PW:
							onehana1!
						</signInS.RecommendText>
					</signInS.RecommendIdPwWrapper>
					<signInS.SignInWrapper>
						<signInS.userInput
							type="text"
							placeholder="아이디"
							placeholderTextColor="#797A7A"
							onChange={(e) => handleIdEnter(e, 'id')}
							value={idInput}
						></signInS.userInput>
						<signInS.userInput
							type="password"
							placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
							placeholderTextColor="#797A7A"
							onChange={(e) => handleIdEnter(e, 'pw')}
							value={pwInput}
						></signInS.userInput>
						<signInS.SignInTextWrapper>
							<signInS.AutoSignInWrapper>
								<signInS.AutoSignInBox
									isCheckboxClicked={isCheckboxClicked}
									onClick={(e) => handleAutoLoginBtn(e)}
								></signInS.AutoSignInBox>
								자동 로그인
							</signInS.AutoSignInWrapper>
							<signInS.FindPassword>비밀번호 찾기</signInS.FindPassword>
						</signInS.SignInTextWrapper>
					</signInS.SignInWrapper>
					<signInS.SignInBtn isAvailable={isLoginAvailable}>
						로그인
					</signInS.SignInBtn>
				</signInS.MainWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SignInMain;
