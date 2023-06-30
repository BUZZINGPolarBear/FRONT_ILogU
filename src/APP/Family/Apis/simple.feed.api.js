import axios from 'axios';

export const getSimpleFeed = async (page) => {
	const token = localStorage.getItem('access');
	try {
		try {
			const axiosResponse = await axios.get(
				`${process.env.REACT_APP_ILOGU_API_SERVER}/api/family/board?page=0&size=${page}&sort=createdAt,desc`,
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
