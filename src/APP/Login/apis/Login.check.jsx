import { useQuery } from 'react-query';

export async function checkAccessToken() {
	const response = await fetch(
		'http://i-log-u-server-env.eba-kmghbsv8.ap-northeast-2.elasticbeanstalk.com/api/user/token/pages',
	);
	const data = await response.json();
	return data;
}
