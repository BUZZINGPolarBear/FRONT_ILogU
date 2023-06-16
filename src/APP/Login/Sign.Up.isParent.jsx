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
import * as signInRecoil from './recoil/Login.recoil.states';

import * as signUpS from './styles/Sign.Up.Main.Styles';
import * as mainS from './styles/Sign.Main.Styles';

function SelectIsParent(props) {
	const navigate = useNavigate();

	const [isParentClicked, setIsParentClicked] = useState(false);
	const [isInviteClicked, setIsInviteClicked] = useState(false);
	const [isGetInfoBtnClicked, setIsGetInfoBtnClicked] = useRecoilState(
		signInRecoil.isGetInfoBtnClicked,
	);

	const handleCardClick = (e, type) => {
		if (type == 'parent') {
			setIsParentClicked(true);
			setIsInviteClicked(false);
		} else if (type == 'invite') {
			setIsParentClicked(false);
			setIsInviteClicked(true);
		}
	};

	const handleGetInfoBtnClick = (e) => {
		console.log(isGetInfoBtnClicked);
		setIsGetInfoBtnClicked(true);
	};
	return (
		<>
			<signUpS.MainTitleWrapper>
				<signUpS.MainTitle>아이의 부모이신가요?</signUpS.MainTitle>
				<signUpS.MainSubTitle>
					아니라면 혹시 초대를 받으셨나요?
				</signUpS.MainSubTitle>
			</signUpS.MainTitleWrapper>
			<signUpS.MainContentWrapper
				style={{ display: 'flex', justifyContent: 'space-between' }}
			>
				<signUpS.BinarySelectBox
					onClick={(e) => handleCardClick(e, 'parent')}
					is_clicked={isParentClicked}
				>
					<signUpS.BinarySelectBoxContentWrapper>
						<signUpS.BinarySelectPic type="family"></signUpS.BinarySelectPic>
						<signUpS.BinarySelectTitle>
							<signUpS.BinarySelectTitleImpact>
								부모
							</signUpS.BinarySelectTitleImpact>
							입니다
						</signUpS.BinarySelectTitle>
					</signUpS.BinarySelectBoxContentWrapper>
				</signUpS.BinarySelectBox>
				<signUpS.BinarySelectBox
					onClick={(e) => handleCardClick(e, 'invite')}
					is_clicked={isInviteClicked}
				>
					<signUpS.BinarySelectBoxContentWrapper>
						<signUpS.BinarySelectPic type="letter"></signUpS.BinarySelectPic>
						<signUpS.BinarySelectTitle>
							<signUpS.BinarySelectTitleImpact>
								초대
							</signUpS.BinarySelectTitleImpact>
							받았어요
						</signUpS.BinarySelectTitle>
					</signUpS.BinarySelectBoxContentWrapper>
				</signUpS.BinarySelectBox>
			</signUpS.MainContentWrapper>
			<signUpS.BtnWrapper
				onClick={(e) => handleGetInfoBtnClick(e)}
				is_btn_available={
					isParentClicked == true || isInviteClicked == true ? true : false
				}
			>
				다음
			</signUpS.BtnWrapper>
		</>
	);
}

export default SelectIsParent;
