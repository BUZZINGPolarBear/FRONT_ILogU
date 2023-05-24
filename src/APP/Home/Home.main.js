import styled from "styled-components";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import * as HomeS from "./Styles/Home.main.styles";
import * as tokens from "../../tokens";
// import * as recoilMain from "/recoil/recoil.App";

function HomeMain() {
	return (
		<HomeS.HomeMainScreen>
			<HomeS.HomeMainTopUserInfo>
				<HomeS.HomeMainTopInfoArea>
					<span>
						<b>원하나</b> 님의 수익률은
					</span>
					<span>
						<span style={tokens.typography.headline_5}>+8,300</span>원 입니다.
					</span>
				</HomeS.HomeMainTopInfoArea>
				<HomeS.HomeMainTopInfoArea>
					<img
						src="/mainScreen/headerRight.svg"
						alt="headerRight"
						style={{ width: "130%", height: "130%" }}
					/>
				</HomeS.HomeMainTopInfoArea>
			</HomeS.HomeMainTopUserInfo>
		</HomeS.HomeMainScreen>
	);
}

export default HomeMain;
