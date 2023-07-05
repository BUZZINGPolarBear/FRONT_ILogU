import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
//utils
import * as utils from '../Feed/getFeed/feed.utils';
//styeld component
import * as modalS from './Styles/Family.main.all.feed.modal.family';
//api
import * as api from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';
//recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilFamily from './recoil/feed.recoil';

function FamilyStatusModal(props) {
	const [isFamilyStatusOpend, setIsFamilyStatusOpend] = useRecoilState(
		recoilFamily.isFamilyStatusOpend,
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
			top: `40vh`,
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

	//모달창 끄기
	const setModalIsOpen = () => {
		setIsFamilyStatusOpend(false);
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
					<modalS.DraggableBox></modalS.DraggableBox>
					<modalS.MainTitle>우리 가족 구성원</modalS.MainTitle>
				</modalS.TopCommentTitle>

				<modalS.FamilyStatusWrapper></modalS.FamilyStatusWrapper>

				<modalS.MoneyCloseBtn onClick={setModalIsOpen}>
					닫기
				</modalS.MoneyCloseBtn>
			</Modal>
		</>
	);
}

export default FamilyStatusModal;
