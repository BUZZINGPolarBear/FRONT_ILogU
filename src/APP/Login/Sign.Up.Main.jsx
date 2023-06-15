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
import * as mainS from './styles/Sign.Main.Styles';

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
					<signUpS.MainCheckBoxWrapper>
						<signUpS.CheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.CheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={true}>
							모두 동의 (선택 약관 포함)
						</signUpS.CheckBoxTitle>
					</signUpS.MainCheckBoxWrapper>
					<hr style={{ margin: '0' }} />
					<signUpS.SubCheckBoxWrapper style={{ marginTop: '20px' }}>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 14세 이상
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 이용약관 동의 <u>보기</u>
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 개인정보 처리 방침 동의 <u>보기</u>
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[선택] 광고성 정보 수집 및 마케팅 활용 동의
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
				</signUpS.MainContentWrapper>
				<signUpS.BtnWrapper>약관에 동의합니다</signUpS.BtnWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default SignUpMain;
