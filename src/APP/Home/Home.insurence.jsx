import React, { useEffect, useState, useRef } from 'react';

import * as HomeS from './Styles/Home.main.styles';
import * as InvestS from './Styles/Home.investment';
import InvestRecommendSwiper from './Home.investment.slide';

function InsurenceComponent() {
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
					<HomeS.MainRecommendContentWrapper></HomeS.MainRecommendContentWrapper>
					<HomeS.MainRecommendContentWrapper></HomeS.MainRecommendContentWrapper>
					<HomeS.MainRecommendContentWrapper></HomeS.MainRecommendContentWrapper>
				</HomeS.MainRecommendCardWrapper>
			</HomeS.MainCardWrapper>
		</>
	);
}

export default InsurenceComponent;
