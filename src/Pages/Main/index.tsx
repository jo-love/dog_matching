import styled from 'styled-components';
import DogImg from './dogImg';
import { useHistory } from 'react-router';

function Main() {
	const history = useHistory();

	const goToQuiz = () => {
		history.push('/quiz');
	};
	return (
		<MainWapper>
			<header className="title">SHOW ME MY DOG</header>
			<div className="description">
				<div>
					당신과 맞는 <br /> <b>댕댕이</b>를 찾아드려요.
				</div>
				<div>나와 궁합이 잘 맞는 강아지는?</div>
			</div>
			<DogImg />
			<button onClick={goToQuiz} className="startBtn">
				<span>만</span>
				<span>나</span>
				<span>러</span>
				<span>가</span>
				<span>기</span>
			</button>
		</MainWapper>
	);
}

const MainWapper = styled.div`
	${({ theme }) => theme.positions.flexColumnY};
	color: ${({ theme }) => theme.colors.textWhite};

	div,
	button {
		opacity: 0;
		animation: fadeIn ease-in 1;
		animation-fill-mode: forwards;
		animation-duration: 1s;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.title {
		margin: 50px 0;
		font-size: 1rem;
		font-weight: bold;
	}

	.description {
		margin-top: 30px;
		line-height: 1.3;
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		animation-delay: 0.7s;
		div:nth-child(2) {
			padding: 20px 0;
			font-size: 14px;
			animation-delay: 1.2s;
		}
		b {
			color: ${({ theme }) => theme.colors.button};
		}
	}

	.startBtn {
		width: 20%;
		height: 50px;
		margin-top: 50px;
		background-color: ${({ theme }) => theme.colors.button};
		color: ${({ theme }) => theme.colors.textLightgrey};
		border-radius: 5px;
		font-size: 20px;
		letter-spacing: 5px;
		cursor: pointer;
		animation-delay: 1.6s;

		span {
			font-weight: bold;
			opacity: 0.7;
		}

		span:nth-child(3) {
			padding-right: 8px;
		}

		&: hover {
			span {
				display: inline-block;
				animation: startBtn 1.3s infinite alternate;
			}
			span:nth-child(2) {
				animation-delay: 0.1s;
			}
			span:nth-child(3) {
				animation-delay: 0.2s;
			}
			span:nth-child(4) {
				animation-delay: 0.3s;
			}
			span:nth-child(5) {
				animation-delay: 0.4s;
			}
			span:nth-child(6) {
				animation-delay: 0.5s;
			}
			span:nth-child(7) {
				animation-delay: 0.6s;
			}
			@keyframes startBtn {
				0% {
					opacity: 1;
				}
				100% {
					opacity: 0;
				}
			}
		}
	}
`;

export default Main;
