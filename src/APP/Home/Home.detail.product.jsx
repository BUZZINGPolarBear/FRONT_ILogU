import React, { useEffect, useState, useRef } from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	useLocation,
	Routes,
	useNavigate,
} from 'react-router-dom';
import * as HomeS from './Styles/Home.main.styles';
import * as DetailS from './Styles/Home.detail.product.styles';
function DetailVeiw() {
	return (
		<>
			<DetailS.MainPicWrapper img="/mainScreen/detail/paris.svg"></DetailS.MainPicWrapper>
			<DetailS.MainScreenWrapper></DetailS.MainScreenWrapper>
		</>
	);
}

export default DetailVeiw;
