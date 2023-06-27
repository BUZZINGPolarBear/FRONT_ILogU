import axios from 'axios';

const getChildCloudData = async (keyword) => {
	console.log(`API getChildCloudData Called`);
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_ONEHANA_API_SERVER}/related-keyword/child?keyword=${keyword}`,
			console.log(
				`request uri : ${process.env.REACT_APP_ONEHANA_API_SERVER}/related-keyword/child?keyword=${keyword}`,
			),
		);
		console.log(response);

		return response.data.result;
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

export { getChildCloudData };
