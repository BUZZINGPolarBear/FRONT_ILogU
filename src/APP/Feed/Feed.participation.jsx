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
import * as tokens from '../../tokens';
import * as FeedMainS from './Styles/Feed.main.styles';
import * as FeedparicipateS from './Styles/Feed.participation.styles';

import FeedAll from './Feed.all';

function FeedParticipation() {
	return (
		<>
			<FeedparicipateS.FeedChallengeWrapper>
				<FeedparicipateS.FeedChallengeUserWrapper>
					<FeedparicipateS.FeedChallengeUserImage picUrl="/Feed/userPic.jpg"></FeedparicipateS.FeedChallengeUserImage>
					<FeedparicipateS.FeedChallengeUserInfoWrapper>
						<FeedparicipateS.FeedChallengeUserInfo>
							준휘대디
						</FeedparicipateS.FeedChallengeUserInfo>
						<FeedparicipateS.FeedChallengeUserInfoDate>
							2023.06.02
						</FeedparicipateS.FeedChallengeUserInfoDate>
					</FeedparicipateS.FeedChallengeUserInfoWrapper>
				</FeedparicipateS.FeedChallengeUserWrapper>

				<FeedparicipateS.FeedPictureArea picUrl="/Feed/feed_sample.jpg"></FeedparicipateS.FeedPictureArea>

				<FeedparicipateS.FeedChallengeContentWrapper>
					<FeedparicipateS.FeedChallengeTopBottomWrapper>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/like.svg"></img>
							<div>10</div>
						</FeedparicipateS.TopInfo>
						<FeedparicipateS.TopInfo>
							<img src="/Feed/icons/comment.svg"></img>
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
		</>
	);
}

export default FeedParticipation;
