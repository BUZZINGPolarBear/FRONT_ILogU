import { atom } from 'recoil';

export const feedCategoryRecoil = atom({
	key: 'feedCategoryRecoil',
	default: '전체',
});

export const isFeedCommentOpend = atom({
	key: 'feedFeedIsOpen',
	default: false,
});
