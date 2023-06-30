import { atom } from 'recoil';

// localStorage에 저장된 키워드가 추가되거나 있으면 불러오기
export const keywordLocalStorage = atom({
	key: 'localStorageKeywordArray',
	default: JSON.parse(localStorage.getItem('keywordArray')),
});

export const rankSelectedKeyword = atom({
	key: 'rankSelectedKeyword',
	default: '',
});

// 키워드 유사도 결과 저장
export const keywordSimilarityRank = atom({
	key: 'keywordSimilarityRank',
	default: `[{"text": "키워드를 선택해주세요.", "value": 0}, {"text": "키워드를 선택해주세요.", "value": 0}]`,
});
// TODO : key 따로 빼서 관리하기
// export const DEFAULT_ATOM_SELECTED_KEYWORD = {
// }
