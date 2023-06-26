import axios from 'axios';

export const getFeed = async (category, page) => {
	let boardResponseList = [];
	const token = localStorage.getItem('access');
	try {
		if (category === 'ALL') {
			const axiosResponse = await axios.get(
				`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board?page=0&size=${page}&sort=createdAt,desc`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			return axiosResponse.data;
		} else {
			console.log(
				`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/${category}?page=0&size=${page}&sort=createdAt,desc`,
			);
			const axiosResponse = await axios.get(
				`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/category/${category}?page=0&size=${page}&sort=createdAt,desc`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);

			return axiosResponse.data;
		}
	} catch (error) {
		console.log(`Error is : ${error.response.data.code}`);
		console.error(error);
		return error.response.data.code;
	}
};
