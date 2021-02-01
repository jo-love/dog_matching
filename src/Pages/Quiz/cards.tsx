import { useState } from 'react';
import { useHistory } from 'react-router';
import { ANSWERAPI } from '../../API';
import { QA } from './types';
import { ProgressBarProps } from './types';
import axios from 'axios';
import styled from 'styled-components';

function Cards({ id, question, symbol, selections, number, setNumber }: QA) {
	const [userAnswers, setUserAnswers] = useState({});
	const [left, setLeft] = useState(-100);
	const history = useHistory();

	const checkAnswers = (QId: number, AId: number) => {
		const key = QId;
		const obj = { [`${key}`]: AId };
		setUserAnswers({ ...userAnswers, ...obj });
		if (QId === 10) {
			axios
				.post(ANSWERAPI, userAnswers)
				.then((res) => {
					console.log(res);
					history.push(`/result/${res}`);
				})
				.catch((error) => console.log(error));
		}

		nextQuestion();
	};

	const previousQuestion = () => {
		setNumber(number - 1);
		setLeft(left - 21.5);
	};

	const nextQuestion = () => {
		setNumber(number + 1);
		setLeft(left + 21.5);
	};

	console.log('userA', Object.values(userAnswers)[Object.values(userAnswers).length - 1]);

	// usernames의 첫번째 질문(0번 인덱스)이 있고, = 사용자가 첫번째에 답변했을 경우
	// usernames의 마지막질문이 질문의 id와 같지 않으면
	// 다음으로 가기 버튼을 보여줘라.
	return (
		<AnswerWrapper>
			<header>
				<ProgressBar left={left} src="Images/walkingDog.gif" alt="walkingdog" />
				<img className="dogFood" src="/Images/dog-bowl.png" alt="dogHouse" />
			</header>
			<main>
				<h2>
					{question.split('<br>').map((line, idx) => {
						return (
							<div key={idx}>
								{line}
								<br />
							</div>
						);
					})}
				</h2>
				<img className="icon" src={symbol} />
				<div>
					{number !== 0 && (
						<img onClick={previousQuestion} className="left chevrons" src="/Images/leftchevron.png" alt="leftChevron" />
					)}
					{Object.keys(userAnswers)[0] &&
						Object.keys(userAnswers)[Object.keys(userAnswers).length - 1] !== `${id - 1}` && (
							<img
								onClick={nextQuestion}
								className="right chevrons"
								src="/Images/rightchevron.png"
								alt="rightChevron"
							/>
						)}
				</div>
				{selections.map((answer, idx) => (
					<Buttonstyle onClick={() => checkAnswers(id, answer.id)} key={idx}>
						{answer.option}
					</Buttonstyle>
				))}
			</main>
		</AnswerWrapper>
	);
}

const AnswerWrapper = styled.section`
	${({ theme }) => theme.positions.flexColumnY};
	margin-top: 50px;
	color: ${({ theme }) => theme.colors.textWhite};

	header {
		width: 100%;

		.dogFood {
			width: 25px;
			position: relative;
			left: 45px;
			top: 40px;
		}
	}

	main {
		${({ theme }) => theme.positions.flexColumnY};

		h2 {
			margin-bottom: 10px;
			line-height: 26px;
			font-size: 20px;
		}

		.icon {
			width: 40px;
			margin-bottom: 80px;
		}

		.chevrons {
			width: 25px;
			position: relative;
			bottom: 110px;
			cursor: pointer;
		}
		.left {
			right: 90px;
		}
		.right {
			left: 90px;
		}
	}

	@media ${({ theme }) => theme.size.mobile} {
		margin-top: 15px;

		main {
			padding-top: 40px;

			h2 {
				font-size: 18px;
			}
		}
	}
`;

const ProgressBar = styled.img<ProgressBarProps>`
	position: relative;
	left: ${(props) => props.left}px;
	width: 125px;
`;

// &:active {
// background-color : ${({ theme }) => theme.colors.textWhite};
// 	color: ${({ theme }) => theme.colors.background};
// }

const Buttonstyle = styled.button`
	width: 300px;
	height: 80px;
	margin-bottom: 15px;
	border: 2px solid ${({ theme }) => theme.colors.textLightgrey};
	font-size: 14px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textWhite};
	cursor: pointer;
`;
export default Cards;
