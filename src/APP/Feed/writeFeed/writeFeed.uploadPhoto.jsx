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
import * as photoS from './Styles/uploadPhoto.styles';
import * as titleS from './Styles/title.styles';
import * as tokens from '../../../tokens';

function UploadPhoto(props) {
	const nowLocation = useLocation();
	const params = queryString.parse(nowLocation.search);
	const type = params.type;
	const category = params.category;
	const title = params.title;

	return (
		<>
			<infoS.FeedCatergoryTitleArea>
				<infoS.FeedTitleMain>사진을 추가해주세요</infoS.FeedTitleMain>
				<infoS.FeedSubTitleMain>
					아이와의 기억을 사진으로 추억할 수 있어요!
				</infoS.FeedSubTitleMain>
			</infoS.FeedCatergoryTitleArea>
			<infoS.FeedCategorySelectArea>
				<infoS.FeedCategoryWrapper>
					<photoS.TitleDiv width={30} typo={'subtitle_1_sb'}>
						{category == '여행' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									✈️
								</span>
								<span>여행</span>
							</>
						) : category == '스포츠' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									⚽️
								</span>
								<span>스포츠</span>
							</>
						) : category == '요리' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									🍳
								</span>
								<span>요리</span>
							</>
						) : category == '금융' ? (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									🏦
								</span>
								<span>금융</span>
							</>
						) : (
							<>
								<span
									style={{
										marginRight: '10px',
									}}
								>
									👩‍👩‍👧‍👦
								</span>
								<span>기타</span>
							</>
						)}
					</photoS.TitleDiv>
					<photoS.TitleDiv width={68} type={'subtitle_1'}>
						{title}
					</photoS.TitleDiv>
				</infoS.FeedCategoryWrapper>
			</infoS.FeedCategorySelectArea>
			<infoS.FeedWriteSubmitArea>다음</infoS.FeedWriteSubmitArea>
		</>
	);
}

export default UploadPhoto;
