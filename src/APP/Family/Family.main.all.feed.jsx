import React, { useEffect, useState } from 'react';
import * as FeedparicipateS from './Styles/Family.main.all.feed';
import * as FeedApi from './Apis/simple.feed.api';
import * as tokenAPI from '../AutoSignIn';
import * as utils from '../Feed/getFeed/feed.utils';
import * as FamilyS from './Styles/Family.main.styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as recoilFamily from './recoil/feed.recoil';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import CommentModal from './Family.main.all.feed.modal.comment';

function FamilyAllFeed(props) {
	const [boardBodyArr, setBoardBodyArr] = useState([]);
	const [boardBodyContentArr, setBoardBodyContentArr] = useState([]);
	const [isCommentClicked, setIsCommentClicked] = useState(false);
	const [commentModalId, setCommentModalId] = useState();
	const [isCommentOpend, setIsCommentOpend] = useRecoilState(
		recoilFamily.isCommentOpend,
	);
	const [isLikeArr, setIsLikeArr] = useState([]);
	const navigate = useNavigate();

	//좋아요 버튼
	const handleBoardLike = async (boardId) => {
		const response = await FeedApi.postLike(boardId);

		let copyBoardBodyContentArr = [...boardBodyContentArr];

		for (let i = 0; i < copyBoardBodyContentArr.length; i++) {
			if (copyBoardBodyContentArr[i].id == boardId) {
				copyBoardBodyContentArr[i].isLiked = response.result.isLike;
				copyBoardBodyContentArr[i].likesCount = response.result.likes;
				break;
			}
		}
		// copyBoardBodyContentArr[boardId].isLiked = response.result.isLike;
		setBoardBodyContentArr(copyBoardBodyContentArr);
	};

	//댓글
	const handleComment = (e, boardId) => {
		e.preventDefault();
		setCommentModalId(boardId);
		setIsCommentOpend(true);
	};

	//뒤로가기
	const handleBackward = () => {
		navigate('/family');
	};
	useEffect(() => {
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

		const fetchData = async () => {
			let getData = await FeedApi.getFeed(30);
			if (getData == '400-03-04') {
				await tokenAPI.RefreshToken();
				getData = await FeedApi.getFeed(30);
			}

			boardResponseArr = getData.result.content;
			addBoardContentArr(boardResponseArr);
		};
		const fetchResponse = fetchData();
	}, []);

	useEffect(() => {
		const drawBoardDiv = (boardBodyContentArr) => {
			let localDiv = [];

			if (boardBodyContentArr.length == 0) setBoardBodyArr(localDiv);

			for (let i = 0; i < boardBodyContentArr.length; i++) {
				const localContent = boardBodyContentArr[i];
				let category = localContent.category;

				if (category === 'DAILY') category = '👩‍👩‍👧‍👦 일상';
				else if (category === 'SPORTS') category = '⚽️ 스포츠';
				else if (category === 'TRAVEL') category = '✈️ 여행';
				else category = '👩‍👩‍👧‍👦 일상';

				if (
					localContent.mainImage == null ||
					typeof localContent.mainImage == 'undefined'
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
									{localContent.dateStr}
								</FeedparicipateS.FeedChallengeUserInfoDate>
							</FeedparicipateS.FeedChallengeUserInfoWrapper>
						</FeedparicipateS.FeedChallengeUserWrapper>

						<FeedparicipateS.FeedPictureArea
							picUrl={localContent.mainImage ?? '/Feed/feed_sample.jpg'}
							alt="사용자"
						></FeedparicipateS.FeedPictureArea>

						<FeedparicipateS.FeedChallengeContentWrapper>
							<FeedparicipateS.FeedChallengeTopBottomWrapper>
								<FeedparicipateS.TopInfo
									onClick={(e) => {
										handleBoardLike(localContent.id);
									}}
								>
									{localContent.isLiked == true ? (
										<img src="/Feed/icons/clicked_like.svg" alt="좋아요"></img>
									) : (
										<img src="/Feed/icons/like.svg" alt="좋아요"></img>
									)}

									<div>{localContent.likesCount}</div>
								</FeedparicipateS.TopInfo>
								<FeedparicipateS.TopInfo
									onClick={(e) => {
										handleComment(e, localContent.id);
									}}
								>
									<img src="/Feed/icons/comment.svg" alt="댓글"></img>
									<div>{localContent.commentsCount}</div>
								</FeedparicipateS.TopInfo>
								<FeedparicipateS.TopInfo>
									<img src="/Family/money.svg" alt="용돈"></img>
									<div>{localContent.balance}</div>
								</FeedparicipateS.TopInfo>
							</FeedparicipateS.FeedChallengeTopBottomWrapper>
							<FeedparicipateS.FeedChallengeMiddleWrapper>
								{localContent.content}
							</FeedparicipateS.FeedChallengeMiddleWrapper>
							<FeedparicipateS.FeedChallengeTopBottomWrapper
							// style={{ height: '35%' }}
							>
								<FeedparicipateS.FeedTag>
									{localContent.category}
								</FeedparicipateS.FeedTag>
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
		drawBoardDiv(boardBodyContentArr);
	}, [boardBodyContentArr]);
	return (
		<>
			{isCommentOpend == true ? (
				<CommentModal boardId={commentModalId}></CommentModal>
			) : (
				<></>
			)}
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
