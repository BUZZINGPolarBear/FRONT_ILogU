import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as feedRecoil from './recoil/recoild.feed';
import queryString from 'query-string';

import FeedCategory from './writeFeed.category';
import FeedTitle from './writeFeed.title';
import UploadPhoto from './writeFeed.uploadPhoto';

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedWrite(props) {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	const params = queryString.parse(nowLocation.search);
	let type = '';
	let category = '';
	let title = '';
	try {
		title = params.title;
	} catch {
		console.log('params is not yet defined');
	}
	try {
		type = params.type;
	} catch {
		console.log('type is not yet defined');
	}
	try {
		category = params.category;
	} catch {
		console.log('category is not yet defined');
	}

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/feed/main`);
	};

	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></infoS.TopBackwardArea>
				<infoS.TopTextArea>기록하기</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.FeedWriteArea>
				{type == undefined ? (
					<FeedCategory></FeedCategory>
				) : type == 'title' && title == undefined ? (
					<FeedTitle category={category}></FeedTitle>
				) : title != undefined && title.length > 0 ? (
					<UploadPhoto category={category} title={title}></UploadPhoto>
				) : (
					<></>
				)}
			</infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
