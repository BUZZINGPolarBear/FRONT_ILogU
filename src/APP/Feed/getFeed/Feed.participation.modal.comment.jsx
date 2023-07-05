import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from '../../Family/Styles/Family.main.all.feed.modal.comment';

import { useRecoilState, useRecoilValue } from 'recoil';
import * as utils from './feed.utils';
import * as recoilFeed from './recoil/recoild.feed';
import * as api from '../../Family/Apis/simple.feed.api';
import * as tokenAPI from '../../AutoSignIn';

function CommentModal(props) {
	const [isFeedCommentOpend, setIsFeedCommentOpend] = useRecoilState(
		recoilFeed.isFeedCommentOpend,
	);
	const [commentWriteResult, setCommentWriteResult] = useRecoilState(
		recoilFeed.feedCommentWriteResult,
	);
	const [commentData, setCommentData] = useState([]);
	const [commentDiv, setCommentDiv] = useState([]);
	const inputRef = useRef();
	const [commentValue, setCommentValue] = useState('');
	const [modalPositionY, setModalPositionY] = useState(150);

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
			position: 'absolute',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'flex-start',
			paddingTop: '2%',
			background: '#ffffff',
			overflow: 'auto',
			top: `${modalPositionY}px`,
			left: '2vw',
			right: '2vw',
			height: '100vh',
			WebkitOverflowScrolling: 'touch',
			borderTopLeftRadius: '25px',
			borderTopRightRadius: '25px',
			outline: 'none',
			zIndex: 10000,
		},
	};

	//댓글 작성 업로드
	const handleCommentBtn = () => {
		const fetchData = async () => {
			let getData = await api.postComment(props.boardId, commentValue);
			if (getData.code == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await api.postComment(props.boardId);
			}

			let localCommentData = {
				id: getData.data.result.id,
				createdAt: utils.changeDateStr(getData.data.result.createdAt),
				nickname: getData.data.result.nickname,
				comment: getData.data.result.comment,
				profile: getData.data.result.imageUrl,
			};

			let prevCommentData = [...commentData];
			prevCommentData.push(localCommentData);
			setCommentData(prevCommentData);
			setCommentValue('');

			let prevCommentUploadData = { ...commentWriteResult };
			prevCommentUploadData.boardId = props.boardId;
			prevCommentUploadData.commentsCount += 1;

			setCommentWriteResult(prevCommentUploadData);
		};

		fetchData();
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

		fetchData(); // Call the async function directly
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

	//모달창 끄기
	const setModalIsOpen = () => {
		setIsFeedCommentOpend(false);
	};
	//모달창 드래그
	let startY = 0;

	const handleTouchStart = (e) => {
		startY = e.touches[0].clientY;
	};

	const handleTouchMove = (e) => {
		const currentY = e.touches[0].clientY;
		const diffY = currentY - startY;
		setModalPositionY(diffY);
		if (diffY > 320) {
			// Swipe downward by at least 100px
			// You can adjust the threshold value as needed
			setModalIsOpen();
		}
	};

	const handleTouchEnd = () => {
		startY = 0;
	};
	return (
		<>
			<Modal
				isOpen={true}
				style={ModalStyle}
				onRequestClose={() => setModalIsOpen()} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				<modalS.TopCommentTitle
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					<modalS.DraggableBox></modalS.DraggableBox>댓글
				</modalS.TopCommentTitle>
				<modalS.UserCommentContentWrapper>
					{commentDiv}
				</modalS.UserCommentContentWrapper>

				<modalS.CommentWriteWrapper>
					<modalS.CommentWriteProfile
						src={localStorage.getItem('userProfile')}
					></modalS.CommentWriteProfile>
					<modalS.CommentWriteAreaWrapper>
						<modalS.commentWriteInput
							className="feedComment"
							ref={inputRef}
							autoFocus={true}
							value={commentValue}
							placeholder="댓글을 입력하세요."
							onChange={() => {
								setCommentValue(inputRef.current.value);
							}}
						></modalS.commentWriteInput>
						<modalS.commentWriteBtn
							onClick={handleCommentBtn}
						></modalS.commentWriteBtn>
					</modalS.CommentWriteAreaWrapper>
				</modalS.CommentWriteWrapper>
			</Modal>
		</>
	);
}

export default CommentModal;
