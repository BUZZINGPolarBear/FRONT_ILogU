import styled from "styled-components";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";
import * as HomeS from "./Styles/Home.main.styles";
import * as incomeS from "./Styles/Home.main.incomeCard.styles";
import * as tokens from "../../tokens";

function IncomeCard() {
	return (
		<incomeS.HomeMainIncomeCard
			style={{ paddingTop: "10%", paddingBottom: "1%" }}
		>
			<incomeS.HomeIncomeInfoText>
				<incomeS.HomeIncomeInnerWrapper>
					<incomeS.HomeIncomeInfoTextTitle>
						총 매입금액
					</incomeS.HomeIncomeInfoTextTitle>
					<incomeS.HomeIncomeInfoTextContent>
						<span>
							<incomeS.HomeIncomeInfoHeavyText>
								2,496,800
							</incomeS.HomeIncomeInfoHeavyText>
							원
						</span>
					</incomeS.HomeIncomeInfoTextContent>
				</incomeS.HomeIncomeInnerWrapper>
				<incomeS.HomeIncomeInnerWrapper>
					<incomeS.HomeIncomeInfoTextTitle>
						현 수익률
					</incomeS.HomeIncomeInfoTextTitle>
					<incomeS.HomeIncomeInfoTextContent>
						<span>
							<incomeS.HomeIncomeInfoHeavyText
								style={{ color: tokens.colors.red_500 }}
							>
								+7.5%
							</incomeS.HomeIncomeInfoHeavyText>
						</span>
					</incomeS.HomeIncomeInfoTextContent>
				</incomeS.HomeIncomeInnerWrapper>
			</incomeS.HomeIncomeInfoText>

			<incomeS.HomeIncomeInfoText>
				<incomeS.HomeIncomeInnerWrapper>
					<incomeS.HomeIncomeInfoTextTitle>
						현재 투자 가능 금액
					</incomeS.HomeIncomeInfoTextTitle>
					<incomeS.HomeIncomeInfoTextContent>
						<span>
							<incomeS.HomeIncomeInfoHeavyText>
								3,000,000
							</incomeS.HomeIncomeInfoHeavyText>
							원
						</span>
					</incomeS.HomeIncomeInfoTextContent>
				</incomeS.HomeIncomeInnerWrapper>
				<incomeS.HomeIncomeInnerWrapper>
					<incomeS.HomeIncomeInfoTextTitle>
						총 평가금액
					</incomeS.HomeIncomeInfoTextTitle>
					<incomeS.HomeIncomeInfoTextContent>
						<span>
							<incomeS.HomeIncomeInfoHeavyText>
								2,506,000
							</incomeS.HomeIncomeInfoHeavyText>
							원
						</span>
					</incomeS.HomeIncomeInfoTextContent>
				</incomeS.HomeIncomeInnerWrapper>
			</incomeS.HomeIncomeInfoText>
			<incomeS.HomeIncomeInfoText style={{ width: "90%" }}>
				<incomeS.HomeIncomeDetailViewBtn>
					수익률 현황 자세히 보러가기
				</incomeS.HomeIncomeDetailViewBtn>
			</incomeS.HomeIncomeInfoText>
		</incomeS.HomeMainIncomeCard>
	);
}

export default IncomeCard;
