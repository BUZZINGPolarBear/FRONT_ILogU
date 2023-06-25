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
import * as signInRecoil from './recoil/Login.recoil.states';

import * as signInApi from './apis/Signup.API';

function SimplePassWord() {
	//유저의 답변
	const [signUpType, setSignUpType] = useRecoilState(signInRecoil.signUpType);
	const [babyName, setBabyName] = useRecoilState(signInRecoil.babyName);
	const [babyBirth, setBabyBirth] = useRecoilState(signInRecoil.babyBirth);
	const [userNickName, setUserNickName] = useRecoilState(
		signInRecoil.userNickname,
	);
	const [userEmail, setUserEmail] = useRecoilState(signInRecoil.userEmail);
	const [userPassword_2, setUserPassword_2] = useRecoilState(
		signInRecoil.userPassword,
	);

	const [simplePw, setSimplePw] = useRecoilState(
		signInRecoil.userSimplePassword,
	);
	const inputRef = useRef();
	const navigate = useNavigate();
	const maxLength = 6;

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleChange = (e) => {
		if (e.target.value.length <= 6) {
			setSimplePw(e.target.value);
		}
	};

	const handleSubmitBtnClick = async (e) => {
		e.preventDefault();
		console.log(`signUp type : ${signUpType}`);
		if (signUpType == 'parent') {
			const signUpResult = await signInApi.SignInParents(
				userEmail,
				userPassword_2,
				simplePw,
				userNickName,
				'PARENTS',
				babyName,
				babyBirth,
			);
		}

		// navigate('/home');
	};

	const handleCircleWrapClick = () => {
		inputRef.current.focus();
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

				<signUpS.MainContentWrapper
					onClick={handleCircleWrapClick}
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						padding: '10% 5%',
						justifyContent: 'center',
					}}
				>
					<input
						type="number"
						inputmode="numeric"
						ref={inputRef}
						value={simplePw}
						onChange={handleChange}
						maxLength={maxLength}
						keyboardType="number-pad"
						style={{
							position: 'absolute',
							left: '-1000px',
							top: '-1000px',
						}}
					/>
					<signUpS.SimplePwWrapper>
						{[...Array(maxLength)].map((_, i) => (
							<signUpS.PasswordCircle key={i} filled={i < simplePw.length} />
						))}
					</signUpS.SimplePwWrapper>
				</signUpS.MainContentWrapper>
				<signUpS.BtnWrapper
					is_btn_available={simplePw.length == 6}
					onClick={(e) => handleSubmitBtnClick(e)}
				>
					완료
				</signUpS.BtnWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SimplePassWord;
