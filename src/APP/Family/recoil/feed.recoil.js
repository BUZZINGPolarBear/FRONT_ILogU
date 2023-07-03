import { atom } from 'recoil';

export const isCommentOpend = atom({
	key: 'familyFeedIsOpen',
	default: false,
});

export const isMoneyOpend = atom({
	key: 'familyMoneyIsOpen',
	default: false,
});
