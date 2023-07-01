import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from './Styles/Family.main.all.feed.modal.comment';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilFamily from './recoil/feed.recoil';
function CommentModal(props) {
	const ModalStyle = {
		overlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.45)',
			zIndex: 10,
		},
		content: {
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
			borderRadius: '25px',
			outline: 'none',
			zIndex: 10,
		},
	};

	const [isCommentOpend, setIsCommentOpend] = useRecoilState(
		recoilFamily.isCommentOpend,
	);

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
				<modalS.CommentWrapper>
					<modalS.CommentProfileWrapper>
						<modalS.CommentProfile></modalS.CommentProfile>
					</modalS.CommentProfileWrapper>
					<modalS.CommentContentWrapper>
						<modalS.CommentContentTitle>주니대디</modalS.CommentContentTitle>
						<modalS.CommentContent>
							어쩌구 저쩌구 대충 귀엽다는 뜻의 댓글
						</modalS.CommentContent>
					</modalS.CommentContentWrapper>
				</modalS.CommentWrapper>
				<modalS.CommentWrapper>
					<modalS.CommentProfileWrapper>
						<modalS.CommentProfile></modalS.CommentProfile>
					</modalS.CommentProfileWrapper>
					<modalS.CommentContentWrapper>
						<modalS.CommentContentTitle>주니대디</modalS.CommentContentTitle>
						<modalS.CommentContent>
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
							조금 긴 댓글 태스트으
						</modalS.CommentContent>
					</modalS.CommentContentWrapper>
				</modalS.CommentWrapper>
				<modalS.CommentWrapper>
					<modalS.CommentProfileWrapper>
						<modalS.CommentProfile></modalS.CommentProfile>
					</modalS.CommentProfileWrapper>
					<modalS.CommentContentWrapper>
						<modalS.CommentContentTitle>주니대디</modalS.CommentContentTitle>
						<modalS.CommentContent>
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
							조금 긴 댓글 태스트으 조금 긴 댓글 태스트으
						</modalS.CommentContent>
					</modalS.CommentContentWrapper>
				</modalS.CommentWrapper>
				<modalS.CommentWriteWrapper>
					{' '}
					여기는 댓글 쓰는 곳
				</modalS.CommentWriteWrapper>
			</Modal>
		</>
	);
}

export default CommentModal;
