import React, { useEffect, useState } from 'react';
import * as FeedparicipateS from './Styles/Feed.participation.styles';
import * as FeedApi from './APIs/getFeed.api';
import * as tokenAPI from '../../AutoSignIn';
import * as utils from './feed.utils';

import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoil from './recoil/recoild.feed';

function FeedParticipation(props) {
	const [boardBodyArr, setBoardBodyArr] = useState([]);
	const [selectedCategory, setSelectedCategory] = useRecoilState(
		recoil.feedCategoryRecoil,
	);
	useEffect(() => {
		let category = selectedCategory;
		let boardResponseArr = [];

		if (category == '전체') category = 'ALL';
		if (category == '여행') category = 'TRAVEL';
		if (category == '스포츠') category = 'SPORTS';
		if (category == '일상') category = 'DAILY';

		const addBoardDivs = (fetchResponse) => {
			let localDiv = [];
			if (fetchResponse.length == 0) setBoardBodyArr(localDiv);
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
				const dateStr = utils.changeDateStr(localContent.createdAt);
				const content = utils.truncateString(localContent.content, 65);

				if (
					localContent.mainImage == null ||
					typeof localContent.mainImage.s3url == 'undefined'
				)
					continue;
				localDiv.push(
					<FeedparicipateS.FeedChallengeWrapper key={`feed_key${i}`}>
						<FeedparicipateS.FeedChallengeUserWrapper>
							<FeedparicipateS.FeedChallengeUserImage
								picUrl="/Feed/userPic.jpg"
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
								{content}
							</FeedparicipateS.FeedChallengeMiddleWrapper>
							<FeedparicipateS.FeedChallengeTopBottomWrapper
								style={{ height: '35%' }}
							>
								<FeedparicipateS.FeedTag>🧳 여행</FeedparicipateS.FeedTag>
								<FeedparicipateS.FeedTag>
									#{localContent.hashtags[0]}
								</FeedparicipateS.FeedTag>
							</FeedparicipateS.FeedChallengeTopBottomWrapper>
						</FeedparicipateS.FeedChallengeContentWrapper>
					</FeedparicipateS.FeedChallengeWrapper>,
				);
			}

			setBoardBodyArr(localDiv);
		};

		if (category == 'ALL') {
			const fetchData = async () => {
				let getData = await FeedApi.getFeed(category, 30);
				if (getData == '400-03-04') {
					await tokenAPI.RefreshToken();
					getData = await FeedApi.getFeed(category, 30);
				}

				boardResponseArr = getData.result.content;
				addBoardDivs(boardResponseArr);
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
					addBoardDivs([]);
				}
				boardResponseArr = getData.result.content;
				addBoardDivs(boardResponseArr);
			};
			const fetchResponse = fetchData();
		}
	}, [selectedCategory]);
	return <>{boardBodyArr}</>;
}

export default FeedParticipation;
