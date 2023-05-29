import styled from "styled-components";
import * as tokens from "../../../tokens";

export const FeedPictureArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 720px;
	height: 35vh;
	margin: 2vh auto;
	position: relative;
	background-color: white;
`;

export const FeedPictureArea_bigPicture = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 45%;
	max-width: 360px;
	height: 100%;

	background-color: antiquewhite;
`;

export const FeedPictureArea_smallPicture = styled.div`
	width: 100%;
	max-width: 360px;
	height: 46%;

	background-color: ${tokens.colors.green_400};
`;
