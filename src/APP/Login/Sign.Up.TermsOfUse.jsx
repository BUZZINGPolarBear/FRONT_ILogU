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

function TermsOfUseAgree() {
	const navigate = useNavigate();

	const [isMainSelected, setIsMainSelected] = useState(false);
	const [isOver14Selecetd, setIsOver14Selected] = useState(false);
	const [isTermsOfUseSelected, setIsTermsOfUseSelected] = useState(false);
	const [isPrivateInfoSelected, setIsPrivateInfoSelected] = useState(false);
	const [isAdvertiseSelected, setIsAdvertiseSelected] = useState(false);
	const [isNextBtnClicked, setIsNextBtnClicked] = useRecoilState(
		signInRecoil.isTermsOfAgreeBtnClicked,
	);

	const handleMainSelectBtnClick = (e) => {
		e.preventDefault();

		if (isMainSelected == true) {
			setIsMainSelected(false);
			setIsOver14Selected(false);
			setIsTermsOfUseSelected(false);
			setIsPrivateInfoSelected(false);
			setIsAdvertiseSelected(false);
		} else {
			setIsMainSelected(true);
			setIsOver14Selected(true);
			setIsTermsOfUseSelected(true);
			setIsPrivateInfoSelected(true);
			setIsAdvertiseSelected(true);
		}
	};

	const handleSubSelectBtnClick = (e, type) => {
		e.preventDefault();

		if (type == 'over14') setIsOver14Selected(!isOver14Selecetd);
		else if (type == 'termsOfUse')
			setIsTermsOfUseSelected(!isTermsOfUseSelected);
		else if (type == 'privateInfo')
			setIsPrivateInfoSelected(!isPrivateInfoSelected);
		else if (type == 'advertise') setIsAdvertiseSelected(!isAdvertiseSelected);
	};

	const handleSubmitBtnClick = (e) => {
		e.preventDefault();

		setIsNextBtnClicked(true);
	};

	return (
		<>
			<signUpS.SignUpMain>
				<signUpS.MainTitleWrapper>
					<signUpS.MainTitle>약관동의가 필요해요!</signUpS.MainTitle>
					<signUpS.MainSubTitle>
						서비스를 이용하기 위한 약관동의입니다.
					</signUpS.MainSubTitle>
				</signUpS.MainTitleWrapper>

				<signUpS.MainContentWrapper>
					<signUpS.MainCheckBoxWrapper
						onClick={(e) => handleMainSelectBtnClick(e)}
					>
						<signUpS.CheckBoxImageWrapper
							is_selected={isMainSelected}
						></signUpS.CheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={true}>
							모두 동의 (선택 약관 포함)
						</signUpS.CheckBoxTitle>
					</signUpS.MainCheckBoxWrapper>
					<hr style={{ margin: '0' }} />
					<signUpS.SubCheckBoxWrapper
						style={{ marginTop: '20px' }}
						onClick={(e) => handleSubSelectBtnClick(e, 'over14')}
					>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isOver14Selecetd}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 14세 이상
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper
						onClick={(e) => handleSubSelectBtnClick(e, 'termsOfUse')}
					>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isTermsOfUseSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 이용약관 동의 <u>보기</u>
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper
						onClick={(e) => handleSubSelectBtnClick(e, 'privateInfo')}
					>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isPrivateInfoSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[필수] 개인정보 처리 방침 동의 <u>보기</u>
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
					<signUpS.SubCheckBoxWrapper
						onClick={(e) => handleSubSelectBtnClick(e, 'advertise')}
					>
						<signUpS.SubCheckBoxImageWrapper
							is_selected={isAdvertiseSelected}
						></signUpS.SubCheckBoxImageWrapper>
						<signUpS.CheckBoxTitle is_main={false}>
							[선택] 광고성 정보 수집 및 마케팅 활용 동의
						</signUpS.CheckBoxTitle>
					</signUpS.SubCheckBoxWrapper>
				</signUpS.MainContentWrapper>
				<signUpS.BtnWrapper
					is_btn_available={
						isOver14Selecetd == true &&
						isTermsOfUseSelected == true &&
						isPrivateInfoSelected == true
							? true
							: false
					}
					onClick={(e) => handleSubmitBtnClick(e)}
				>
					약관에 동의합니다
				</signUpS.BtnWrapper>
			</signUpS.SignUpMain>
		</>
	);
}

export default TermsOfUseAgree;
