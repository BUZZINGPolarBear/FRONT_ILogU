import React, { useEffect, useState, useRef } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as HomeS from './Styles/Home.main.styles';
import * as DetailS from './Styles/Home.detail.product.styles';
function DetailVeiw() {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	const [mainTitle, setMainTitle] = useState('');
	const [subTitle, setSubTitle] = useState('');
	const [period, setPeriod] = useState(0);
	const [imageUrl, setImageUrl] = useState('');

	useEffect(() => {
		const parsedArray = nowLocation.pathname.split('/');
		const depositType = parsedArray[parsedArray.length - 1];
		if (depositType === 'paris') {
			setImageUrl(
				'https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/paris.svg',
			);
			setMainTitle('파리여행 26주 적금');
			setSubTitle('아이와 함께할 파리여행을 꿈꾸시나요? 하나와 함께하세요!');
			setPeriod(26);
		} else if (depositType === 'tailand') {
			setImageUrl(
				'https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/detail/tailand.svg',
			);
			setMainTitle('태국여행 24주 적금');
			setSubTitle('아이와 함께할 태국여행을 꿈꾸시나요? 하나와 함께하세요!');
			setPeriod(24);
		}
		if (depositType === 'taiwan') {
			setImageUrl(
				'https://elasticbeanstalk-ap-northeast-2-273635406644.s3.ap-northeast-2.amazonaws.com/ilogu-resources/home/detail/taiwan.svg',
			);
			setMainTitle('대만여행 26주 적금');
			setSubTitle('아이와 함께할 대만여행을 꿈꾸시나요? 하나와 함께하세요!');
			setPeriod(26);
		}
	}, []);
	const handleTo1QBtn = () => {
		alert('하나원큐로 이동합니다.');
	};

	const handleBackwardBtn = () => {
		navigate('/home');
	};
	return (
		<>
			<DetailS.MainPicWrapper img={imageUrl}>
				<DetailS.MainPicBackward onClick={handleBackwardBtn}>
					<img src="/Feed/writeFeed/backward.svg"></img>
				</DetailS.MainPicBackward>
			</DetailS.MainPicWrapper>
			<DetailS.MainScreenWrapper>
				<DetailS.MainContentWrapper>
					<DetailS.MainScreenTitleWrapper>
						<DetailS.MainScreenTitle type="main">
							{mainTitle}
						</DetailS.MainScreenTitle>
						<DetailS.MainScreenTitle type="sub">
							{subTitle}
						</DetailS.MainScreenTitle>
					</DetailS.MainScreenTitleWrapper>
					<DetailS.ContentWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>상품특징</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">
								상품 가입 기간동안 조건 충족 시 우대금리를<br></br> 최고 연 0.5%
								지급
							</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입대상</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">개인</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입기간</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">{period}주</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입금액</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">제한없음</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>가입분류</DetailS.ContentTitle>
							<DetailS.Content isminimal="false">적금</DetailS.Content>
						</DetailS.ContentRowWrapper>
						<DetailS.ContentRowWrapper>
							<DetailS.ContentTitle>최저가입금액</DetailS.ContentTitle>
							<DetailS.Content isminimal="true">제한없음</DetailS.Content>
						</DetailS.ContentRowWrapper>
					</DetailS.ContentWrapper>
				</DetailS.MainContentWrapper>
				<DetailS.BtnWrapper>
					<DetailS.InfoMsg>
						*자세한 내용은 하나원큐 상품 가입 페이지를 참고해주세요.
					</DetailS.InfoMsg>
					<DetailS.To1QBtn onClick={handleTo1QBtn}>
						하나원큐로 이동하기
					</DetailS.To1QBtn>
				</DetailS.BtnWrapper>
			</DetailS.MainScreenWrapper>
		</>
	);
}

export default DetailVeiw;
