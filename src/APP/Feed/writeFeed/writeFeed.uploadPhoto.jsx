import React, { useEffect, useState, useRef } from 'react';
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
import 'bulma/css/bulma.css';

import * as infoS from './Styles/info.styles';
import * as titleS from './Styles/title.styles';
import * as tokens from '../../../tokens';

function UploadPhoto(props) {
	return <div>사진 업로드하기</div>;
}

export default UploadPhoto;
