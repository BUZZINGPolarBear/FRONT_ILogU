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
	const [isSelected, setIsSelected] = useState(false);
	const [selectCategory, setSelectCategory] = useState('none');

	return (
		<>
			<infoS.TopNavBar>
				<infoS.TopBackwardArea></infoS.TopBackwardArea>
				<infoS.TopTextArea>기록하기</infoS.TopTextArea>
			</infoS.TopNavBar>
			<infoS.FeedWriteArea>
				{selectCategory == 'none' ? (
					<>
						<infoS.FeedCatergoryTitleArea>
							<infoS.FeedTitleMain>
								참여중인 챌린지 중 <br></br>기록할 카테고리는 무엇인가요?
							</infoS.FeedTitleMain>
							<infoS.FeedSubTitleMain>
								참여 중인 챌린지 카테고리 중 선택할 수 있어요!
							</infoS.FeedSubTitleMain>
						</infoS.FeedCatergoryTitleArea>
						<infoS.FeedCategorySelectArea></infoS.FeedCategorySelectArea>
						<infoS.FeedWriteSubmitArea isSelected={isSelected}>
							다음
						</infoS.FeedWriteSubmitArea>
					</>
				) : (
					<div></div>
				)}
			</infoS.FeedWriteArea>
		</>
	);
}

export default FeedWrite;
