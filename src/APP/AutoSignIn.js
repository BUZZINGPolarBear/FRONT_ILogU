import axios from 'axios';

export const RefreshToken = async () => {
	const RefreshToken = localStorage.getItem('refresh');
	const axiosResponse = await axios.post(
		`${process.env.REACT_APP_ILOGU_API_SERVER}/api/user/token/refresh`,
		{
			headers: {
				Authorization: `Bearer ${RefreshToken}`,
			},
		},
	);

	const newAccessToken = axiosResponse.data.result.accessToken;
	const newRefreshToken = axiosResponse.data.result.refreshToken;

	localStorage.setItem('access', newAccessToken);
	localStorage.setItem('refresh', newRefreshToken);

	return 'success';
};
