import styled from 'styled-components';
import * as tokens from '../../../../tokens';

export const TopNavBar = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100vw;
	height: 7vh;

	border-bottom: solid 1px ${tokens.colors.grey_50};
	box-shadow: 0px 5px 3px 0 rgba(0, 0, 0, 0.01);
	background-color: white;
	z-index: 10;
`;
export const TopBackwardArea = styled.div`
	width: 15%;
	height: 100%;
	position: relative;

	background-image: url('/Feed/writeFeed/backward.svg');
	background-repeat: no-repeat;
	background-position: center;

	background-color: #fffff;
`;
export const TopTextArea = styled.div`
	width: 85%;
	height: 100%;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	color: #000000;
	${tokens.typography.subtitle_1_SB};
`;
export const FeedWriteArea = styled.div`
	position: fixed;
	top: 7vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 100vw;
	height: 93vh;

	background-color: white;
`;

export const FeedCatergoryTitleArea = styled.div`
	width: 95%;
	height: 25%;
	margin: auto;
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

export const FeedWriteSubmitArea = styled.div`
	width: 90%;
	height: 55px;
	margin: auto;
	border-radius: 20px;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;
	color: #ffffff;
	text-align: center;
	${tokens.typography.subtitle_1};
	${(props) =>
		props.isSelected == false
			? `background-color: ${tokens.colors.grey_100}; cursor: not-allowed;`
			: `background-color: ${tokens.colors.green_500}; cursor: pointer;`}
`;
