import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as InsurenceS from './Styles/Home.insurence.styles';
import * as DepositS from './Styles/Home.deposit.styles';
import InsurenceRecommendSwiper from './Home.insurence.slide';
import DepositSwiper from './Home.deposit.slide';

function DepositComponent() {
	return (
		<>
			<HomeS.MainCardWrapper>
				<HomeS.MainCardTitleWrapper>
					<HomeS.MainCardTitle ismain="true">예금상품 추천</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						프로여행러를 위한 예금상품을 추천해드려요!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<HomeS.MainRecommendCardWrapper>
					<HomeS.MainRecommendContentWrapper>
						<DepositS.InsurenceRecommendTextWrapper>
							<DepositS.InsurenceRecommendText type="main">
								여행예금상품
							</DepositS.InsurenceRecommendText>
							<DepositS.InsurenceRecommendText type="sub">
								아이들과 함께 떠날 여행을 준비하는 당신에게
							</DepositS.InsurenceRecommendText>
						</DepositS.InsurenceRecommendTextWrapper>

						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>

					<HomeS.MainRecommendContentWrapper>
						<DepositS.InsurenceRecommendTextWrapper>
							<DepositS.InsurenceRecommendText type="main">
								정기예금
							</DepositS.InsurenceRecommendText>
							<DepositS.InsurenceRecommendText type="sub">
								아이와 자산을 모으는 즐어움을 느끼고싶은 당신에게
							</DepositS.InsurenceRecommendText>
						</DepositS.InsurenceRecommendTextWrapper>

						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>

					<HomeS.MainRecommendContentWrapper>
						<DepositS.InsurenceRecommendTextWrapper>
							<DepositS.InsurenceRecommendText type="main">
								연금예금
							</DepositS.InsurenceRecommendText>
							<DepositS.InsurenceRecommendText type="sub">
								아이들에게 든든한 버팀목이 되어주고싶은 당신에게
							</DepositS.InsurenceRecommendText>
						</DepositS.InsurenceRecommendTextWrapper>

						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>
				</HomeS.MainRecommendCardWrapper>
			</HomeS.MainCardWrapper>
			<HomeS.MainCardTitleWrapper style={{ marginTop: '20px' }}>
				<HomeS.MainCardTitle ismain="true">적금 상품 추천</HomeS.MainCardTitle>
				<HomeS.MainCardTitle ismain="false">
					여행자금을 모으고 싶은 여행러를 위한 적금 상품
				</HomeS.MainCardTitle>
				<DepositSwiper></DepositSwiper>
			</HomeS.MainCardTitleWrapper>
		</>
	);
}

export default DepositComponent;
