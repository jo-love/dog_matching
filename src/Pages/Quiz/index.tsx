import { useState, useEffect } from 'react';
import { QUESTIONAPI } from '../../API';
import { QAData } from './types';
import axios from 'axios';
import Button from './Button';
import styled from 'styled-components';

function Quiz() {
	const [questions, setQuestions] = useState<QAData[]>([]);
	const [number, setNumber] = useState(0);

	useEffect(() => {
		axios
			.get(QUESTIONAPI)
			.then((res) => {
				setQuestions(res.data.questions);
			})
			.catch((error) => console.error(error));
	}, []);

	return (
		<QuizWapper>
			{questions[number] && (
				<Button
					number={number}
					setNumber={setNumber}
					id={questions[number].id}
					question={questions[number].question}
					symbol={questions[number].symbol}
					selections={questions[number].selections}
				/>
			)}
		</QuizWapper>
	);
}

const QuizWapper = styled.div`
	text-align: center;
	color: ${({ theme }) => theme.colors.textWhite};
`;

export default Quiz;
