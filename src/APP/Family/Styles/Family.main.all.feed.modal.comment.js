import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const TopCommentTitle = styled.div`
	width: 100%;
	height: 40px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;

	color: ${tokens.colors.grey_500};
	${tokens.typography.subtitle_3};

	border-bottom: 1px solid ${tokens.colors.grey_50};
`;
export const DraggableBox = styled.div`
	width: 40%;
	height: 3px;
	border-radius: 10px;
	background-color: ${tokens.colors.grey_50};
`;
export const CommentWrapper = styled.div`
	width: 100%;
	min-height: 50px;
	height: fit-content;
	margin-top: 15px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

export const CommentProfileWrapper = styled.div`
	width: 15%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CommentProfile = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;

	background-image: url(${(props) => props.src});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	background-color: ${tokens.colors.grey_50};
`;

export const CommentContentWrapper = styled.div`
	width: 85%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const CommentContentTitle = styled.div`
	width: 100%;
	height: ${tokens.typography.body_3_SB};
	color: ${tokens.colors.grey_700};
	${tokens.typography.body_3_SB}

	background-color: #ffffff;
`;
export const CommentContent = styled.div`
	width: 100%;
	min-height: ${tokens.typography.body_2.fontSize};
	color: ${tokens.colors.grey_700};
	${tokens.typography.body_2};

	background-color: #ffffff;
`;

export const CommentWriteWrapper = styled.div`
	position: fixed;
	bottom: 0;
	width: 95%;
	height: 60px;
	padding: 10px 0px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	border-top: 1px solid ${tokens.colors.grey_50};
	// background-color: #efefefce;
`;

export const CommentWriteAreaWrapper = styled.div`
	width: 95%;
	height: 40px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;

	border-radius: 10px;
	background-color: #efefefce;
`;

export const commentWriteInput = styled.input`
	width: 85%;
	height: 30px;
	border: none;
	outline: none;

	border-radius: 10px;
	color: ${tokens.colors.grey_300};
	${tokens.typography.body_2};
	caret-color: ${tokens.colors.green_500};
	caret-size: 20px;
	background-color: #efefefce;
`;

export const commentWriteBtn = styled.button`
	width: 11%;
	height: 30px;

	border: none;
	outline: none;

	background-image: url('/Family/comment_upload.svg');
	background-size: 23px 23px;
	background-position: center;
	background-repeat: no-repeat;
	background-color: #efefefce;
`;
