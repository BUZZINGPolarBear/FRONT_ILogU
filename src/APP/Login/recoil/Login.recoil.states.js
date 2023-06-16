import { atom } from 'recoil';

export const isTermsOfAgreeBtnClicked = atom({
	key: 'isTermsOfAgreeBtnClicked',
	default: false,
});

export const isGetInfoBtnClicked = atom({
	key: 'isGetInfoBtnClicked',
	default: false,
});

export const isChattingState = atom({
	key: 'isChattingState',
	default: false,
});
