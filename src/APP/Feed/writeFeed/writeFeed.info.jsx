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

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedWrite(props) {
	const [selectCategory, setSelectCategory] = useState('none');

	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea></infoS.TopBackwardArea>
				<infoS.TopTextArea>기록하기</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.FeedWriteArea></infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
