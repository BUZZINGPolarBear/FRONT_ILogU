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
	return <incomeS.HomeMainIncomeCard></incomeS.HomeMainIncomeCard>;
}

export default IncomeCard;
