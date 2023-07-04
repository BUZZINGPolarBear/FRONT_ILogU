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

export const getBabyAllMoney = async () => {
	const token = localStorage.getItem('access');

	try {
		const axiosResponse = await axios.get(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/family/child/balance`,
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

export const postComment = async (boardId, comment) => {
	const token = localStorage.getItem('access');
	try {
		const axiosResponse = await axios.post(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/${boardId}/comment`,
			{
				parentComment: null,
				comment: comment,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return axiosResponse;
	} catch (error) {
		return error.response.data.code;
	}
};

export const getComment = async (boardId) => {
	const token = localStorage.getItem('access');
	try {
		const axiosResponse = await axios.post(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/${boardId}/comments`,
			{
				page: 0,
				size: 20,
				sort: ['createdAt,desc'],
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return axiosResponse;
	} catch (error) {
		return error.response.data.code;
	}
};
