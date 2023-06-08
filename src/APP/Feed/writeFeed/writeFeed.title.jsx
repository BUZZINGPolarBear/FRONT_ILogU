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

import * as infoS from './Styles/info.styles';
import * as tokens from '../../../tokens';

function FeedTitle() {
	return <div>타이틀 정하기 화면</div>;
}

export default FeedTitle;
