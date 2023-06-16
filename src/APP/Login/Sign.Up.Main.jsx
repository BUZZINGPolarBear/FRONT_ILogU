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

import TermsOfUseAgree from './Sign.Up.TermsOfUse';
import SelectIsParent from './Sign.Up.isParent';
import SignUpGetInfo from './Sign.Up.getInfo';

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
	const [isGetInfoBtnClicked, setIsGetInfoBtnClicked] = useRecoilState(
		signInRecoil.isGetInfoBtnClicked,
	);
	const [isChattingState, setIsChattingState] = useRecoilState(
		signInRecoil.isChattingState,
	);

	const handleBackwardClick = (e) => {
		e.preventDefault();
		setIsNextBtnClicked(false);
		setIsGetInfoBtnClicked(false);
		navigate(`/`);
	};

	//보여질 컴포넌트 수정
	let ComponentToShow;

	if (isNextBtnClicked === false) {
		ComponentToShow = TermsOfUseAgree;
	} else if (isNextBtnClicked === true && isGetInfoBtnClicked === false) {
		ComponentToShow = SelectIsParent;
	} else if (isNextBtnClicked === true && isGetInfoBtnClicked === true) {
		ComponentToShow = SignUpGetInfo;
	}

	return (
		<>
			<signUpS.TopNavBar>
				<signUpS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></signUpS.TopBackwardArea>
				<signUpS.TopTextArea>회원가입</signUpS.TopTextArea>
			</signUpS.TopNavBar>
			<signUpS.SignUpMain isChattingState={isChattingState}>
				<ComponentToShow></ComponentToShow>
			</signUpS.SignUpMain>
		</>
	);
}

export default SignUpMain;
