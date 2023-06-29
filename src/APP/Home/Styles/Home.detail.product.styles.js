import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const MainPicWrapper = styled.div`
	position: fixed;
	width: 100vw;
	max-width: 800px;
	height: 40vh;

	background-image: url('${(props) => props.img}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	top: 0;
`;

export const MainScreenWrapper = styled.div`
	position: fixed;

	top: 40vh;
	width: 100vw;
	max-width: 800px;
	height: 45vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-around;

	background-color: antiquewhite;
`;
