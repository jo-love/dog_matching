import { QA } from './types';
import styled from 'styled-components';

function Buttons({ question, selections, id }: QA) {
	return (
		<AnswerWrapper>
			<h2>{question}</h2>
			<img width="40px" src="/Images/home.png" />
			{selections.map((answer, idx) => (
				<button key={idx}>{answer.option}</button>
			))}
		</AnswerWrapper>
	);
}

const AnswerWrapper = styled.div`
	 ${({ theme }) => theme.positions.flexColumnY};
		color: ${({ theme }) => theme.colors.textWhite}
		margin-top: 50px;

	h2 {
        margin: 50px 0 20px 0;
        font-size: 20px;
	}

	button {
		width: 300px;
		height: 80px;
		margin-bottom: 30px;
        border: 2px solid ${({ theme }) => theme.colors.textLightgrey};
        color: ${({ theme }) => theme.colors.textWhite};
        font-size: 14px;
        font-weight: 600;
	}
`;

export default Buttons;
