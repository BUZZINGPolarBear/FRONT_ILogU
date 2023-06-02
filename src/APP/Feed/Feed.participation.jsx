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
			</FeedparicipateS.FeedChallengeWrapper>
		</>
	);
}

export default FeedParticipation;
