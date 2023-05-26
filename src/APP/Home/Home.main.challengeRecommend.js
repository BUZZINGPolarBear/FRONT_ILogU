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
	SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
	return (
		<challengeS.HomeMainChallengeCard>
			<HomeS.HomeMainCardTitle>이런 챌린지가 인기!</HomeS.HomeMainCardTitle>
			<challengeS.HomeMainChallengeSwiperArea>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					{/* ...additional slides */}
				</Swiper>
			</challengeS.HomeMainChallengeSwiperArea>
		</challengeS.HomeMainChallengeCard>
	);
}

export default ChallengRecommendCard;
