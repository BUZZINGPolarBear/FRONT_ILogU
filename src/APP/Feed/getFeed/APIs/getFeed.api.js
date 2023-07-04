import axios from 'axios';

export const getFeed = async (category, page) => {
	let boardResponseList = [];
	const token = localStorage.getItem('access');
	try {
		if (category === 'ALL') {
			try {
				const axiosResponse = await axios.get(
					`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board?page=0&size=${page}&sort=createdAt,desc`,
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
		} else {
			try {
				const axiosResponse = await axios.get(
					`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/category/${category}?page=0&size=${page}&sort=createdAt,desc`,
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
		}
	} catch (error) {
		console.log(`Error is : ${error.response.data.code}`);
		console.error(error);
		return error.response.data.code;
	}
};

export const postLike = async (boardId) => {
	const token = localStorage.getItem('access');
	try {
		const axiosResponse = await axios.put(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/like/${boardId}`,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		console.log(axiosResponse);
		return axiosResponse.data;
	} catch (error) {
		return error.response.data.code;
	}
};
