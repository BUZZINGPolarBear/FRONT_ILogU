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
import * as api from './APIs/uploadPhoto';

import PhotoSlider from './writeFeed.photoSlides';
import AfterUploadModal from './writeFeed.upload.modal';
import * as infoS from './Styles/info.styles';
import * as photoS from './Styles/uploadPhoto.styles';
import * as tokenAPI from '../../AutoSignIn';
function UploadPhoto(props) {
	const nowLocation = useLocation();
	const params = queryString.parse(nowLocation.search);
	const type = params.type;
	const category = params.category;
	const title = params.title;

	const [isNextBtnClicked, setIsNextBtnClicked] = useState(false);
	const [isUploadBtnClicked, setIsUploadBtnClicked] = useState(false);
	const [isBannedImage, setIsBannedImage] = useState(false);
	const [isUploadComplete, setIsUploadComplete] = useState(false);
	const [isAutoGenerateFeedClicked, setIsAutoGenerateFeedClicked] =
		useState(false);
	const [feedWrite, setFeedWrite] = useState('');
	// mobile imge upload
	const [selectedImages, setSelectedImages] = useState([]);

	// 이미지 업로드
	const handleImagesChange = (e) => {
		let images = Array.from(e.target.files);
		const imageUrls = images.map((file) => URL.createObjectURL(file));
		setSelectedImages(imageUrls);
	};

	//업로드 버튼 클릭
	const handleNextBtn = async (e) => {
		if (isNextBtnClicked == false) {
			setIsNextBtnClicked(true);
		} else {
			setIsUploadBtnClicked(true);
			const token = localStorage.getItem('access');
			const response = await api.uploadPhoto(
				title,
				feedWrite,
				category,
				token,
				selectedImages,
			);
			if (response == '400-03-04') {
				//업로드 에러
				const tokenRefreshResult = tokenAPI.RefreshToken();
				const token = localStorage.getItem('access');
				const response = await api.uploadPhoto(
					title,
					feedWrite,
					category,
					token,
					selectedImages,
				);
				setIsUploadComplete(true);
			}
			console.log(response.result);
			if (
				response.result.isAdult == true ||
				response.result.isGory == true ||
				response.result.isRacy == true
			) {
				setIsUploadComplete(true);
				setIsBannedImage(true);
			}
			if (response.isSuccess == true) {
				setIsUploadComplete(true);
			}
		}
	};

	//피드 글 작성
	const handleFeedWrite = (e) => {
		setFeedWrite(e.target.value);
	};
	//피드 자동 생성 클릭
	const handleAutoGenerateFeed = async (e) => {
		setFeedWrite('사진을 분석하고 있습니다. 잠시만 기다려 주세요! 🙂');
		setIsAutoGenerateFeedClicked(true);
		const autoGenerateResult = await api.autoGenerateFeed(
			selectedImages[0],
			category,
			title,
		);
		setIsAutoGenerateFeedClicked(false);
		console.log(autoGenerateResult);
		setFeedWrite(autoGenerateResult.result);
	};

	return (
		<div style={{ width: '98%', height: 'fit-content' }}>
			{isUploadComplete == true ? (
				<AfterUploadModal isbannedimage={isBannedImage}></AfterUploadModal>
			) : (
				<></>
			)}
			<infoS.FeedCatergoryTitleArea style={{ marginTop: '0' }}>
				{isNextBtnClicked == true ? (
					<>
						<infoS.FeedTitleMain style={{ marginTop: '15vh' }}>
							이야기를 적어주세요
						</infoS.FeedTitleMain>
						<infoS.FeedSubTitleMain>
							글을 함께 남기면 기억이 2배로 남아요~
						</infoS.FeedSubTitleMain>
					</>
				) : (
					<>
						<infoS.FeedTitleMain style={{ marginTop: '15vh' }}>
							사진을 추가해주세요
						</infoS.FeedTitleMain>
						<infoS.FeedSubTitleMain>
							아이와의 기억을 사진으로 추억할 수 있어요!
						</infoS.FeedSubTitleMain>
					</>
				)}
			</infoS.FeedCatergoryTitleArea>
			<infoS.FeedCategorySelectArea
				style={{
					width: '90%',
					height: 'fit-content',
					// paddingBottom: '5vh',
					paddingTop: '5vh',
				}}
			>
				<infoS.FeedCategoryWrapper>
					<photoS.TitleDiv width={30} typo={'subtitle_1_sb'}>
						{category == '여행' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									✈️
								</span>
								<span>여행</span>
							</>
						) : category == '스포츠' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									⚽️
								</span>
								<span>스포츠</span>
							</>
						) : (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									👩‍👩‍👧‍👦
								</span>
								<span>일상</span>
							</>
						)}
					</photoS.TitleDiv>
					<photoS.TitleDiv width={68} type={'subtitle_1'}>
						{title}
					</photoS.TitleDiv>
				</infoS.FeedCategoryWrapper>
				{selectedImages.length == 0 ? (
					<photoS.PhotoUploadArea
						style={{ marginBottom: '20vh' }}
						onClick={() => document.getElementById('fileInput').click()}
					>
						{selectedImages.map((image, index) => (
							<img key={index} src={image} alt="" width="200" height="200" />
						))}
						<photoS.PhotoUploadClickArea>
							<photoS.PhotoUploadImage></photoS.PhotoUploadImage>
							이미지 선택
						</photoS.PhotoUploadClickArea>
						<input
							id="fileInput"
							type="file"
							accept="image/*"
							multiple
							onChange={handleImagesChange}
							style={{ display: 'none' }}
						/>
					</photoS.PhotoUploadArea>
				) : (
					<photoS.PhotoUploadArea
						style={{
							backgroundColor: 'none',
							border: 'none',
							marginBottom: isNextBtnClicked ? 0 : '20vh',
							display: setIsUploadComplete == true ? 'none' : 'block',
						}}
					>
						<PhotoSlider
							imageArr={selectedImages}
							isUploadComplete={isUploadComplete}
						></PhotoSlider>
					</photoS.PhotoUploadArea>
				)}
				{isNextBtnClicked == true ? (
					<>
						<photoS.SlideImageInfo>
							<photoS.RecommendIcon></photoS.RecommendIcon>
							<photoS.InfoText>
								노이즈를 통해 아이들의 사진이 무단 활용될 염려를 줄일 수 있어요!
							</photoS.InfoText>
						</photoS.SlideImageInfo>
						<photoS.WriteFeedTestArea>
							<photoS.InputText
								type="text"
								onChange={handleFeedWrite}
								value={feedWrite}
								placeholder="설명을 적어주세요."
							></photoS.InputText>
							<photoS.BottomBtnWrapper>
								<photoS.AutoGenerateStoryBtn
									onClick={handleAutoGenerateFeed}
									is_auto_generate_feed_clicked={isAutoGenerateFeedClicked}
								>
									✍️이야기 자동완성
								</photoS.AutoGenerateStoryBtn>
							</photoS.BottomBtnWrapper>
						</photoS.WriteFeedTestArea>
					</>
				) : null}
			</infoS.FeedCategorySelectArea>

			<infoS.FeedWriteSubmitArea
				is_category_selected={selectedImages.length > 0 ? true : false}
				onClick={handleNextBtn}
				isAutoGenerateFeedClicked={isAutoGenerateFeedClicked}
				isUploadBtnClicked={isUploadBtnClicked}
			>
				{isNextBtnClicked == false && isUploadBtnClicked == false
					? '다음'
					: isUploadBtnClicked == false
					? '게시하기'
					: '이미지를 안전하게 업로드중이에요.'}
			</infoS.FeedWriteSubmitArea>
		</div>
	);
}

export default UploadPhoto;
