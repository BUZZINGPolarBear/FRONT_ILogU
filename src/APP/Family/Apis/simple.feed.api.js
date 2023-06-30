import axios from 'axios';

export const getSimpleFeed = async (page) => {
	const token = localStorage.getItem('access');

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
};

export const getFeed = async (page) => {
	let boardResponseList = [];
	const token = localStorage.getItem('access');

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
};

export const postLike = async (boardId) => {
	const token = localStorage.getItem('access');
	try {
		console.log(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/like/${boardId}`,
		);
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

		return axiosResponse.data;
	} catch (error) {
		return error.response.data.code;
	}
};
