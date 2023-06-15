import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const SpeechBubbleWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 1.5vh;
	min-height: 70px;

	display: flex;
	algin-items: center;
	${(props) => `top: ${props.top}vh;`}
	${(props) =>
		props.type == 'iloguSpeaking'
			? `justify-content: flex-start;`
			: `justify-content: flex-end;`}

	background-color: antiquewhite;
`;
