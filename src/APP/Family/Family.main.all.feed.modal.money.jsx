import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from './Styles/Family.main.all.feed.modal.comment';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as utils from '../Feed/getFeed/feed.utils';
import * as recoilFamily from './recoil/feed.recoil';
import * as api from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';

function MoneyModal(props) {
	const [isMoneyOpened, setIsMoneyOpened] = useRecoilState(
		recoilFamily.isMoneyOpend,
	);
	const [modalPositionY, setModalPositionY] = useState(500);

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

	//뒷배경 스크롤 방지
	useEffect(() => {
		document.body.style.cssText = `
		  position: fixed; 
		  top: -${window.scrollY}px;
		  overflow-y: scroll;
		  width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	//모달창 끄기
	const setModalIsOpen = () => {
		setIsMoneyOpened(false);
	};
	//모달창 드래그
	let startY = 0;

	const handleTouchStart = (e) => {
		startY = e.touches[0].clientY;
	};

	const handleTouchMove = (e) => {
		const currentY = e.touches[0].clientY;
		const diffY = currentY - startY;

		setModalPositionY(startY + diffY);

		if (startY + diffY > 600) {
			setIsMoneyOpened();
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
				</modalS.TopCommentTitle>
			</Modal>
		</>
	);
}

export default MoneyModal;
