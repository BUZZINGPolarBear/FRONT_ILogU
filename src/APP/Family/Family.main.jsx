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
				<FamilyS.RankWrapper></FamilyS.RankWrapper>
			</FamilyS.MainWrapper>
		</>
	);
}

export default FamilyMainScreen;
