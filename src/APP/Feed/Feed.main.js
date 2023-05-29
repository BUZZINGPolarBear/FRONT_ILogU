import styled from "styled-components";
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from "react-router-dom";
import * as FeedMainS from "./Styles/Feed.main.styles";
import * as tokens from "../../tokens";
import FeedAll from "./Feed.all";
function FeedMain(props) {
	const nowLocation = useLocation();
	const navigate = useNavigate();

	const handleNavBtnClick = (e, type) => {
		e.preventDefault();
		props.setNavigateBtn(type);
		navigate(`/${type}`);
	};
	return (
		<>
			<FeedMainS.TopNavBar>
				<FeedMainS.TopNavBarItem
					onClick={(e) => handleNavBtnClick(e, "feed/main")}
				>
					<FeedMainS.TopNavBarItemText
						style={
							nowLocation.pathname == "/feed/main"
								? {
										color: tokens.colors.green_500,
										borderBottom: `2px solid ${tokens.colors.green_500}`,
								  }
								: { color: tokens.colors.grey_300 }
						}
					>
						전체 피드
					</FeedMainS.TopNavBarItemText>
				</FeedMainS.TopNavBarItem>
				<FeedMainS.TopNavBarItem
					onClick={(e) => handleNavBtnClick(e, "feed/participation")}
				>
					<FeedMainS.TopNavBarItemText
						style={
							nowLocation.pathname == "/feed/participation"
								? {
										color: tokens.colors.green_500,
										borderBottom: `2px solid ${tokens.colors.green_500}`,
								  }
								: { color: tokens.colors.grey_300 }
						}
					>
						참여 챌린지
					</FeedMainS.TopNavBarItemText>
				</FeedMainS.TopNavBarItem>
			</FeedMainS.TopNavBar>
			<FeedMainS.FeedMainScreen>
				{nowLocation.pathname == "/feed/main" ? <FeedAll></FeedAll> : null}
			</FeedMainS.FeedMainScreen>
		</>
	);
}

export default FeedMain;
