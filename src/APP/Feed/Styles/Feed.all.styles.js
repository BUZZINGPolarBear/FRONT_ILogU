import styled from "styled-components";
import * as tokens from "../../../tokens";

export const FeedPictureArea = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	width: 100%;
	max-width: 720px;
	height: 350px;

	margin: 2vh auto;
	position: relative;
	background-color: white;
`;

export const FeedPictureArea_bigPicture = styled.div`
	position: relative;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 48%;
	max-width: 360px;
	height: 100%;

	background-size: cover;
	background-position: center;
	overflow: hidden;

	// background-color: antiquewhite;
`;

export const FeedPictureArea_smallPicture = styled.div`
	position: relative;
	border-radius: 20px;
	width: 100%;
	max-width: 360px;
	height: 46%;

	background-size: cover;
	background-position: center;
	overflow: hidden;
`;

export const StyledImages = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10%;
`;
