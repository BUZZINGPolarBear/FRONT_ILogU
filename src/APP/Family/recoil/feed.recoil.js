import { atom } from 'recoil';

export const isCommentOpend = atom({
	key: 'familyFeedIsOpen',
	default: false,
});

export const isMoneyOpend = atom({
	key: 'familyMoneyIsOpen',
	default: false,
});

export const isFamilyStatusOpend = atom({
	key: 'familyStatusIsOpen',
	default: false,
});

export const feedBoardId = atom({
	key: 'familyFeedBoardId',
	default: 0,
});

export const commentWriteResult = atom({
	key: 'familyCommentWriteResult',
	default: { boardId: 0, commentCnt: 0 },
});

export const familyMoneySendResult = atom({
	key: 'familyMoneySendResult',
	default: { boardId: 0, money: 0 },
});
