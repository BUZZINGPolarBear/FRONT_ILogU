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

import * as signUpS from './styles/Sign.Up.Main.Styles';

function SignUpMain() {
	const navigate = useNavigate();

	const [isMainSelected, setIsMainSelected] = useState(false);

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/signin`);
	};

	return (
		<>
			<signUpS.TopNavBar>
				<signUpS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></signUpS.TopBackwardArea>
				<signUpS.TopTextArea>회원가입</signUpS.TopTextArea>
			</signUpS.TopNavBar>
			<signUpS.SignUpMain>
				<signUpS.MainTitleWrapper>
					<signUpS.MainTitle>약관동의가 필요해요!</signUpS.MainTitle>
					<signUpS.MainSubTitle>
						서비스를 이용하기 위한 약관동의입니다.
					</signUpS.MainSubTitle>
				</signUpS.MainTitleWrapper>

				<signUpS.MainContentWrapper>
					<signUpS.MainQuestionWrapper>
						<signUpS.CheckBoxWrapper
							isSelected={isMainSelected}
						></signUpS.CheckBoxWrapper>
						<signUpS.CheckBoxTitle is_main="true">
							모두 동의 (선택 약관 포함)
						</signUpS.CheckBoxTitle>
					</signUpS.MainQuestionWrapper>
				</signUpS.MainContentWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SignUpMain;
