import axios from 'axios';

export const fiveYearTrendTraining = async (keyword) => {
	console.log(`API fiveYearTrendTraining Called`);
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_DJANGO_LOCAL}/keyword/predict?keyword=${keyword}`,
		);
		return response;
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};
