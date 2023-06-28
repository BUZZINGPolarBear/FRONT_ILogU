import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from './Styles/modal.styles';

function AfterUploadModal(props) {
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
			justifyContent: 'space-around',
			paddingTop: '10%',
			background: '#ffffff',
			overflow: 'auto',
			top: '30vh',
			left: '10vw',
			right: '10vw',
			height: '360px',
			WebkitOverflowScrolling: 'touch',
			borderRadius: '25px',
			outline: 'none',
			zIndex: 10,
		},
	};

	const navigate = useNavigate();
	const handleToFirstPage = (e) => {
		e.preventDefault();
		navigate(`/feed/main`);
	};

	return (
		<>
			<Modal
				isOpen={true}
				style={ModalStyle}
				onRequestClose={true} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				<modalS.TopImageWrapper></modalS.TopImageWrapper>
				<modalS.MainTitleWrapper>
					<modalS.MainTitle type="sub">아이와의 행복한 순간의</modalS.MainTitle>
					<modalS.MainTitle type="main">기록이 완료되었어요!</modalS.MainTitle>
				</modalS.MainTitleWrapper>
				<modalS.BtnWrapper onClick={(e) => handleToFirstPage(e)}>
					<modalS.ModalBtn isFirst="true">가족에게 알림보내기</modalS.ModalBtn>
					<modalS.ModalBtn isFirst="false">처음으로</modalS.ModalBtn>
				</modalS.BtnWrapper>
			</Modal>
		</>
	);
}

export default AfterUploadModal;
