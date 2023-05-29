import styled from "styled-components";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import * as FeedAllS from "./Styles/Feed.all.styles";
import * as tokens from "../../tokens";

function FeedAll() {
	return (
		<>
			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundImage: `url(/Feed/sample1.svg)` }}
				></FeedAllS.FeedPictureArea_bigPicture>
				<FeedAllS.FeedPictureArea_bigPicture>
					<FeedAllS.FeedPictureArea_smallPicture
						style={{ backgroundImage: `url(/Feed/sample2.svg)` }}
					></FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture
						style={{ backgroundImage: `url(/Feed/sample3.svg)` }}
					></FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture>
					<FeedAllS.FeedPictureArea_smallPicture
						style={{ backgroundImage: `url(/Feed/sample2.svg)` }}
					></FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture
						style={{ backgroundImage: `url(/Feed/sample3.svg)` }}
					>
						s
					</FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>

				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundImage: `url(/Feed/sample4.svg)` }}
				></FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundImage: `url(/Feed/sample5.svg)` }}
				></FeedAllS.FeedPictureArea_bigPicture>

				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundImage: `url(/Feed/sample6.svg)` }}
				></FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>
		</>
	);
}

export default FeedAll;
