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

import FeedCategory from './writeFeed.category';

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedWrite(props) {
	const navigate = useNavigate();
	const handleBackwardClick = (e) => {
		navigate(`/feed/main`);
	};

	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea
					onClick={handleBackwardClick()}
				></infoS.TopBackwardArea>
				<infoS.TopTextArea>기록하기</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.FeedWriteArea>
				<FeedCategory></FeedCategory>
			</infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
