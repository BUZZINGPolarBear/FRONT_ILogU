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

	width: 100vw;
	height: 90vh;

	background-color: white;
`;
