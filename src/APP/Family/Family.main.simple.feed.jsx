import React, { useEffect, useState, useRef } from 'react';

import * as FamilyS from './Styles/Family.main.styles';
import * as SimpleS from './Styles/Family.main.simple.feed';
import * as tokenAPI from '../AutoSignIn';
import * as simpleApi from './Apis/simple.feed.api';

import * as utils from '../Feed/getFeed/feed.utils';

function SimpleFamilyFeed() {
	const [boardBodyArr, setBoardBodyArr] = useState([]);

	useEffect(() => {
		let boardResponseArr = [];

		const addBoardDivs = (fetchResponse) => {
			let localDiv = [];
			if (fetchResponse.length == 0) setBoardBodyArr(localDiv);
			for (let i = 0; i < fetchResponse.length; i++) {
				const localContent = fetchResponse[i];
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
					<SimpleS.SimpleFeedWrapper key={`simple_Feed_${i}`}>
						<SimpleS.SimpleFeedPic
							src={localContent.mainImage.s3url}
						></SimpleS.SimpleFeedPic>
						<SimpleS.SimpleFeedContentWrapper>
							<SimpleS.SimpleFeedContent type="main">
								{localContent.title}
							</SimpleS.SimpleFeedContent>
							<SimpleS.SimpleFeedContent type="sub">
								{localContent.nickname}
							</SimpleS.SimpleFeedContent>
							<SimpleS.SimpleFeedInfo>
								<SimpleS.InfoContentWrapper>
									<SimpleS.SimpleFeedIcon
										src={
											localContent.liked == true
												? '/Feed/icons/clicked_like.svg'
												: '/Feed/icons/like.svg'
										}
									></SimpleS.SimpleFeedIcon>{' '}
									{localContent.likesCount}
								</SimpleS.InfoContentWrapper>
								<SimpleS.InfoContentWrapper>
									<SimpleS.SimpleFeedIcon src="/Feed/icons/comment.svg"></SimpleS.SimpleFeedIcon>{' '}
									{localContent.commentsCount}
								</SimpleS.InfoContentWrapper>
								<SimpleS.InfoContentWrapper>
									<SimpleS.SimpleFeedIcon src="/Family/money.svg"></SimpleS.SimpleFeedIcon>{' '}
									{localContent.balance
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
								</SimpleS.InfoContentWrapper>
							</SimpleS.SimpleFeedInfo>
						</SimpleS.SimpleFeedContentWrapper>
					</SimpleS.SimpleFeedWrapper>,
				);
			}

			setBoardBodyArr(localDiv);
		};

		const fetchData = async () => {
			let getData = await simpleApi.getSimpleFeed(3);
			if (getData == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await simpleApi.getSimpleFeed(3);
			}

			boardResponseArr = getData.result.content;
			addBoardDivs(boardResponseArr);
		};
		const fetchResponse = fetchData();
	}, []);
	return <>{boardBodyArr}</>;
}

export default SimpleFamilyFeed;
