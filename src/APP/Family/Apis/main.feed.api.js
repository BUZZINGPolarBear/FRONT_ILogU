import axios from 'axios';

export const getFamilyRank = async () => {
	const token = localStorage.getItem('access');

	try {
		const axiosResponse = await axios.get(
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/family?page=0&size=1&sort=createdAt,desc`,
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
