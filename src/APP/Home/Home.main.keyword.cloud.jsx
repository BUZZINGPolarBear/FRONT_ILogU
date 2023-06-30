import React, { useEffect, useState } from 'react';

import axios, * as others from 'axios';
import * as tokens from '../../tokens';
//word cloud
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import ReactWordcloud from 'react-wordcloud';
import 'd3-transition';
import { select } from 'd3-selection';
import * as cloudAPIs from './Apis/Home.main.wordCloud.cloud.apis';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import * as trendRecoil from './recoil/Home.main.keyword.chart';

function KeywordCloud(props) {
	const [wordcloudData, setWordcloudData] = useState([]);
	const [rankSelectedKeyword, setRankSelectedKeyword] = useRecoilState(
		trendRecoil.rankSelectedKeyword,
	);
	let cloudDataArr = [];
	const searchKeyword = props.searchKeyword;

	useEffect(() => {
		const fetchchildKeyword = async () => {
			const response = await cloudAPIs.getChildCloudData(searchKeyword);
			// console.log(response);
			setWordcloudData(response);
		};
		fetchchildKeyword();
	}, []);

	//word cloud call back
	const callbacks = {
		getWordTooltip: (word) =>
			`"${word.text}" - ${word.value}% 연관되어 있습니다.`,
		onWordClick: getCallback('onWordClick'),
		onWordMouseOut: getCallback('onWordMouseOut'),
		onWordMouseOver: getCallback('onWordMouseOver'),
	};

	function getCallback(callback) {
		return function (word, event) {
			const isActive = callback !== 'onWordMouseOut';
			const element = event.target;
			const text = select(element);
			text
				.on('click', () => {
					if (isActive) {
						setRankSelectedKeyword(word.text);
					}
				})
				.attr('text-decoration', isActive ? 'underline' : 'none');
		};
	}

	// 데이터 정규화를 위해 전체 합을 구합니다.
	let totalSum = 0;
	if (wordcloudData != null) {
		for (let i = 0; i < wordcloudData.length; i++)
			totalSum +=
				wordcloudData[i].duplicateCnt * wordcloudData[i].sumKeywordWorth;

		for (let i = 0; i < wordcloudData.length; i++) {
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
	cloudDataArr = cloudDataArr.slice(0, 15);
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
		fontFamily: 'impact',
		fontSizes: [30, 70],
		fontStyle: 'normal',
		fontWeight: 'normal',
		padding: 1,
		rotations: 0,
		// rotate: (words) => (cloudDataArr.value % 2 === 0 ? 0 : -90),
		scale: 'sqrt',
		// spiral: "archimedean",
		transitionDuration: 1000,
	};

	return (
		<ReactWordcloud
			callbacks={callbacks}
			words={cloudDataArr}
			options={options}
		/>
	);
}

export default KeywordCloud;
