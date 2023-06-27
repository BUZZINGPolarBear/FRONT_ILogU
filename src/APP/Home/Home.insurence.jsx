import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as InsurenceS from './Styles/Home.insurence.styles';
import * as InsurenceApi from './Apis/Home.insurence';
import InsurenceRecommendSwiper from './Home.insurence.slide';

function InsurenceComponent() {
	const [hanaInsurenceDiv, setHanaInsurenceDiv] = useState([]);
	const [hanaInsurence, setHanaInsurence] = useState([]);

	useEffect(() => {
		const fetchInsurence = async () => {
			let fetchResponse = await InsurenceApi.getInsurence();
			let localInsurenceDiv = [];
			let localInsurenceInfo = [];
			for (let i = 0; i < fetchResponse.result.length; i++) {
				const localInsurence = fetchResponse.result[i];
				localInsurenceInfo.push(localInsurence);
				if (localInsurence.id == 19) {
					localInsurenceDiv.push(
						<HomeS.MainRecommendContentWrapper>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="car"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceRecommendText>
								{localInsurence.name}
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
								{localInsurence.name}
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
								<InsurenceS.InsurenceImage image="car"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
							<InsurenceS.InsurenceRecommendText>
								{localInsurence.name}
							</InsurenceS.InsurenceRecommendText>
							<InsurenceS.InsurenceRecommendImage>
								<InsurenceS.InsurenceImage image="detailView"></InsurenceS.InsurenceImage>
							</InsurenceS.InsurenceRecommendImage>
						</HomeS.MainRecommendContentWrapper>,
					);
				}
			}
			setHanaInsurenceDiv(localInsurenceDiv);
			setHanaInsurence(localInsurenceInfo);
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
					{hanaInsurenceDiv}
				</HomeS.MainRecommendCardWrapper>

				<HomeS.MainCardTitleWrapper style={{ marginTop: '20px' }}>
					<HomeS.MainCardTitle ismain="true">인기 보험</HomeS.MainCardTitle>
					<HomeS.MainCardTitle ismain="false">
						여행러들이 많이 선택한 보험!
					</HomeS.MainCardTitle>
				</HomeS.MainCardTitleWrapper>
				<InsurenceRecommendSwiper
					insurences={hanaInsurence}
				></InsurenceRecommendSwiper>
			</HomeS.MainCardWrapper>
		</>
	);
}

export default InsurenceComponent;
