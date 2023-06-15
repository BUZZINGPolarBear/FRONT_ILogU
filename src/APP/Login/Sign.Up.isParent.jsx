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

function SelectIsParent(props) {
	const navigate = useNavigate();

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/signin`);
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
				<signUpS.BinarySelectBox>
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
				<signUpS.BinarySelectBox>
					<signUpS.BinarySelectBoxContentWrapper>
						<signUpS.BinarySelectPic type="letter"></signUpS.BinarySelectPic>
						<signUpS.BinarySelectTitle>
							<signUpS.BinarySelectTitleImpact>
								초대
							</signUpS.BinarySelectTitleImpact>
							를 받았어요
						</signUpS.BinarySelectTitle>
					</signUpS.BinarySelectBoxContentWrapper>
				</signUpS.BinarySelectBox>
			</signUpS.MainContentWrapper>
			<signUpS.BtnWrapper>다음</signUpS.BtnWrapper>
		</>
	);
}

export default SelectIsParent;
