import React, { useEffect, useState } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';

import * as infoS from './Styles/Home.main.keyword';

function DetailKeyword() {
	const navigate = useNavigate();
	const nowLocation = useLocation();
	//키워드 파싱
	const urlParams = new URLSearchParams(nowLocation.search);
	const keyword = urlParams.get('word');

	const handleBackwardClick = (e) => {
		e.preventDefault();
		navigate(`/home/main`);
	};
	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea
					onClick={(e) => handleBackwardClick(e)}
				></infoS.TopBackwardArea>
				<infoS.TopTextArea>키워드</infoS.TopTextArea>
			</infoS.TopNavBar>
		</>
	);
}

export default DetailKeyword;
