import styled from 'styled-components';
import * as tokens from '../../../tokens';

const defaultProfilePicUrl = '/Feed/Default_pfp.png';
export const FeedChallengeWrapper = styled.div`
	width: 90%;
	height: 60vh;
	margin: auto;
	margin-bottom: 3vh;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	// background-color: antiquewhite;
`;

export const FeedChallengeUserWrapper = styled.div`
	width: 60%;
	height: 15%;
	max-width: 720px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	background-color: white;
`;

export const FeedChallengeUserImage = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	// background-color: ${tokens.colors.grey_100};

	background-image: url(${(props) => props.picUrl || defaultProfilePicUrl});
	background-size: cover;
	background-position: center;

	@media (max-width: 380px) {
		width: 40px;
		height: 40px;
	}
`;

export const FeedChallengeUserInfoWrapper = styled.div`
	width: fit-content;
	height: 100%;
	position: relative;

	margin-left: 5%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	text-align: left;
`;

export const FeedChallengeUserInfo = styled.span`
	color: ${tokens.colors.grey_700};
	${tokens.typography.body_3_SB};
`;

export const FeedChallengeUserInfoDate = styled.span`
	color: ${tokens.colors.grey_200};
	${tokens.typography.caption};
`;

export const FeedPictureArea = styled.div`
	width: 100%;
	height: 50%;
	border-radius: 20px;
	background-image: url(${(props) => props.picUrl});
	background-size: cover;
	background-position: center;
	background-color: ${tokens.colors.grey_100};
`;

export const FeedChallengeContentWrapper = styled.div`
	width: 100%;
	height: 30%;
	max-width: 720px;

	display: flex;
	align-items: center;
	justify-content: flex-start;

	background-color: antiquewhite;
`;
