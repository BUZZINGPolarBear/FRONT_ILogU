import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopNavBar = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	max-width: 800px;
	height: 7vh;

	border-bottom: solid 1px ${tokens.colors.grey_50};
	box-shadow: 0px 5px 3px 0 rgba(0, 0, 0, 0.01);
	background-color: white;
	z-index: 10;
`;
export const TopBackwardArea = styled.div`
	width: 15%;
	height: 7vh;
	position: fixed;

	background-image: url('/Feed/writeFeed/backward.svg');
	background-repeat: no-repeat;
	background-position: center;

	background-color: #fffff;
	z-index: 9999;
`;
export const TopTextArea = styled.div`
	width: 100%;
	max-width: 800px;
	height: 7vh;
	position: fixed;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #000000;
	${tokens.typography.subtitle_1_SB};

	z-index: 9990;
`;
export const KeywordInfoArea = styled.div`
	// position: fixed;
	top: 7vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 100vw;
	height: fit-content;
	max-width: 800px;
	min-height: 100vh;
	margin-bottom: 10vh;

	background-color: rgb(252, 252, 252);
`;

export const FeedCatergoryTitleArea = styled.div`
	width: 95%;
	height: 25%;
	margin: auto;
	margin-top: 15vh;
	margin-bottom: 0;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
`;

export const FeedCategorySelectArea = styled.div`
	width: 95%;
	height: 50%;
	margin: auto;

	margin-top: 30px;
	position: relative;
	bakcground-color: #a8f0ff;
`;

export const FeedTitleMain = styled.h1`
	color: ${tokens.colors.green_600};
	${tokens.typography.headline_5};
`;

export const FeedSubTitleMain = styled.span`
	color: ${tokens.colors.grey_300};
	${tokens.typography.caption};
`;

export const FeedCategoryWrapper = styled.div`
	width: 100%;
	height: 7vh;
	max-height: 60px;
	margin: auto;
	margin-bottom: 10px;
	padding-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const FeedCategory = styled.div`
	position: relative;
	width: 90%;
	// height: 40%;
	main-height: 60px;
	padding: 10px;
	margin: auto;

	display: flex;
	align-items: center;

	border-radius: 10px;
	background-color: white;

	${(props) =>
		props.is_selected == true
			? `border: solid 2px ${tokens.colors.green_500}; background-color: rgba(26,185,143, 0.2);`
			: `border: none; `}
`;

export const FeedCategoryImg = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${tokens.typography.subtitle_1_SB};
	background-color: ${tokens.colors.green_50};
`;

export const FeedCategoryText = styled.div`
	width: 100px;
	height: 40px;

	display: flex;
	align-items: center;
	margin-left: 10px;
	color: ${tokens.colors.grey_500};
	${tokens.typography.subtitle_1_SB};
`;
export const FeedWriteSubmitArea = styled.div`
	width: 90%;
	min-height: 45px;
	margin: auto;
	margin-bottom: 10vh;
	border-radius: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	color: #ffffff;
	text-align: center;
	${tokens.typography.subtitle_1};
	${(props) =>
		props.is_category_selected == false && props.isUploadBtnClicked == false
			? `background-color: ${tokens.colors.grey_100}; cursor: not-allowed; pointer-events: none;`
			: `background-color: ${tokens.colors.green_500}; cursor: pointer;`}
	}
`;

export const KeywordDetailInfoArea = styled.div`
	width: 100%;
	height: 25vh;
	min-width: 360px;
	min-height: 190px;

	border-radius: 10px;
	background-color: #ffffff;

	box-shadow: 0px 5px 3px 0 rgba(0, 0, 0, 0.01);
`;
