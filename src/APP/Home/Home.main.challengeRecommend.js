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
import * as challengeS from "./Styles/Home.main.challengeRecommend.styles";
import * as tokens from "../../tokens";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function ChallengRecommendCard() {
	SwiperCore.use([Scrollbar, A11y]);
	return (
		<challengeS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle>이런 챌린지가 인기!</HomeS.HomeMainCardTitle>
			<challengeS.HomeMainChallengeSwiperArea>
				<challengeS.StyledSwiper
					spaceBetween={150}
					slidesPerView={2}
					// scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
				>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyPicture.svg",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
						></challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard
							style={{
								backgroundImage: "url(/mainScreen/babyPlayWith.svg",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
						>
							sdf
						</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard>sdf</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					<SwiperSlide>
						<challengeS.HomeMainSwiperCard>sdf</challengeS.HomeMainSwiperCard>
					</SwiperSlide>
					{/* ...additional slides */}
				</challengeS.StyledSwiper>
			</challengeS.HomeMainChallengeSwiperArea>
			<incomeS.HomeIncomeDetailViewBtn>
				챌린지 도전하기
			</incomeS.HomeIncomeDetailViewBtn>
		</challengeS.HomeMainChallengeCard>
	);
}

export default ChallengRecommendCard;
