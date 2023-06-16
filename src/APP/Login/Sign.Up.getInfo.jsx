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
	const [speechBubble, setSpeechBubble] = useState([]);

	//유저의 답변
	let bubbleIndex = 1;
	const [userName, setUserName] = useState('');
	const [babyBirth, setBabyBirth] = useState('');
	const [userNickName, setUserNickName] = useState('');
	const [userPassword_1, setUserPassword_1] = useState('');
	const [userPassword_2, setUserPassword_2] = useState('');

	const userType = props.userType;
	let bubbleTop = 2;
	const inputRef = useRef(null);

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();

			if (userName == '') {
				setUserName(event.target.value);
				console.log('Input value:', event.target.value);
			}
		}
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.scrollIntoView({ behavior: 'smooth' });
			inputRef.current.focus();
		}
		setSpeechBubble([
			<getInfoS.SpeechBubbleWrapper
				top={2 + (bubbleIndex - 1) * 10}
				type="iloguSpeaking"
			>
				<getInfoS.SpeechBubble type="iloguSpeaking">
					아이의 이름을 알려주세요!
				</getInfoS.SpeechBubble>
			</getInfoS.SpeechBubbleWrapper>,
			<getInfoS.SpeechBubbleWrapper
				top={2 + bubbleIndex * 10}
				type="userSpeaking"
			>
				<getInfoS.SpeechBubble type="userSpeaking">
					<getInfoS.StyledInput
						type="text"
						placeholder="아이의 이름을 알려주세요."
						onKeyDown={(e) => handleKeyDown(e)}
						ref={inputRef}
					/>
				</getInfoS.SpeechBubble>
			</getInfoS.SpeechBubbleWrapper>,
		]);
	}, []);

	useEffect(() => {
		if (userName != '' && userName.length >= 1) {
			bubbleIndex += 1;
			const newSpeechBubble = speechBubble.slice(0, -1);
			setSpeechBubble([
				...newSpeechBubble,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 1) * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						{userName}
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
				<getInfoS.SpeechBubbleWrapper
					top={2 + bubbleIndex * 10}
					type="iloguSpeaking"
				>
					<getInfoS.SpeechBubble type="iloguSpeaking">
						아이의 생년월일은 언제인가요?
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
			]);

			bubbleIndex += 1;
		}
	}, [userName, babyBirth, userNickName, userPassword_1, userPassword_2]);

	return <>{speechBubble}</>;
}

export default SignUpGetInfo;
