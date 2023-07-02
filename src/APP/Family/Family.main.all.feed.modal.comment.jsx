import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from './Styles/Family.main.all.feed.modal.comment';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as utils from '../Feed/getFeed/feed.utils';
import * as recoilFamily from './recoil/feed.recoil';
import * as api from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';

function CommentModal(props) {
	const ModalStyle = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.45)',
			zIndex: 100000,
		},
		content: {
			position: 'fixed',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			paddingTop: '2%',
			background: '#ffffff',
			overflow: 'auto',
			top: '20vh',
			left: '2vw',
			right: '2vw',
			height: '80vh',
			WebkitOverflowScrolling: 'touch',
			borderTopLeftRadius: '25px',
			borderTopRightRadius: '25px',
			outline: 'none',
			zIndex: 10000,
		},
	};

	const [isCommentOpend, setIsCommentOpend] = useRecoilState(
		recoilFamily.isCommentOpend,
	);
	const [commentData, setCommentData] = useState([]);
	const [commentDiv, setCommentDiv] = useState([]);
	const inputRef = useRef();
	const [commentValue, setCommentValue] = useState('');

	//댓글 작성 업로드
	const handleCommentBtn = () => {
		console.log(commentValue);

		const fetchData = async () => {
			let getData = await api.postComment(props.boardId, commentValue);
			if (getData.code == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await api.postComment(props.boardId);
			}
		};

		const addBoardCommentData = (commentArr) => {
			let localCommentDataArr = [];
			for (let i = 0; i < commentArr.length; i++) {
				let localCommentData = {
					id: commentArr[i].id,
					createdAt: utils.changeDateStr(commentArr[i].createdAt),
					nickname: commentArr[i].nickname,
					comment: commentArr[i].comment,
					profile: commentArr[i].imageUrl,
				};
				localCommentDataArr.push(localCommentData);
			}
			setCommentData(localCommentDataArr);
		};

		const fetchCommentData = async () => {
			let getData = await api.getComment(props.boardId);
			if (getData.code == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await api.getComment(props.boardId);
			}

			addBoardCommentData(getData.data.result.content);
		};
		setCommentValue('');

		const response = fetchData();
		fetchCommentData();
	};

	//첫 데이터 불러오기
	useEffect(() => {
		const addBoardCommentData = (commentArr) => {
			let localCommentDataArr = [];
			for (let i = 0; i < commentArr.length; i++) {
				let localCommentData = {
					id: commentArr[i].id,
					createdAt: utils.changeDateStr(commentArr[i].createdAt),
					nickname: commentArr[i].nickname,
					comment: commentArr[i].comment,
					profile: commentArr[i].imageUrl,
				};
				localCommentDataArr.push(localCommentData);
			}
			setCommentData(localCommentDataArr);
		};

		const fetchData = async () => {
			let getData = await api.getComment(props.boardId);
			if (getData.code == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await api.getComment(props.boardId);
			}

			addBoardCommentData(getData.data.result.content);
		};

		const response = fetchData();
	}, []);

	//댓글 그리기
	useEffect(() => {
		let localDivArr = [];

		for (let i = 0; i < commentData.length; i++) {
			let localDiv = (
				<modalS.CommentWrapper key={`familyFeedComments_${i}`}>
					<modalS.CommentProfileWrapper>
						<modalS.CommentProfile
							src={commentData[i].profile}
						></modalS.CommentProfile>
					</modalS.CommentProfileWrapper>
					<modalS.CommentContentWrapper>
						<modalS.CommentContentTitle>
							{commentData[i].nickname}
						</modalS.CommentContentTitle>
						<modalS.CommentContent>
							{commentData[i].comment}
						</modalS.CommentContent>
					</modalS.CommentContentWrapper>
				</modalS.CommentWrapper>
			);
			localDivArr.push(localDiv);
		}

		setCommentDiv(localDivArr);
	}, [commentData]);

	const setModalIsOpen = () => {
		setIsCommentOpend(false);
	};
	return (
		<>
			<Modal
				isOpen={true}
				style={ModalStyle}
				onRequestClose={() => setModalIsOpen()} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				<modalS.TopCommentTitle>댓글</modalS.TopCommentTitle>
				{commentDiv}
				<modalS.CommentWriteWrapper>
					<modalS.commentWriteInput
						ref={inputRef}
						autoFocus={true}
						value={commentValue}
						onChange={() => {
							setCommentValue(inputRef.current.value);
						}}
					></modalS.commentWriteInput>
					<modalS.commentWriteBtn
						onClick={handleCommentBtn}
					></modalS.commentWriteBtn>
				</modalS.CommentWriteWrapper>
			</Modal>
		</>
	);
}

export default CommentModal;
