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

function SimplePassWord() {
	const [password, setPassword] = useState('');
	const inputRef = useRef();

	const maxLength = 6;

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleChange = (event) => {
		setPassword(event.target.value);
	};

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

				<signUpS.MainContentWrapper
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						padding: '10% 5%',
						justifyContent: 'center',
					}}
				>
					<input
						type="number"
						ref={inputRef}
						value={password}
						onChange={handleChange}
						maxLength={maxLength}
						style={{ display: 'none' }} // Hides the actual input
					/>
					<signUpS.SimplePwWrapper>
						{[...Array(maxLength)].map((_, i) => (
							<signUpS.PasswordCircle key={i} filled={i < password.length} />
						))}
					</signUpS.SimplePwWrapper>
				</signUpS.MainContentWrapper>
				<signUpS.BtnWrapper
					is_btn_available={password.length == 6}
					onClick={(e) => handleSubmitBtnClick(e)}
				>
					완료
				</signUpS.BtnWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SimplePassWord;
