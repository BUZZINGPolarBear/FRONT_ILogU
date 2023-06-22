import { atom } from 'recoil';

export const isTermsOfAgreeBtnClicked = atom({
	key: 'isTermsOfAgreeBtnClicked',
	default: false,
});

export const isGetInfoBtnClicked = atom({
	key: 'isGetInfoBtnClicked',
	default: false,
});

export const signUpType = atom({
	key: 'signUpType',
	default: '',
});
export const isChattingState = atom({
	key: 'isChattingState',
	default: false,
});

export const babyName = atom({
	key: 'babyName',
	default: '',
});

export const babyBirth = atom({
	key: 'babyBirth',
	default: new Date(),
});

export const userEmail = atom({
	key: 'userEmail',
	default: '',
});

export const userNickname = atom({
	key: 'userNickname',
	default: '',
});

export const userPassword = atom({
	key: 'userPassword',
	default: '',
});

export const goToSimplePassword = atom({
	key: 'goToSimplePassword',
	default: false,
});

export const inviteCode = atom({
	key: 'inviteCode',
	default: '',
});

export const relateName = atom({
	key: 'relateName',
	default: '',
});
