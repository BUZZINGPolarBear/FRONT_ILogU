import styled from 'styled-components';
import * as tokens from '../../../../tokens';

export const TopImageWrapper = styled.div`
	width: 100%;
	height: 52px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-image: url('/SignIn/upload_check.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
`;

export const MainTitleWrapper = styled.div`
	width: 100%;
	height: 23%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const MainTitle = styled.div`
	${(props) =>
		props.type == 'sub'
			? `${tokens.typography.caption}; color: ${tokens.colors.grey_300}`
			: `${tokens.typography.headline_5}; color: ${tokens.colors.green_600}; font-weight: 700; font-size: 24px;`};
`;

export const BtnWrapper = styled.div`
	width: 100%;
	height: 35%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const ModalBtn = styled.button`
	width: 100%;
	height: 45%;

	border: 1px solid ${tokens.colors.green_600};
	border-radius: 15px;

	${tokens.typography.button};
	${(props) =>
		props.isFirst == 'true'
			? `color: ${tokens.colors.green_600}; background-color: #ffffff`
			: `color: #ffffff; background-color: ${tokens.colors.green_600}`};
`;
