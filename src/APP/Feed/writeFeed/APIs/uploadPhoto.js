import axios from 'axios';
const FormData = require('form-data');

export const autoGenerateFeed = async (file, category, title) => {
	try {
		const response = await fetch(file);
		const blobData = await response.blob();
		const formData = new FormData();
		formData.append('file', blobData, 'image.jpg');

		const axiosResponse = await axios.post(
			//1. 배포 서버로 테스트시 주석 해제
			`${process.env.REACT_APP_ILOGU_API_SERVER}/api/board/image/explain?prompt=이건 사진에서 추출한 키워드야. 이 키워드를 이용해서 사진을 SNS에 업로드하는 부모님처럼 작성해줘. 200자 이내로 작성해. ${category}를 주제로하고, ${title}의 내용을 중심으로 작성해. 따뜻한 분위기로. 그리고 관련된 해시태그를 1개만 한국어로 써줘.`,
			//2. 로컬 테스트시 주석 해제
			//`${process.env.REACT_APP_ILOGU_LOCAL_API}/api/board/image/explain?prompt=이건 사진에서 추출한 키워드야. 이 키워드를 이용해서 사진을 SNS에 업로드하는 부모처럼 따뜻한 글과 여행과 관련된 해시태그를 1개만 한국어로 써줘.`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);
		return axiosResponse.data;
	} catch (error) {
		console.error(error);
	}
};
