import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as modalS from './Styles/Family.main.all.feed.modal.comment';
//recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import * as signInRecoil from '../Login/recoil/Login.recoil.states';
import * as recoilFamily from './recoil/feed.recoil';
//utils
import * as utils from '../Feed/getFeed/feed.utils';
//api
import * as FeedApi from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';

function MoneyModal(props) {
	const [isMoneyOpened, setIsMoneyOpened] = useRecoilState(
		recoilFamily.isMoneyOpend,
	);
	const [userFamilyType, setUserFamilyType] = useRecoilState(
		signInRecoil.familyType,
	);
	const [isMoneyBtnAvailable, setIsMoneyBtnAvailable] = useState(false);
	const [modalPositionY, setModalPositionY] = useState(500);
	const [balance, setBalance] = useState(0);
	const inputRef = useRef();
	const [inputMoney, setInputMoney] = useState(0);
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
			top: `50vh`,
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

	//용돈 가져오기
	useEffect(() => {
		const getFeedBabyMoney = (fetchResponse) => {
			console.log(props.boardId);
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
				if ((localContent.id = props.boardId)) {
					setBalance(localContent.balance);
					break;
				}
			}
		};

		const fetchData = async () => {
			if (props.type == 'feed') {
				let getData = await FeedApi.getFeed(100);
				if (getData == '400-03-04') {
					await tokenAPI.RefreshToken();
					getData = await FeedApi.getFeed(100);
				}

				const boardResponseArr = getData.result.content;
				getFeedBabyMoney(boardResponseArr);
			} else if (props.type == 'main') {
				let getData = await FeedApi.getBabyAllMoney();
				if (getData == '400-03-04') {
					await tokenAPI.RefreshToken();
					getData = await FeedApi.getBabyAllMoney();
				}

				setBalance(getData.result);
			}
		};
		const fetchResponse = fetchData();
	}, []);

	//용돈 기입
	const handleChange = (e) => {
		if (e.target.value.length < 12) {
			setInputMoney(e.target.value.toString().replace(/^0+/, ''));
			if (inputMoney == 0) setIsMoneyBtnAvailable(false);
			if (inputMoney.length >= 1) setIsMoneyBtnAvailable(true);
		}
	};

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

	const handleMoneyInput = () => {
		inputRef.current.focus();
	};

	return (
		<>
			{userFamilyType === 'PARENTS' ? (
				<Modal
					isOpen={true}
					style={ModalStyle}
					onRequestClose={() => setModalIsOpen()} // 오버레이나 esc를 누르면 핸들러 동작
					ariaHideApp={false}
				>
					<modalS.TopMoneyTitle>
						<modalS.DraggableBox></modalS.DraggableBox>
					</modalS.TopMoneyTitle>
					<modalS.MoneyModalConentWrapper>
						<modalS.TopMoneyPic></modalS.TopMoneyPic>
						<modalS.TopContentWrapper style={{ marginTop: '15px' }}>
							<modalS.TopContentWrapper type="sub">
								용돈이 이만큼 쌓였어요!
							</modalS.TopContentWrapper>
							<modalS.TopContentWrapper type="main">
								{balance
									.toString()
									.replace(/^0+/, '')
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
								원
							</modalS.TopContentWrapper>
						</modalS.TopContentWrapper>
					</modalS.MoneyModalConentWrapper>
					<modalS.MoneyCloseBtn onClick={setModalIsOpen}>
						닫기
					</modalS.MoneyCloseBtn>
				</Modal>
			) : (
				<Modal
					isOpen={true}
					style={ModalStyle}
					onRequestClose={() => setModalIsOpen()} // 오버레이나 esc를 누르면 핸들러 동작
					ariaHideApp={false}
				>
					<input
						type="number"
						inputmode="numeric"
						ref={inputRef}
						value={inputMoney}
						onChange={handleChange}
						keyboardType="number-pad"
						style={{
							position: 'absolute',
							left: '-1000px',
							top: '-1000px',
						}}
					/>
					<modalS.TopMoneyTitle>
						<modalS.DraggableBox></modalS.DraggableBox>
					</modalS.TopMoneyTitle>
					<modalS.MoneyModalConentWrapper>
						<modalS.TopMoneyPic></modalS.TopMoneyPic>
						<modalS.TopContentWrapper style={{ marginTop: '15px' }}>
							<modalS.TopContentWrapper type="sub">
								용돈 얼마를 주실건가요?
							</modalS.TopContentWrapper>
							<modalS.TopContentWrapper type="main" onClick={handleMoneyInput}>
								{inputMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
							</modalS.TopContentWrapper>
						</modalS.TopContentWrapper>
					</modalS.MoneyModalConentWrapper>
					<modalS.MoneyCloseBtn
						onClick={setModalIsOpen}
						type={inputMoney == false ? 'disable' : 'available'}
					>
						용돈 보내기
					</modalS.MoneyCloseBtn>
				</Modal>
			)}
		</>
	);
}

export default MoneyModal;
