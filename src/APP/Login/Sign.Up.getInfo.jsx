import React, { useEffect, useState, useRef } from 'react';
import * as getInfoS from './styles/Sign.Up.getInfo.Styles';

//date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

function dateToString(date) {
	const year = date.getFullYear(); // 2023
	const month = String(date.getMonth() + 1).padStart(2, '0'); // 06, because getMonth() returns 0-11
	const day = String(date.getDate()).padStart(2, '0'); // 16

	const formattedDate = `${year}.${month}.${day}`; // 2023.06.16

	return formattedDate;
}

function validateEmail(email) {
	const re =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return re.test(String(email).toLowerCase());
}

function SignUpGetInfo(props) {
	const [speechBubble, setSpeechBubble] = useState([]);

	//유저의 답변
	let bubbleIndex = 1;
	const [userName, setUserName] = useState('');
	const [babyBirth, setBabyBirth] = useState(new Date());
	const [isBirthUpdate, setIsBirthUpdate] = useState(false);
	const [userNickName, setUserNickName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword_1, setUserPassword_1] = useState('');
	const [userPassword_2, setUserPassword_2] = useState('');

	const userType = props.userType;
	let bubbleTop = 2;
	const inputRef = useRef(null);

	const handleDateChanged = (date) => {
		setBabyBirth(date);
		setIsBirthUpdate(true);
	};

	const handleKeyDown = (event, type) => {
		if (event.key === 'Enter') {
			event.preventDefault();

			if (type == 'babyName') {
				if (userName == '') {
					setUserName(event.target.value);
				}
			}

			if (type == 'nickName') {
				if (userNickName == '') {
					setUserNickName(event.target.value);
				}
			}
			if (type == 'email') {
				if (userEmail == '') {
					if (validateEmail(event.target.value)) {
						setUserNickName(event.target.value);
					} else {
						event.target.value = '';
						event.target.placeholder = '이메일 형식을 확인해주세요.';
					}
				}
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
						placeholderTextColor="#fafafa"
						onKeyDown={(e) => handleKeyDown(e, 'babyName')}
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
			setSpeechBubble([]);
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
				<getInfoS.SpeechBubbleWrapper
					top={2 + bubbleIndex + 3 * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						<DatePicker
							className="datePicker"
							locale={ko}
							selected={babyBirth}
							// onSelect={handleDateChange}
							onChange={(date) => handleDateChanged(date)}
							dateFormat="yyyy/MM/dd"
						/>
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
			]);
			bubbleIndex += 2;
		}
		if (userName.length >= 1 && isBirthUpdate === true) {
			bubbleIndex += 1;
			const newSpeechBubble = speechBubble.slice(0, -1);
			setSpeechBubble([]);
			setSpeechBubble([
				...newSpeechBubble,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 2) * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						{dateToString(babyBirth)}
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 1) * 10}
					type="iloguSpeaking"
				>
					<getInfoS.SpeechBubble type="iloguSpeaking">
						제가 어떻게 불러드릴까요?{' '}
						<getInfoS.SpeechBubbleSmall>
							{' '}
							&nbsp;(닉네임)
						</getInfoS.SpeechBubbleSmall>
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
				<getInfoS.SpeechBubbleWrapper
					top={2 + bubbleIndex * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						<getInfoS.StyledInput
							type="text"
							placeholder="닉네임을 알려주세요."
							placeholderTextColor="#fafafa"
							onKeyDown={(e) => handleKeyDown(e, 'nickName')}
							ref={inputRef}
						/>
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
			]);
			bubbleIndex += 2;
		}
		if (
			userName.length >= 1 &&
			isBirthUpdate === true &&
			userNickName.length >= 1
		) {
			bubbleIndex += 1;
			const newSpeechBubble = speechBubble.slice(0, -1);
			setSpeechBubble([]);
			setSpeechBubble([
				...newSpeechBubble,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 3) * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						{userNickName}
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 2) * 10}
					type="iloguSpeaking"
				>
					<getInfoS.SpeechBubble type="iloguSpeaking">
						사용하실 이메일을 알려주세요!
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
				<getInfoS.SpeechBubbleWrapper
					top={2 + (bubbleIndex - 1) * 10}
					type="userSpeaking"
				>
					<getInfoS.SpeechBubble type="userSpeaking">
						<getInfoS.StyledInput
							type="text"
							placeholder="이메일을 입력해주세요."
							placeholderTextColor="#fafafa"
							onKeyDown={(e) => handleKeyDown(e, 'email')}
							ref={inputRef}
						/>
					</getInfoS.SpeechBubble>
				</getInfoS.SpeechBubbleWrapper>,
			]);
		}
	}, [
		userName,
		isBirthUpdate,
		userNickName,
		userEmail,
		userPassword_1,
		userPassword_2,
	]);

	return <>{speechBubble}</>;
}

export default SignUpGetInfo;
