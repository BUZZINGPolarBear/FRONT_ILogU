import React, { useEffect, useState } from 'react';
import * as FeedparicipateS from './Styles/Feed.participation.styles';
import * as FeedApi from './APIs/getFeed.api';
import * as tokenAPI from '../../AutoSignIn';
import * as utils from './feed.utils';

import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoil from './recoil/recoild.feed';

function FeedParticipation(props) {
	const [boardBodyArr, setBoardBodyArr] = useState([]);
	const [boardBodyContentArr, setBoardBodyContentArr] = useState([]);
	const [selectedCategory, setSelectedCategory] = useRecoilState(
		recoil.feedCategoryRecoil,
	);
	//게시판 내용 받아오기
	useEffect(() => {
		let category = selectedCategory;

		if (category == '전체') category = 'ALL';
		if (category == '여행') category = 'TRAVEL';
		if (category == '스포츠') category = 'SPORTS';
		if (category == '일상') category = 'DAILY';
		let boardResponseArr = [];

		const addBoardContentArr = (fetchResponse) => {
			let apiBoardContent = [];
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
				const dateStr = utils.changeDateStr(localContent.createdAt);
				const content = utils.truncateString(localContent.content, 65);
				let category = localContent.category;

				if (category === 'DAILY') category = '👩‍👩‍👧‍👦 일상';
				else if (category === 'SPORTS') category = '⚽️ 스포츠';
				else if (category === 'TRAVEL') category = '✈️ 여행';
				else category = '👩‍👩‍👧‍👦 일상';
				let localContentData = {
					id: localContent.id,
					category: category,
					mainImage: localContent.mainImage.s3url,
					userProfileUrl: localContent.userProfileUrl,
					nickname: localContent.nickname,
					dateStr: dateStr,
					isLiked: localContent.isLiked,
					likesCount: localContent.likesCount,
					commentsCount: localContent.commentsCount,
					balance: localContent.balance,
					content: localContent.content,
					title: localContent.title,
				};
				apiBoardContent.push(localContentData);
			}
			setBoardBodyContentArr(apiBoardContent);
		};

		if (category == 'ALL') {
			const fetchData = async () => {
				let getData = await FeedApi.getFeed(category, 30);
				if (getData == '400-03-04') {
					await tokenAPI.RefreshToken();
					getData = await FeedApi.getFeed(category, 30);
				}

				boardResponseArr = getData.result.content;
				addBoardContentArr(boardResponseArr);
			};
			const fetchResponse = fetchData();
		} else {
			const fetchData = async () => {
				const getData = await FeedApi.getFeed(category, 30);
				if (getData == '400-03-04') {
					await tokenAPI.RefreshToken();
					getData = await FeedApi.getFeed(category, 30);
				}

				if (getData.result && getData.result.content === undefined) {
					addBoardContentArr([]);
				}
				boardResponseArr = getData.result.content;
				addBoardContentArr(boardResponseArr);
			};
			const fetchResponse = fetchData();
		}
	}, [selectedCategory]);

	useEffect(() => {
		const addBoardDivs = () => {
			let localDiv = [];
			for (let i = 0; i < boardBodyContentArr.length; i++) {
				const localContent = boardBodyContentArr[i];
				const dateStr = utils.changeDateStr(localContent.createdAt);
				let category = localContent.category;

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
									{localContent.dateStr}
								</FeedparicipateS.FeedChallengeUserInfoDate>
							</FeedparicipateS.FeedChallengeUserInfoWrapper>
						</FeedparicipateS.FeedChallengeUserWrapper>

						<FeedparicipateS.FeedPictureArea
							picUrl={localContent.mainImage}
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
		addBoardDivs();
	}, [boardBodyContentArr]);
	return <>{boardBodyArr}</>;
}

export default FeedParticipation;
