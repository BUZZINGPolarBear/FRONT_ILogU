import styled from 'styled-components';
import * as tokens from '../../../tokens';

export const SpeechBubbleWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 1.5vh;
	min-height: 50px;
	max-height: 60px;

	padding: 0 7%;
	display: flex;
	algin-items: center;
	${(props) => `top: ${props.top}vh;`}
	${(props) =>
		props.type == 'iloguSpeaking'
			? `justify-content: flex-start;`
			: `justify-content: flex-end;`}
`;

export const SpeechBubble = styled.div`
	position: relative;
	width: fit-content;
	padding: 0 20px;
	height: 90%;
	${tokens.typography.body_1}
	box-shadow: 3px 5px 3px 1px rgba(0, 0, 0, 0.07);
	display: flex;
	align-items: center;

	${(props) =>
		props.type == 'iloguSpeaking'
			? `color: ${tokens.colors.grey_800}; 
            justify-content: flex-start;
            background-color: white; 
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;`
			: `color: white; 
            justify-content: flex-end;
            background-color: ${tokens.colors.green_500}; 
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;`}
`;
