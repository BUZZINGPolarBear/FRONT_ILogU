import React, { useEffect, useState } from 'react';
import * as FeedparicipateS from './Styles/Family.main.all.feed';
import * as FeedApi from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';
import * as utils from '../Feed/getFeed/feed.utils';
import * as FamilyS from './Styles/Family.main.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
function FamilyAllFeed(props) {
	const [boardBodyArr, setBoardBodyArr] = useState([]);
	const navigate = useNavigate();

	const handleBackward = () => {
		navigate('/family');
	};
	useEffect(() => {
		let boardResponseArr = [];

		const addBoardDivs = (fetchResponse) => {
			let localDiv = [];
			if (fetchResponse.length == 0) setBoardBodyArr(localDiv);
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
				// console.log(localContent);
				const dateStr = utils.changeDateStr(localContent.createdAt);
				const content = utils.truncateString(localContent.content, 65);
				let category = localContent.category;

				if (category === 'DAILY') category = '👩‍👩‍👧‍👦 일상';
				else if (category === 'SPORTS') category = '⚽️ 스포츠';
				else if (category === 'TRAVEL') category = '🧳 여행';
				else category = '👩‍👩‍👧‍👦 일상';

				if (
					localContent.mainImage == null ||
					typeof localContent.mainImage.s3url == 'undefined'
				)
					continue;
				localDiv.push(
					<FeedparicipateS.FeedChallengeWrapper key={`feed_key${i}`}>
						<FeedparicipateS.FeedChallengeUserWrapper>
							<FeedparicipateS.FeedChallengeUserImage
								picUrl={localContent.userProfileUrl}
								alt="사용자"
							></FeedparicipateS.FeedChallengeUserImage>
							<FeedparicipateS.FeedChallengeUserInfoWrapper>
								<FeedparicipateS.FeedChallengeUserInfo>
									{localContent.nickname}
								</FeedparicipateS.FeedChallengeUserInfo>
								<FeedparicipateS.FeedChallengeUserInfoDate>
									{dateStr}
								</FeedparicipateS.FeedChallengeUserInfoDate>
							</FeedparicipateS.FeedChallengeUserInfoWrapper>
						</FeedparicipateS.FeedChallengeUserWrapper>

						<FeedparicipateS.FeedPictureArea
							picUrl={localContent.mainImage.s3url ?? '/Feed/feed_sample.jpg'}
							alt="사용자"
						></FeedparicipateS.FeedPictureArea>

						<FeedparicipateS.FeedChallengeContentWrapper>
							<FeedparicipateS.FeedChallengeTopBottomWrapper>
								<FeedparicipateS.TopInfo>
									<img src="/Feed/icons/like.svg" alt="좋아요"></img>
									<div>{localContent.likesCount}</div>
								</FeedparicipateS.TopInfo>
								<FeedparicipateS.TopInfo>
									<img src="/Feed/icons/comment.svg" alt="좋아요"></img>
									<div>{localContent.commentsCount}</div>
								</FeedparicipateS.TopInfo>
							</FeedparicipateS.FeedChallengeTopBottomWrapper>
							<FeedparicipateS.FeedChallengeMiddleWrapper>
								{localContent.content}
							</FeedparicipateS.FeedChallengeMiddleWrapper>
							<FeedparicipateS.FeedChallengeTopBottomWrapper
							// style={{ height: '35%' }}
							>
								<FeedparicipateS.FeedTag>{category}</FeedparicipateS.FeedTag>
								<FeedparicipateS.FeedTag>
									{localContent.title}
								</FeedparicipateS.FeedTag>
							</FeedparicipateS.FeedChallengeTopBottomWrapper>
						</FeedparicipateS.FeedChallengeContentWrapper>
					</FeedparicipateS.FeedChallengeWrapper>,
				);
			}

			setBoardBodyArr(localDiv);
		};

		const fetchData = async () => {
			let getData = await FeedApi.getFeed(30);
			if (getData == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await FeedApi.getFeed(30);
			}

			boardResponseArr = getData.result.content;
			addBoardDivs(boardResponseArr);
		};
		const fetchResponse = fetchData();
	}, []);
	return (
		<>
			<FamilyS.TopNavBar
				style={{ justifyContent: 'flex-start' }}
				onClick={handleBackward}
			>
				<FamilyS.TopNavBackIcon />
				<FamilyS.TopNavTitle>우리가족</FamilyS.TopNavTitle>
			</FamilyS.TopNavBar>
			<FamilyS.MainWrapper>{boardBodyArr}</FamilyS.MainWrapper>
		</>
	);
}

export default FamilyAllFeed;
