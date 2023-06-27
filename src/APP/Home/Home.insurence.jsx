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
			let localInsurenceDiv = [];
			for (let i = 0; i < fetchResponse.result.length; i++) {
				const localInsurence = fetchResponse.result[i];
				if (localInsurence.id == 19) {
					localInsurenceDiv.push(
						<HomeS.MainRecommendContentWrapper>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="car"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceRecommendText>
								엔젤꿈나무사랑보험
							</InsurenceS.InsurenceRecommendText>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
						</HomeS.MainRecommendContentWrapper>,
					);
				}
				if (localInsurence.id == 20) {
					localInsurenceDiv.push(
						<HomeS.MainRecommendContentWrapper>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="travel"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceRecommendText>
								e우리아이보장보험
							</InsurenceS.InsurenceRecommendText>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
						</HomeS.MainRecommendContentWrapper>,
					);
				}
				if (localInsurence.id == 21) {
					localInsurenceDiv.push(
						<HomeS.MainRecommendContentWrapper>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="travel"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceRecommendText>
								NH운전자상해보험
							</InsurenceS.InsurenceRecommendText>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
						</HomeS.MainRecommendContentWrapper>,
					);
				}
			}
			setHanaInsurence(localInsurenceDiv);
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
					{hanaInsurence}
				</HomeS.MainRecommendCardWrapper>
			</HomeS.MainCardWrapper>
		</>
	);
}

export default InsurenceComponent;
