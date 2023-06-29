import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilInfo from '../recoil/Login.recoil.states';

export const SignUpParents = async (
	userEmail,
	userPassword_2,
	simplePw,
	userNickName,
	familyType,
	babyName,
	babyBirth,
	inviteCode,
) => {
	try {
		let strBabyBirth = babyBirth.toDateString();
		let requestBody = {};

		if (familyType === 'PARENTS') {
			requestBody = {
				email: userEmail,
				password: userPassword_2,
				simplePassword: simplePw,
				nickname: userNickName,
				familyType: 'PARENTS',
				familyName: '루리네 가족',
				verifyCode: 'onehana',
				childName: babyName,
				childBirth: strBabyBirth,
			};
		} else {
			requestBody = {
				email: userEmail,
				password: userPassword_2,
				simplePassword: simplePw,
				nickname: userNickName,
				familyType: 'OTHERS',
				familyName: '루리네 가족',
				verifyCode: 'onehana',
				childName: babyName,
				childBirth: strBabyBirth,
				inviteCode: inviteCode,
			};
		}

		console.log(requestBody);

		const response = await axios.post(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/user/join`,
			requestBody,
		);

		console.log(response.data);

		return response.data.result;
	} catch (error) {
		console.error(error);
	}
};

export const SignInUser = async (userEmail, userPw) => {
	try {
		const requestBody = {
			email: userEmail,
			password: userPw,
		};

		const response = await axios.post(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/user/login`,
			requestBody,
		);

		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const SignUpInvitedCode = async (code) => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/user/join/familyCode/${code}`,
		);

		return response.data.isSuccess;
	} catch (error) {
		console.error(error);
	}
};
