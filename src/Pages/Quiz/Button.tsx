import { useState } from 'react';
import { useHistory } from 'react-router';
import { ANSWERAPI } from '../../API';
import { QAData, UserAnswerData, ProgressBarProps } from './types';
import { useResultContext } from '../../Contexts/ResultContext';
import axios from 'axios';
import styled from 'styled-components';

function Button({ id, question, symbol, selections, number, setNumber }: QAData) {
	const [userAnswers, setUserAnswers] = useState<UserAnswerData>({});
	const [left, setLeft] = useState(-100);
	const { result, setResult }: any = useResultContext();
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const checkAnswer = (QId: number, AId: number) => {
		const key = QId;
		const obj = { [`${key}`]: AId };
		setUserAnswers({ ...userAnswers, ...obj });
		if (QId === 10) {
			setLoading(true);
			axios
				.post(ANSWERAPI, userAnswers)
				.then((res) => {
					setLoading(false);
					setResult(res.data);
					history.push('/result');
				})
				.catch((error) => console.log(error));
		}
		if (QId !== 10) {
			nextQuestion();
		}
	};

	const previousQuestion = () => {
		setNumber(number - 1);
		setLeft(left - 21.5);
	};

	const nextQuestion = () => {
		setNumber(number + 1);
		setLeft(left + 21.5);
	};

	// username의 첫번째 질문(0번 인덱스)이 있고, = 사용자가 첫번째에 답변했을 경우
	// username의 마지막질문이 질문의 id와 같지 않으면
	// 다음으로 가기 버튼을 보여줘라.
	return (
		<AnswerWrapper>
			{loading && (
				<div className="loadingSpinner">
					<img src="/Images/spinningDog.gif" alt="spinningDog" />
					<p>잠시만 기다려주세요 ...</p>
				</div>
			)}
			{!loading && (
				<header>
					<ProgressBar left={left} src="Images/walkingDog.gif" alt="walkingdog" />
					<img className="dogFood" src="/Images/dog-bowl.png" alt="dogHouse" />
				</header>
			)}
			{!loading && (
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
							<img
								onClick={previousQuestion}
								className="left chevrons"
								src="/Images/leftchevron.png"
								alt="leftChevron"
							/>
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
					{/* // 1. 현재 페이지의 번호를 가져온다. userAnswers[number]
				// 2. 그 번호로 userAnswer의 key가 있는지 확인한다.
				// 3. userAnswer에 key가 있으면 value를 가져온다.
				// 4. value와 버튼의 아이디가 동일하면 스타일을 바꾼다. */}

					{selections.map((answer, idx) => (
						<ButtonStyle
							style={{
								backgroundColor:
									userAnswers[`${number + 1}`] && userAnswers[`${number + 1}`] == answer.id ? 'white' : '',
								color: userAnswers[`${number + 1}`] && userAnswers[`${number + 1}`] == answer.id ? '#FFC6C9' : '',
							}}
							onClick={() => checkAnswer(id, answer.id)}
							key={idx}
						>
							{answer.option}
						</ButtonStyle>
					))}
				</main>
			)}
		</AnswerWrapper>
	);
}

export default Button;

const AnswerWrapper = styled.section`
	${({ theme }) => theme.positions.flexColumnY};
	margin-top: 50px;
	color: ${({ theme }) => theme.colors.textWhite};

	.loadingSpinner {
		margin-top: 100px;
		img {
			width: 230px;
		}
		p {
			font-size: 18px;
			font-weight: bold;
		}
	}
	header {
		width: 100%;
		padding-bottom: 50px;

		.dogFood {
			width: 25px;
			position: relative;
			left: 45px;
			top: 40px;
		}
	}

	main {
		${({ theme }) => theme.positions.flexColumnY};
		animation: slide 0.5s forwards;

		@keyframes slide {
			0% {
				opacity: 0;
				transform: translateX(80px);
			}
			100% {
				opacity: 1;
				transform: translateX(0);
			}
		}

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

const ButtonStyle = styled.button`
	width: 300px;
	height: 80px;
	margin-bottom: 15px;
	border: 2px solid ${({ theme }) => theme.colors.textWhite};
	font-size: 14px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textWhite};
	cursor: pointer;

	&:active {
		background-color: ${({ theme }) => theme.colors.textWhite};
		color: ${({ theme }) => theme.colors.background};
	}
`;
