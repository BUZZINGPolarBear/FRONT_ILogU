import React, { useEffect, useState, useRef } from 'react';

import * as FamilyS from './Styles/Family.main.styles';
import * as SimpleS from './Styles/Family.main.simple.feed';
function SimpleFamilyFeed() {
	return (
		<>
			<SimpleS.SimpleFeedWrapper>
				<SimpleS.SimpleFeedPic src="https://ilogu-image.s3.ap-northeast-2.amazonaws.com/board/2023/06/28/df18b153-93a7-41d9-b38b-c1b62c906752.blob"></SimpleS.SimpleFeedPic>
				<SimpleS.SimpleFeedContentWrapper>
					<SimpleS.SimpleFeedContent type="main">
						#아이와 함께 제주도
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedContent type="sub">
						루리맘
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedInfo>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/clicked_like.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/comment.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Family/money.svg"></SimpleS.SimpleFeedIcon>{' '}
							100,000
						</SimpleS.InfoContentWrapper>
					</SimpleS.SimpleFeedInfo>
				</SimpleS.SimpleFeedContentWrapper>
			</SimpleS.SimpleFeedWrapper>
			<SimpleS.SimpleFeedWrapper>
				<SimpleS.SimpleFeedPic src="https://ilogu-image.s3.ap-northeast-2.amazonaws.com/board/2023/06/28/df18b153-93a7-41d9-b38b-c1b62c906752.blob"></SimpleS.SimpleFeedPic>
				<SimpleS.SimpleFeedContentWrapper>
					<SimpleS.SimpleFeedContent type="main">
						#아이와 함께 제주도
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedContent type="sub">
						루리맘
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedInfo>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/like.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/comment.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Family/money.svg"></SimpleS.SimpleFeedIcon>{' '}
							100,000
						</SimpleS.InfoContentWrapper>
					</SimpleS.SimpleFeedInfo>
				</SimpleS.SimpleFeedContentWrapper>
			</SimpleS.SimpleFeedWrapper>
			<SimpleS.SimpleFeedWrapper>
				<SimpleS.SimpleFeedPic src="https://ilogu-image.s3.ap-northeast-2.amazonaws.com/board/2023/06/28/df18b153-93a7-41d9-b38b-c1b62c906752.blob"></SimpleS.SimpleFeedPic>
				<SimpleS.SimpleFeedContentWrapper>
					<SimpleS.SimpleFeedContent type="main">
						#아이와 함께 제주도
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedContent type="sub">
						루리맘
					</SimpleS.SimpleFeedContent>
					<SimpleS.SimpleFeedInfo>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/clicked_like.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Feed/icons/comment.svg"></SimpleS.SimpleFeedIcon>{' '}
							10
						</SimpleS.InfoContentWrapper>
						<SimpleS.InfoContentWrapper>
							<SimpleS.SimpleFeedIcon src="/Family/money.svg"></SimpleS.SimpleFeedIcon>{' '}
							100,000
						</SimpleS.InfoContentWrapper>
					</SimpleS.SimpleFeedInfo>
				</SimpleS.SimpleFeedContentWrapper>
			</SimpleS.SimpleFeedWrapper>
		</>
	);
}

export default SimpleFamilyFeed;
