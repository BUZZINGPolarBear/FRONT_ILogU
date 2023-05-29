import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import * as recoilMain from "./recoil/recoil.App";
import HomeMain from "./APP/Home/Home.main";
import FeedMain from "./APP/Feed/Feed.main";
import * as tokens from "./tokens";
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from "react-router-dom";
function App() {
	const MainScreen = styled.div`
		// position: fixed;
		top: 0;
		width: 100%;
		max-width: 800px;
		min-height: 100vh;
		height: fit-content;
		background-color: ${tokens.colors.grey_50};
	`;
	const BottomNavBar = styled.div`
		width: 100%;
		max-width: 800px;
		height: 8vh;

		position: fixed;
		bottom: 0;
		margin: 0 auto;

		padding-top: 10px;

		box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);

		display: flex;
		flex-direction: row;
		justify-content: space-around;

		background-color: white;
		z-index: 9999;
	`;
	const NavImg = styled.div`
		width: 20%;
		height: 100%;
	`;
	const navigate = useNavigate();

	const handleNavClick = (e, type) => {
		e.preventDefault();
		navigate(`/${type}`);
		setNavigateBtn(type);
	};
	const navigateReoilSelectState = useRecoilValue(recoilMain.navigateRecoil);
	const [navigateBtn, setNavigateBtn] = useRecoilState(
		recoilMain.navigateRecoil
	);
	return (
		<div className="App">
			<MainScreen>
				<Routes>
					<Route path="/" element={<HomeMain />} />
					<Route
						path="/feed/main"
						element={<FeedMain setNavigateBtn={setNavigateBtn} />}
					/>
					<Route
						path="/feed/participation"
						element={<FeedMain setNavigateBtn={setNavigateBtn} />}
					/>
					<Route path="*" element={<HomeMain />} />
				</Routes>
			</MainScreen>
			<BottomNavBar>
				<NavImg onClick={(e) => handleNavClick(e, "home")}>
					{navigateReoilSelectState === "home" ? (
						<img src="/bottomNavBar/home_clicked.svg" alt="home clicked"></img>
					) : (
						<img
							src="/bottomNavBar/home_unclicked.svg"
							alt="home unclicked"
						></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "finance")}>
					{navigateReoilSelectState === "finance" ? (
						<img
							src="/bottomNavBar/finance_clicked.svg"
							alt="finance clicked"
						></img>
					) : (
						<img
							src="/bottomNavBar/finance_unclicked.svg"
							alt="finance unclicked"
						></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "feed/main")}>
					{navigateReoilSelectState === "feed" ? (
						<img src="/bottomNavBar/feed_clicked.svg" alt="feed clicked"></img>
					) : (
						<img
							src="/bottomNavBar/feed_unclicked.svg"
							alt="feed unclicked"
						></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "challenge")}>
					{navigateReoilSelectState === "challenge" ? (
						<img
							src="/bottomNavBar/challenge_clicked.svg"
							alt="challenge clicked"
						></img>
					) : (
						<img
							src="/bottomNavBar/challenge_unclicked.svg"
							alt="challenge unclicked"
						></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "mypage")}>
					{navigateReoilSelectState === "mypage" ? (
						<img
							src="/bottomNavBar/mypage_clicked.svg"
							alt="mypage clicked"
						></img>
					) : (
						<img
							src="/bottomNavBar/mypage_unclicked.svg"
							alt="mypage unclicked"
						></img>
					)}
				</NavImg>
			</BottomNavBar>
		</div>
	);
}

export default App;
