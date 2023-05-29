import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import axios, * as others from "axios";
import * as tokens from "../../tokens";
import * as cloudAPIs from "./Apis/Home.main.wordCloud.cloud.apis";

function KeywordCloud({ searchKeyword }) {
	const [wordcloudData, setWordcloudData] = useState([]);
	let cloudDataArr = [];

	useEffect(() => {
		console.log(`KeywordCloud: ${searchKeyword}`);
		const fetchchildKeyword = async () => {
			const response = await cloudAPIs.getChildCloudData(searchKeyword);
			console.log(response);
			setWordcloudData(response);
		};
		fetchchildKeyword();
	}, []);

	// 데이터 정규화를 위해 전체 합을 구합니다.
	let totalSum = 0;
	if (wordcloudData != null) {
		for (let i = 0; i < 15; i++)
			totalSum +=
				wordcloudData[i].duplicateCnt * wordcloudData[i].sumKeywordWorth;

		for (let i = 0; i < 15; i++) {
			cloudDataArr.push({
				text: wordcloudData[i].childKeyword,
				value: (
					((wordcloudData[i].duplicateCnt * wordcloudData[i].sumKeywordWorth) /
						totalSum) *
					1000
				).toFixed(2),
			});
		}
	}

	const options = {
		colors: [
			`${tokens.colors.green_800}`,
			`${tokens.colors.green_700}`,
			`${tokens.colors.green_600}`,
			`${tokens.colors.green_300}`,
			`#00A498`,
			`#33C3B9`,
		],
		deterministic: false,
		fontFamily: "impact",
		fontSizes: [10, 55],
		fontStyle: "normal",
		fontWeight: "normal",
		padding: 1,
		rotations: 0,
		// rotate: (words) => (cloudDataArr.value % 2 === 0 ? 0 : -90),
		scale: "sqrt",
		// spiral: "archimedean",
		transitionDuration: 1000,
	};

	return <ReactWordcloud words={cloudDataArr} options={options} />;
}

export default KeywordCloud;
