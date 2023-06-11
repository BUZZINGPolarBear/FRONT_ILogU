import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as feedRecoil from './recoil/recoild.feed';
import queryString from 'query-string';
import 'bulma/css/bulma.css';

import * as api from './APIs/uploadPhoto';

import PhotoSlider from './writeFeed.photoSlides';
import * as infoS from './Styles/info.styles';
import * as photoS from './Styles/uploadPhoto.styles';
import * as titleS from './Styles/title.styles';
import * as tokens from '../../../tokens';

function UploadPhoto(props) {
	const nowLocation = useLocation();
	const params = queryString.parse(nowLocation.search);
	const type = params.type;
	const category = params.category;
	const title = params.title;

	const [isNextBtnClicked, setIsNextBtnClicked] = useState(false);
	const [feedWrite, setFeedWrite] = useState('');
	// mobile imge upload
	const [selectedImages, setSelectedImages] = useState([]);

	// 이미지 업로드
	const handleImagesChange = (e) => {
		let images = Array.from(e.target.files);
		const imageUrls = images.map((file) => URL.createObjectURL(file));
		setSelectedImages(imageUrls);
	};

	//다음 버튼 클릭
	const handleNextBtn = async (e) => {
		console.log('next btn is clicked');
		setIsNextBtnClicked(true);
	};

	//피드 글 작성
	const handleFeedWrite = (e) => {
		setFeedWrite(e.target.value);
	};
	//피드 자동 생성 클릭
	const handleAutoGenerateFeed = async (e) => {
		setFeedWrite('사진을 분석하고 있습니다. 잠시만 기다려 주세요! 🙂');
		const autoGenerateResult = await api.autoGenerateFeed(
			selectedImages[0],
			category,
			title,
		);
		console.log(autoGenerateResult);
		setFeedWrite(autoGenerateResult.result);
	};

	return (
		<div style={{ width: '98%', height: 'fit-content' }}>
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
						<infoS.FeedTitleMain>사진을 추가해주세요</infoS.FeedTitleMain>
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
						) : category == '요리' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									🍳
								</span>
								<span>요리</span>
							</>
						) : category == '금융' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									🏦
								</span>
								<span>금융</span>
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
								<span>기타</span>
							</>
						)}
					</photoS.TitleDiv>
					<photoS.TitleDiv width={68} type={'subtitle_1'}>
						{title}
					</photoS.TitleDiv>
				</infoS.FeedCategoryWrapper>
				{selectedImages.length == 0 ? (
					<photoS.PhotoUploadArea
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
						style={{ backgroundColor: 'none', border: 'none' }}
					>
						<PhotoSlider imageArr={selectedImages}></PhotoSlider>
					</photoS.PhotoUploadArea>
				)}
				{isNextBtnClicked == true ? (
					<photoS.WriteFeedTestArea>
						<photoS.InputText
							type="text"
							onChange={handleFeedWrite}
							value={feedWrite}
							placeholder="설명을 적어주세요."
						></photoS.InputText>
						<photoS.BottomBtnWrapper>
							<photoS.AutoGenerateStoryBtn onClick={handleAutoGenerateFeed}>
								✍️이야기 자동완성
							</photoS.AutoGenerateStoryBtn>
						</photoS.BottomBtnWrapper>
					</photoS.WriteFeedTestArea>
				) : null}
			</infoS.FeedCategorySelectArea>

			<infoS.FeedWriteSubmitArea
				is_category_selected={selectedImages.length > 0 ? true : false}
				onClick={handleNextBtn}
			>
				다음
			</infoS.FeedWriteSubmitArea>
		</div>
	);
}

export default UploadPhoto;
