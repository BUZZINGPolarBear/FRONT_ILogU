import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilInfo from '../recoil/Login.recoil.states';

export const SignInParents = async (
	userEmail,
	userPassword_2,
	simplePw,
	userNickName,
	familyType,
	babyName,
	babyBirth,
) => {
	try {
		let strBabyBirth = babyBirth.toDateString();
		const requestBody = {
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

		const response = await axios.post(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/user/join`,
			requestBody,
		);
		console.log(response);
		return 'job done';
	} catch (error) {
		console.error(error);
	}
};
