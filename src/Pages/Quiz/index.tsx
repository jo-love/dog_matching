import { useState, useEffect } from 'react';
import { QUESTIONAPI } from '../../API';
import { QA } from './types';
import axios from 'axios';
import Buttons from './buttons';
import styled from 'styled-components';

function Quiz() {
	const [questions, setQuestions] = useState<QA[]>([]);
	const [number, setNumber] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get(QUESTIONAPI)
			.then((res) => {
				setQuestions(res.data.questions);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	// const handleProgress = () => {
	// 	 etWidth(width + 10);
	// };

	return (
		<QuizWapper>
			<div className="barConatainer">
				<div className="progressBar"></div>
				<img width="100px" src="https://media.giphy.com/media/KAdqfMqoM5turRW9xs/giphy.gif" alt="runingDog" />
				<img width="100px" src="https://media.giphy.com/media/h2eyC37s9PrWNua8Ir/giphy.gif" alt="" />
				<img width="100px" src="https://media.giphy.com/media/kC2dlk5aBm98Slcw0D/giphy.gif" alt="" />
			</div>
			{questions[number] && (
				<Buttons
					number={number}
					setNumber={setNumber}
					id={questions[number].id}
					question={questions[number].question}
					selections={questions[number].selections}
				/>
			)}
		</QuizWapper>
	);
}

const QuizWapper = styled.div`
	margin-top: 50px;
	text-align: center;
	color: ${({ theme }) => theme.colors.textWhite};

	.barContainer {
		width:100%
		background-color: red;
		div {
			width: 0;
			height: 20px;
			transition: width 0.3s;
			background: red;
		}
	}
`;

export default Quiz;
