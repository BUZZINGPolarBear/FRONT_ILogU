import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as tokens from '../../tokens';

import InvestmentComponent from './Home.investment';
import InsurenceComponent from './Home.insurence';
import DepositComponent from './Home.main.deposit';
function HomeMain() {
	const [mainCategory, setMainCategory] = useState('investment');

	const handleMainCategory = (e, type) => {
		e.preventDefault();
		setMainCategory(type);
	};
	return (
		<HomeS.HomeMainScreen>
			<HomeS.HomeMainScreenHeader>
				<HomeS.HomeMainHeaderContent>
					<HomeS.HomeMainHeaderContentTitle>
						<HomeS.HomeMainHeaderTitle type="sub">
							하나네 가족은
						</HomeS.HomeMainHeaderTitle>
						<HomeS.HomeMainHeaderTitle type="main">
							프로여행러
						</HomeS.HomeMainHeaderTitle>
					</HomeS.HomeMainHeaderContentTitle>
					<HomeS.HomeMainHeaderContentTitle
						style={{ width: '30%', alignItems: 'center' }}
					>
						<HomeS.HomeMainHeaderCircleIcon></HomeS.HomeMainHeaderCircleIcon>
					</HomeS.HomeMainHeaderContentTitle>
				</HomeS.HomeMainHeaderContent>
			</HomeS.HomeMainScreenHeader>

			<HomeS.HomeMainSelectWrapper>
				<HomeS.HomeMainCategoryBtn
					isSelected={mainCategory == 'investment' ? true : false}
					onClick={(e) => {
						handleMainCategory(e, 'investment');
					}}
				>
					투자상품 추천
				</HomeS.HomeMainCategoryBtn>
				<HomeS.HomeMainCategoryBtn
					isSelected={mainCategory == 'insurence' ? true : false}
					onClick={(e) => {
						handleMainCategory(e, 'insurence');
					}}
				>
					보험 상품
				</HomeS.HomeMainCategoryBtn>
				<HomeS.HomeMainCategoryBtn
					isSelected={mainCategory == 'deposit' ? true : false}
					onClick={(e) => {
						handleMainCategory(e, 'deposit');
					}}
				>
					예적금 상품
				</HomeS.HomeMainCategoryBtn>
			</HomeS.HomeMainSelectWrapper>

			<HomeS.HomeMainCategoryArea>
				{mainCategory == 'investment' ? (
					<InvestmentComponent />
				) : mainCategory == 'insurence' ? (
					<InsurenceComponent />
				) : mainCategory == 'deposit' ? (
					<DepositComponent />
				) : (
					' '
				)}
			</HomeS.HomeMainCategoryArea>
		</HomeS.HomeMainScreen>
	);
}

export default HomeMain;
