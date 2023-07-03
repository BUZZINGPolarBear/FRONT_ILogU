import React, { useEffect, useState, useRef } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as FamilyS from './Styles/Family.main.styles';
import SimpleFamilyFeed from './Family.main.simple.feed';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as utils from '../Feed/getFeed/feed.utils';
import * as recoilFamily from './recoil/feed.recoil';
import MoneyModal from './Family.main.all.feed.modal.money';
import * as api from './Apis/main.feed.api';
import * as tokenAPI from '../AutoSignIn';

function FamilyMainScreen() {
	const [isMoneyOpened, setIsMoneyOpened] = useRecoilState(
		recoilFamily.isMoneyOpend,
	);
	const [moneyRankDiv, setMoneyRankDiv] = useState([]);
	const [likeRankDiv, setLikeRankDiv] = useState([]);
	const nowLocation = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const makeRankFamily = (moneyArr, likeArr) => {
			let localMoneyRank = [];
			let localLikeRank = [];
			for (let i = 0; i < 3; i++) {
				localMoneyRank.push(
					<FamilyS.RankArea key={`family_feed_money_${i}`}>
						<FamilyS.RankNum type="money">{i + 1}.</FamilyS.RankNum>
						<FamilyS.RankTitle>
							<FamilyS.RankProfilePic
								url={moneyArr[i].profileUrl}
							></FamilyS.RankProfilePic>
							{moneyArr[i].nickname}
						</FamilyS.RankTitle>
						<FamilyS.RankContentArea>
							<FamilyS.RankContent type="money">
								{moneyArr[i].sendToChild}
							</FamilyS.RankContent>
						</FamilyS.RankContentArea>
					</FamilyS.RankArea>,
				);

				localLikeRank.push(
					<FamilyS.RankArea key={`family_feed_rank_${i}`}>
						<FamilyS.RankNum>{i + 1}.</FamilyS.RankNum>
						<FamilyS.RankTitle>
							<FamilyS.RankProfilePic
								url={likeArr[i].profileUrl}
							></FamilyS.RankProfilePic>
							{likeArr[i].nickname}
						</FamilyS.RankTitle>
						<FamilyS.RankContentArea>
							<FamilyS.RankContent type="like">
								{likeArr[i].likes}
							</FamilyS.RankContent>
						</FamilyS.RankContentArea>
					</FamilyS.RankArea>,
				);
			}
			setMoneyRankDiv(localMoneyRank);
			setLikeRankDiv(localLikeRank);
		};
		const getFamilyRank = async () => {
			let getFamilyRankResult = await api.getFamilyRank();
			if (getFamilyRankResult.code == '400-03-04') {
				await tokenAPI.RefreshToken();
				getFamilyRankResult = await api.getFamilyRank();
			}
			makeRankFamily(
				getFamilyRankResult.result.familyMoneyRank,
				getFamilyRankResult.result.familyLikeRank,
			);
		};

		getFamilyRank();
	}, []);

	const handleFamilyStory = () => {
		navigate('/family/feed');
	};

	const handleMoneyIconClick = (e) => {
		e.preventDefault();
		setIsMoneyOpened(true);
	};
	return (
		<>
			{isMoneyOpened == true ? <MoneyModal type="main"></MoneyModal> : <></>}
			<FamilyS.TopNavBar>
				<FamilyS.TopNavTitle>우리가족</FamilyS.TopNavTitle>
				<FamilyS.TopNavIcon icon="baby" />
				<FamilyS.TopNavIcon
					icon="money"
					onClick={(e) => handleMoneyIconClick(e)}
				/>
			</FamilyS.TopNavBar>
			<FamilyS.MainWrapper>
				<FamilyS.RankWrapper>
					<FamilyS.MainWrapperTitle>우리 가족 용돈 왕</FamilyS.MainWrapperTitle>
					<FamilyS.MainRankWrapper>
						{/* <FamilyS.RankArea>
							<FamilyS.RankNum type="money">1.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								할아버지
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="money">200,000</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum type="money">2.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="/Feed/userPic.jpg"></FamilyS.RankProfilePic>
								삼촌
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="money">160,000</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum type="money">3.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								이모
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="money">100,000</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea> */}
						{moneyRankDiv}
					</FamilyS.MainRankWrapper>
				</FamilyS.RankWrapper>

				<FamilyS.RankWrapper>
					<FamilyS.MainWrapperTitle>우리 가족 공감 왕</FamilyS.MainWrapperTitle>
					<FamilyS.MainRankWrapper>
						{/* <FamilyS.RankArea>
							<FamilyS.RankNum>1.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								할아버지
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="like">60</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum>2.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="/Feed/userPic.jpg"></FamilyS.RankProfilePic>
								삼촌
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="like">40</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum type="like">3.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								이모
							</FamilyS.RankTitle>
							<FamilyS.RankContentArea>
								<FamilyS.RankContent type="like">37</FamilyS.RankContent>
							</FamilyS.RankContentArea>
						</FamilyS.RankArea> */}
						{likeRankDiv}
					</FamilyS.MainRankWrapper>
				</FamilyS.RankWrapper>
				<FamilyS.RankWrapper
					style={{ height: '50vh' }}
					onClick={handleFamilyStory}
				>
					<FamilyS.MainWrapperTitle>
						우리 가족 이야기
						<FamilyS.RightPointer></FamilyS.RightPointer>
					</FamilyS.MainWrapperTitle>
					<FamilyS.MainRankWrapper style={{ marginBottom: '10vh' }}>
						<SimpleFamilyFeed></SimpleFamilyFeed>
					</FamilyS.MainRankWrapper>
				</FamilyS.RankWrapper>
			</FamilyS.MainWrapper>
		</>
	);
}

export default FamilyMainScreen;
