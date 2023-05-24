import logo from "./logo.svg";
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

function App() {
	const MainScreen = styled.div`
		position: fixed;
		top: 0;
		width: 100%;
		height: 90vh;

		background-color: #282c34;
	`;
	const BottomNavBar = styled.div`
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 8vh;
		padding-top: 10px;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: white;
	`;
	const NavImg = styled.div`
		width: 20%;
		height: 100%;
	`;

	const handleNavClick = (e, type) => {
		e.preventDefault();
		setNavigateBtn(type);
	};
	const navigateReoilSelectState = useRecoilValue(recoilMain.navigateRecoil);
	const [navigateBtn, setNavigateBtn] = useRecoilState(
		recoilMain.navigateRecoil
	);
	return (
		<div className="App">
			<MainScreen></MainScreen>
			<BottomNavBar>
				<NavImg onClick={(e) => handleNavClick(e, "home")}>
					{navigateReoilSelectState === "home" ? (
						<img src="/bottomNavBar/home_clicked.svg"></img>
					) : (
						<img src="/bottomNavBar/home_unclicked.svg"></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "finance")}>
					{navigateReoilSelectState === "finance" ? (
						<img src="/bottomNavBar/finance_clicked.svg"></img>
					) : (
						<img src="/bottomNavBar/finance_unclicked.svg"></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "feed")}>
					{navigateReoilSelectState === "feed" ? (
						<img src="/bottomNavBar/feed_clicked.svg"></img>
					) : (
						<img src="/bottomNavBar/feed_unclicked.svg"></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "challenge")}>
					{navigateReoilSelectState === "challenge" ? (
						<img src="/bottomNavBar/challenge_clicked.svg"></img>
					) : (
						<img src="/bottomNavBar/challenge_unclicked.svg"></img>
					)}
				</NavImg>
				<NavImg onClick={(e) => handleNavClick(e, "mypage")}>
					{navigateReoilSelectState === "mypage" ? (
						<img src="/bottomNavBar/mypage_clicked.svg"></img>
					) : (
						<img src="/bottomNavBar/mypage_unclicked.svg"></img>
					)}
				</NavImg>
			</BottomNavBar>
		</div>
	);
}

export default App;
