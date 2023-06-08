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

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedWrite(props) {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	const params = queryString.parse(nowLocation.search);
	const type = params.type;
	const category = params.category;

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/feed/main`);
	};

	console.log(type);
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
				) : type == 'title' ? (
					<FeedTitle category={category}></FeedTitle>
				) : (
					<></>
				)}
			</infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
