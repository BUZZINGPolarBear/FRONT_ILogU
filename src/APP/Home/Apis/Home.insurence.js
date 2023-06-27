import axios from 'axios';

export const getInsurence = async () => {
	let boardResponseList = [];
	const token = localStorage.getItem('access');
	try {
		try {
			const axiosResponse = await axios.get(
				`${process.env.REACT_APP_ILOGU_API_SERVER}/api/products/type/INSURANCE`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			return axiosResponse.data;
		} catch (error) {
			return error.response.data.code;
		}
	} catch (error) {
		console.log(`Error is : ${error.response.data.code}`);
		console.error(error);
		return error.response.data.code;
	}
};
