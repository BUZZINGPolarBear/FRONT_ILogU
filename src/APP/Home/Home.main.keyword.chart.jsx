import React, { useEffect, useState, useRef } from 'react';
import axios, * as others from 'axios';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import * as trendRecoil from './recoil/Home.main.keyword.chart';
import { Line } from 'react-chartjs-2';
import { colors, typography, spacing } from '../../tokens';
import styled from 'styled-components';
import * as trendAPI from './Apis/Home.main.keyword.chart';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	ScriptableContext,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
);

function TrendPredictionGraph() {
	const [rankSelectedKeyword, setRankSelectedKeyword] = useRecoilState(
		trendRecoil.rankSelectedKeyword,
	);
	const [TrendRealData, setTrendRealData] = useState([]);
	const [TrendPredictData, setTrendPredictData] = useState([]);
	const chartRef = useRef(null);
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth() + 1;

	const GraphLabel = styled.div`
		width: 97%;
		height: 5vh;
		display: flex;
		margin-left: 2.1%;
		margin-right: 1%;
	`;
	const RealLabel = styled.div`
		width: 63.5%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	`;
	const PredictLabel = styled.div`
		width: 36.5%;
		height: 100%;
		display: flex;
		justify-content: space-between;
	`;
	const RealLabelText = styled.span`
		width: 20%;
		height: 100%;
		${typography.caption};
		color: ${colors.grey_300};
	`;
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_ONEHANA_API_SERVER}/google/search/${rankSelectedKeyword}`,
				);
				console.log(
					`${process.env.REACT_APP_ONEHANA_API_SERVER}/google/search/${rankSelectedKeyword}`,
				);
				setTrendRealData(response.data.result.actualSearched);
				setTrendPredictData(response.data.result.predictSearched);

				if (response.data.result.actualSearched.length < 10) {
					const trainingResponse = await trendAPI.fiveYearTrendTraining(
						rankSelectedKeyword,
					);
					// Process the trainingResponse if needed
					console.log(trainingResponse);
				}
			} catch (error) {
				// Handle the error appropriately
			}
		};

		fetchData();
	}, [rankSelectedKeyword]);

	let copiedTrendRealData = [];
	let copiedTrendPredictData = [];

	//원본 복사
	for (let i = 0; i < TrendRealData.length; i++)
		copiedTrendRealData.push(TrendRealData[i]);

	for (let i = 0; i < TrendPredictData.length; i++)
		copiedTrendPredictData.push(TrendPredictData[i]);
	//예측 데이터의 길이까지 포함하여 그래프가 보여지도록 null값을 채워줍니다.
	if (copiedTrendPredictData.length <= 0) return; // 예외처리

	let nullArray = Array(copiedTrendPredictData.length - 1).fill(null); // Array filled with null values
	copiedTrendRealData = copiedTrendRealData.concat(nullArray);
	let totalRealDataLength = copiedTrendRealData.length;
	let totalPredictDataLength = copiedTrendPredictData.length;

	let sections = 6;

	let interval = Math.floor(totalRealDataLength / sections);
	let predictInterval = Math.floor(totalPredictDataLength / sections);

	let realLabels = [];
	let predictLabels = [];
	// chart.js의 라벨링을 정의합니다.
	let real_count = 1;
	for (let i = 0; i < TrendRealData.length; i++) {
		realLabels.push('');
	}
	realLabels.push('오늘');

	for (let i = 0; i < TrendPredictData.length; i++) {
		predictLabels.push('');
	}

	// CHART.js
	// 차트가 그려져있는지 확인하고, 그려져있다면 차트의 색상을 변경합니다.
	let gradient1;
	let gradient2;

	if (document.getElementById('chart') != null) {
		const ctx = document.getElementById('chart').getContext('2d');
		gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
		gradient2 = ctx.createLinearGradient(0, 0, 0, 400);

		gradient1.addColorStop(0, 'rgba(254,44,98, 1)');
		gradient1.addColorStop(1, 'rgba(254,44,98, 0)');

		gradient2.addColorStop(0, 'rgba(29,203,157, 1)');
		gradient2.addColorStop(1, 'rgba(29,203,157, 0)');
	}

	let data = () => {
		return {
			labels: realLabels.concat(predictLabels),
			datasets: [
				{
					label: ' Real Value',
					data: copiedTrendRealData,
					borderColor: '#1DCB9D',
					pointRadius: 0,
					bezierCurve: true,
					tension: 0.2,
					fill: 'start',
					backgroundColor: (context) => {
						const ctx = context.chart.ctx;
						const gradient = ctx.createLinearGradient(0, 0, 0, 400);
						gradient.addColorStop(0, 'rgba(29,203,157, 1)');
						gradient.addColorStop(1, 'rgba(255,255,255, 0)');
						return gradient;
					},
				},
				{
					label: 'Predict Value',
					data: Array(
						copiedTrendRealData.length - copiedTrendPredictData.length,
					)
						.fill(null)
						.concat(copiedTrendPredictData),
					borderColor: '#FE2C62',
					pointRadius: 0,
					lineTension: 0.8,
					fill: 'start',
					backgroundColor: (context) => {
						const ctx = context.chart.ctx;
						const gradient = ctx.createLinearGradient(0, 0, 0, 400);
						gradient.addColorStop(0, 'rgba(254,44,98, 1)');
						gradient.addColorStop(1, 'rgba(255,255,255, 0)');
						return gradient;
					},
				},
			],
		};
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				border: {
					dash: [15, 15],
				},
			},
		},
	};

	const outputMonths = [];

	// 5년 전 월부터 현재 월까지의 범위에서 원하는 월을 출력합니다.
	for (let year = currentYear - 5; year <= currentYear; year++) {
		for (let month = 1; month <= 12; month++) {
			if (year === currentYear && month > currentMonth) {
				break; // 현재 년도인 경우, 현재 월을 넘으면 종료합니다.
			}

			if (year === currentYear - 5 && month < currentMonth) {
				continue; // 5년 전인 경우, 현재 월 이전의 월은 건너뜁니다.
			}

			const formattedMonth = month < 10 ? `0${month}` : month.toString(); // 월을 2자리 숫자로 포맷팅합니다.
			const output = `${year}.${formattedMonth}`;
			outputMonths.push(output);
		}
	}

	return (
		<>
			<Line data={data()} options={options} />
			{/* <GraphLabel>
				<RealLabel>
					<RealLabelText>{outputMonths[0]}</RealLabelText>
					<RealLabelText>{outputMonths[12]}</RealLabelText>
					<RealLabelText>{outputMonths[24]}</RealLabelText>
					<RealLabelText>{outputMonths[36]}</RealLabelText>
					<RealLabelText>{outputMonths[48]}</RealLabelText>
				</RealLabel>
				<PredictLabel>
					<RealLabelText>오늘</RealLabelText>
					<RealLabelText>6개월 후</RealLabelText>
					<RealLabelText>1년 후</RealLabelText>
				</PredictLabel>
			</GraphLabel> */}
		</>
	);
}

export default TrendPredictionGraph;
