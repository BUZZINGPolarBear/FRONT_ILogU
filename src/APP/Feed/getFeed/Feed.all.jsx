import styled from 'styled-components';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import * as FeedAllS from './Styles/Feed.all.styles';
import * as FeedMainS from './Styles/Feed.main.styles';
import * as tokens from '../../../tokens';

function FeedAll() {
	return (
		<>
			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>
				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundColor: 'white' }}
				>
					<FeedAllS.FeedPictureArea_smallPicture></FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture></FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea>
				<FeedAllS.FeedPictureArea_bigPicture
					style={{ backgroundColor: 'white' }}
				>
					<FeedAllS.FeedPictureArea_smallPicture></FeedAllS.FeedPictureArea_smallPicture>
					<FeedAllS.FeedPictureArea_smallPicture></FeedAllS.FeedPictureArea_smallPicture>
				</FeedAllS.FeedPictureArea_bigPicture>

				<FeedAllS.FeedPictureArea_bigPicture></FeedAllS.FeedPictureArea_bigPicture>
			</FeedAllS.FeedPictureArea>

			<FeedAllS.FeedPictureArea style={{ height: '120px' }}>
				<FeedAllS.FeedPictureArea_smallPicture
					style={{ height: '120px', width: '48%' }}
				></FeedAllS.FeedPictureArea_smallPicture>
				<FeedAllS.FeedPictureArea_smallPicture
					style={{ height: '120px', width: '48%' }}
				></FeedAllS.FeedPictureArea_smallPicture>
			</FeedAllS.FeedPictureArea>
		</>
	);
}

export default FeedAll;
