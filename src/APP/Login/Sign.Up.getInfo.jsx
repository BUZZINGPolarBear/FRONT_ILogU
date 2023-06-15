import React, { useEffect, useState, useRef } from 'react';
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
import * as getInfoS from './styles/Sign.Up.getInfo.Styles';

function SignUpGetInfo(props) {
	// const isAdvertiseSelected = props.isAdvertiseSelected;
	const userType = props.userType;
	let bubbleTop = 2;
	let bubbleIndex = 1;
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, []);

	return (
		<>
			<getInfoS.SpeechBubbleWrapper top={2 + (1 - 1) * 10} type="iloguSpeaking">
				아이의 이름을 알려주세요!
			</getInfoS.SpeechBubbleWrapper>
			<getInfoS.SpeechBubbleWrapper top={2 + (2 - 1) * 10}>
				아이의 이름을 알려주세요!
			</getInfoS.SpeechBubbleWrapper>
			<getInfoS.SpeechBubbleWrapper top={2 + (3 - 1) * 10}>
				아이의 이름을 알려주세요!
			</getInfoS.SpeechBubbleWrapper>
		</>
	);
}

export default SignUpGetInfo;
