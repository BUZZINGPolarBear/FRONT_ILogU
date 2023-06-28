import React, { useEffect, useState, useRef } from 'react';

import * as FamilyS from './Styles/Family.main.styles';
function FamilyMainScreen() {
	return (
		<>
			<FamilyS.TopNavBar>
				<FamilyS.TopNavIcon icon="baby" />
				<FamilyS.TopNavIcon icon="money" />
			</FamilyS.TopNavBar>
			<FamilyS.MainWrapper>
				<FamilyS.RankWrapper>
					<FamilyS.MainWrapperTitle>우리 가족 용돈 왕</FamilyS.MainWrapperTitle>
					<FamilyS.MainRankWrapper>
						<FamilyS.RankArea>
							<FamilyS.RankNum>1.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								할아버지
							</FamilyS.RankTitle>
							<FamilyS.RankContent>200,000</FamilyS.RankContent>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum>2.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="/Feed/userPic.jpg"></FamilyS.RankProfilePic>
								삼촌
							</FamilyS.RankTitle>
							<FamilyS.RankContent>160,000</FamilyS.RankContent>
						</FamilyS.RankArea>
						<FamilyS.RankArea>
							<FamilyS.RankNum url="null">3.</FamilyS.RankNum>
							<FamilyS.RankTitle>
								<FamilyS.RankProfilePic url="null"></FamilyS.RankProfilePic>
								이모
							</FamilyS.RankTitle>
							<FamilyS.RankContent>100,000</FamilyS.RankContent>
						</FamilyS.RankArea>
					</FamilyS.MainRankWrapper>
				</FamilyS.RankWrapper>
			</FamilyS.MainWrapper>
		</>
	);
}

export default FamilyMainScreen;
