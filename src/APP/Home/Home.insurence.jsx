import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as InsurenceS from './Styles/Home.insurence.styles';
import * as InsurenceApi from './Apis/Home.insurence';
import InvestRecommendSwiper from './Home.investment.slide';

function InsurenceComponent() {
	const [hanaInsurence, setHanaInsurence] = useState([]);

	useEffect(() => {
		const fetchInsurence = async () => {
			let fetchResponse = await InsurenceApi.getInsurence();
			console.log(fetchResponse.result);
		};

		fetchInsurence();
	}, []);

	return (
		<>
			<HomeS.MainCardWrapper>
				<HomeS.MainCardTitleWrapper>
					<HomeS.MainCardTitle ismain="true">맞춤보험 추천</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						프로여행러에게 딱 맞는 보험을 추천해드려요!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<HomeS.MainRecommendCardWrapper>
					<HomeS.MainRecommendContentWrapper>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="car"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
						<InsurenceS.InsurenceRecommendText>
							참좋은 운전자 보험
						</InsurenceS.InsurenceRecommendText>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>
					<HomeS.MainRecommendContentWrapper>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="travel"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
						<InsurenceS.InsurenceRecommendText>
							여행자 보험
						</InsurenceS.InsurenceRecommendText>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>
					<HomeS.MainRecommendContentWrapper>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="car"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
						<InsurenceS.InsurenceRecommendText>
							원데이 운전자 보험
						</InsurenceS.InsurenceRecommendText>
						<InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
						</InsurenceS.InsurenceRecommendImage>
					</HomeS.MainRecommendContentWrapper>
				</HomeS.MainRecommendCardWrapper>
			</HomeS.MainCardWrapper>
		</>
	);
}

export default InsurenceComponent;
