import { atom } from 'recoil';

export const feedCategoryRecoil = atom({
	key: 'feedCategoryRecoil',
	default: '전체',
});

export const isFeedCommentOpend = atom({
	key: 'feedFeedIsOpen',
	default: false,
});

export const feedCommentWriteResult = atom({
	key: 'feedCommentSendResult',
	default: { boardId: 0, commentsCount: 0 },
});
