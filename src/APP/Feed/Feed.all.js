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
				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>
				<FeedAllS.FeedPictureArea_bigPicture>
					<FeedAllS.FeedPictureArea_smallPicture>
						a
					</FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture>
						s
					</FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture>
					<FeedAllS.FeedPictureArea_smallPicture>
						a
					</FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture>
						s
					</FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>

				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>

				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>
		</>
	);
}

export default FeedAll;
