import { useState } from 'react';
import { useHistory } from 'react-router';
import { QA } from './types';
import { ANSWERAPI } from '../../API';
import axios from 'axios';
import styled from 'styled-components';

function Buttons({ id, question, selections, number, setNumber }: QA) {
	const [isCliked, setIsClicked] = useState(false);
	const [userAnswers, setUserAnswers] = useState({});
	const history = useHistory();

	const previousQuestion = () => {
		setNumber(number - 1);
		setIsClicked(true);
	};

	//수정 필요
	const checkAnswers = (QId: number, AId: number) => {
		console.log('질문', QId);
		console.log('대답', AId);
		const key = QId;
		const obj = { [`${key}`]: AId };
		setUserAnswers({ ...userAnswers, ...obj });
		console.log(userAnswers);
		if (QId === 11) {
			axios.post(ANSWERAPI).then((res) => {
				history.push(`/result/${res}`);
			});
		}
		nextQuestion();
	};

	const nextQuestion = () => {
		setNumber(number + 1);
	};

	return (
		<AnswerWrapper>
			<h2>{question}</h2>
			<img width="40px" src="/Images/home.png" />
			{selections.map((answer, idx) => (
				<button onClick={() => checkAnswers(id, answer.id)} key={idx}>
					{answer.option}
				</button>
			))}
			<div>
				{number !== 0 && (
					<svg
						onClick={previousQuestion}
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="chevron-left"
						className="chevronLeft"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
					>
						<path
							fill="currentColor"
							d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
						></path>
					</svg>
				)}
				{isCliked && (
					<svg
						onClick={nextQuestion}
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="chevron-right"
						className="chevronRight"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 320 512"
					>
						<path
							fill="currentColor"
							d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
						></path>
					</svg>
				)}
			</div>
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
		cursor: pointer;

		&:active {
			background-color: ${({ theme }) => theme.colors.textWhite};
			color: ${({ theme }) => theme.colors.background};
		}
	}

	svg {
		width: 30px;
		position: relative;
		bottom: 200px;
		cursor: pointer;
	}
	.chevronLeft {
		right: 180px;
	}
	.chevronRight {
		left: 180px;
	}
`;

export default Buttons;
