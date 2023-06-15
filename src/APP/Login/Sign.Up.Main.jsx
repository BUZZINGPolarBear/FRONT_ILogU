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
import * as signInRecoil from './recoil/Login.recoil.states';

import TermsOfUseAgree from './Sign.Up.TermsOfUse';
import SelectIsParent from './Sign.Up.isParent';

function SignUpMain() {
	const navigate = useNavigate();

	const [isMainSelected, setIsMainSelected] = useState(false);
	const [isOver14Selecetd, setIsOver14Selected] = useState(false);
	const [isTermsOfUseSelected, setIsTermsOfUseSelected] = useState(false);
	const [isPrivateInfoSelected, setIsPrivateInfoSelected] = useState(false);
	const [isAdvertiseSelected, setIsAdvertiseSelected] = useState(false);
	const [isNextBtnClicked, setIsNextBtnClicked] = useRecoilState(
		signInRecoil.isTermsOfAgreeBtnClicked,
	);

	const handleBackwardClick = (e) => {
		e.preventDefault();
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
			<signUpS.SignUpMain>
				{isNextBtnClicked === false ? (
					<TermsOfUseAgree></TermsOfUseAgree>
				) : (
					<SelectIsParent></SelectIsParent>
				)}
			</signUpS.SignUpMain>
		</>
	);
}

export default SignUpMain;
