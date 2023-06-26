import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as tokens from '../../../tokens';
import * as FeedMainS from './Styles/Feed.main.styles';
import * as FeedparicipateS from './Styles/Feed.participation.styles';
import * as FeedApi from './APIs/getFeed.api';
import * as utils from './feed.utils';

function FeedParticipation(props) {
	const [boardBodyArr, setBoardBodyArr] = useState([]);

	useEffect(() => {
		let category = props.category;
		let boardResponseArr = [];

		if (category == '전체') category = 'ALL';
		if (category == '여행') category = 'TRAVEL';
		if (category == '스포츠') category = 'SPORTS';
		if (category == '일상') category = 'DAILY';

		const addBoardDivs = (fetchResponse) => {
			let localDiv = [];
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
				const dateStr = utils.changeDateStr(localContent.createdAt);
				const content = utils.truncateString(localContent.content, 65);
				localDiv.push(
					<FeedparicipateS.FeedChallengeWrapper>
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
				const getData = await FeedApi.getFeed(category, 30);
				boardResponseArr = getData.result.content;
				addBoardDivs(boardResponseArr);
			};
			const fetchResponse = fetchData();
		}
	}, []);
	return (
		<>
			{/* <FeedparicipateS.FeedChallengeWrapper>
				<FeedparicipateS.FeedChallengeUserWrapper>
					<FeedparicipateS.FeedChallengeUserImage
						picUrl="/Feed/userPic.jpg"
						alt="좋아요"
					></FeedparicipateS.FeedChallengeUserImage>
					<FeedparicipateS.FeedChallengeUserInfoWrapper>
						<FeedparicipateS.FeedChallengeUserInfo>
							준휘대디
						</FeedparicipateS.FeedChallengeUserInfo>
						<FeedparicipateS.FeedChallengeUserInfoDate>
							2023.06.02
						</FeedparicipateS.FeedChallengeUserInfoDate>
					</FeedparicipateS.FeedChallengeUserInfoWrapper>
				</FeedparicipateS.FeedChallengeUserWrapper>

				<FeedparicipateS.FeedPictureArea
					picUrl="/Feed/feed_sample.jpg"
					alt="좋아요"
				></FeedparicipateS.FeedPictureArea>

				<FeedparicipateS.FeedChallengeContentWrapper>
					<FeedparicipateS.FeedChallengeTopBottomWrapper>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/like.svg" alt="좋아요"></img>
							<div>10</div>
						</FeedparicipateS.TopInfo>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/comment.svg" alt="댓글"></img>
							<div>10</div>
						</FeedparicipateS.TopInfo>
					</FeedparicipateS.FeedChallengeTopBottomWrapper>
					<FeedparicipateS.FeedChallengeMiddleWrapper>
						주니와 함께 안동에 놀러갔어요. 안동의 물길공원에서 행복한 시간을
						보냈어요. 찜닭도 먹고 추억을 쌓았어요!
					</FeedparicipateS.FeedChallengeMiddleWrapper>
					<FeedparicipateS.FeedChallengeTopBottomWrapper
						style={{ height: '35%' }}
					>
						<FeedparicipateS.FeedTag>🧳 여행</FeedparicipateS.FeedTag>
						<FeedparicipateS.FeedTag>#아이와 함께 안동</FeedparicipateS.FeedTag>
					</FeedparicipateS.FeedChallengeTopBottomWrapper>
				</FeedparicipateS.FeedChallengeContentWrapper>
			</FeedparicipateS.FeedChallengeWrapper>

			<FeedparicipateS.FeedChallengeWrapper>
				<FeedparicipateS.FeedChallengeUserWrapper>
					<FeedparicipateS.FeedChallengeUserImage
						picUrl="/Feed/userPic.jpg"
						alt="사용자"
					></FeedparicipateS.FeedChallengeUserImage>
					<FeedparicipateS.FeedChallengeUserInfoWrapper>
						<FeedparicipateS.FeedChallengeUserInfo>
							준휘대디
						</FeedparicipateS.FeedChallengeUserInfo>
						<FeedparicipateS.FeedChallengeUserInfoDate>
							2023.06.02
						</FeedparicipateS.FeedChallengeUserInfoDate>
					</FeedparicipateS.FeedChallengeUserInfoWrapper>
				</FeedparicipateS.FeedChallengeUserWrapper>

				<FeedparicipateS.FeedPictureArea
					picUrl="/Feed/feed_sample.jpg"
					alt="예시 피드"
				></FeedparicipateS.FeedPictureArea>

				<FeedparicipateS.FeedChallengeContentWrapper>
					<FeedparicipateS.FeedChallengeTopBottomWrapper>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/like.svg" alt="좋아요"></img>
							<div>10</div>
						</FeedparicipateS.TopInfo>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/comment.svg" alt="댓글"></img>
							<div>10</div>
						</FeedparicipateS.TopInfo>
					</FeedparicipateS.FeedChallengeTopBottomWrapper>
					<FeedparicipateS.FeedChallengeMiddleWrapper>
						주니와 함께 안동에 놀러갔어요. 안동의 물길공원에서 행복한 시간을
						보냈어요. 찜닭도 먹고 추억을 쌓았어요!
					</FeedparicipateS.FeedChallengeMiddleWrapper>
					<FeedparicipateS.FeedChallengeTopBottomWrapper
						style={{ height: '35%' }}
					>
						<FeedparicipateS.FeedTag>🧳 여행</FeedparicipateS.FeedTag>
						<FeedparicipateS.FeedTag>#아이와 함께 안동</FeedparicipateS.FeedTag>
					</FeedparicipateS.FeedChallengeTopBottomWrapper>
				</FeedparicipateS.FeedChallengeContentWrapper>
			</FeedparicipateS.FeedChallengeWrapper>
			<FeedMainS.WriteFeedIconArea>
				<FeedMainS.WriteFeedIcon></FeedMainS.WriteFeedIcon>
			</FeedMainS.WriteFeedIconArea> */}
			{boardBodyArr}
		</>
	);
}

export default FeedParticipation;
