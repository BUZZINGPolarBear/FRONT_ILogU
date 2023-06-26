import React, { useEffect, useState, useRef } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import queryString from 'query-string';
import 'bulma/css/bulma.css';
import Modal from 'react-modal';
import * as api from './APIs/uploadPhoto';

import PhotoSlider from './writeFeed.photoSlides';
import * as infoS from './Styles/info.styles';
import * as photoS from './Styles/uploadPhoto.styles';

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
			justifyContent: 'center',
			background: '#ffffff',
			overflow: 'auto',
			top: '30vh',
			left: '10vw',
			right: '10vw',
			bottom: '30vh',
			WebkitOverflowScrolling: 'touch',
			borderRadius: '25px',
			outline: 'none',
			zIndex: 10,
		},
	};

	return (
		<>
			<Modal
				isOpen={true}
				style={ModalStyle}
				onRequestClose={true} // 오버레이나 esc를 누르면 핸들러 동작
				ariaHideApp={false}
			>
				모달 내용 or 컴포넌트
			</Modal>
			{/* <button onClick={모달토글핸들러}></button> */}
		</>
	);
}

export default AfterUploadModal;
