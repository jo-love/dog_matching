import { ResultData, useResultContext } from '../../Contexts/ResultContext';
import { useHistory } from 'react-router';
import Card from './Card';
import styled from 'styled-components';

function Result() {
	const { result } = useResultContext();
	const history = useHistory();

	const goToSite = () => {
		window.open('https://www.zooseyo.or.kr/Yu_board/freesale_ty_1.html?ty=1');
	};

	const restart = () => {
		history.push('/');
	};

	const contributors = () => {
		history.push('/contributors');
	};

	return (
		<ResultWrapper>
			<strong>당신에게 추천하는 강아지는</strong>
			{result.map((dog: ResultData, idx: number) => {
				return (
					<Card
						key={idx}
						id={idx + 1}
						img={dog.img}
						name={dog.name}
						averageSize={dog.averageSize}
						play={dog.play}
						description={dog.description}
					/>
				);
			})}
			<button onClick={restart}>다시하러 가기</button>
			<button onClick={goToSite}>유기견 무료 분양 보러가기</button>
			<button onClick={contributors}>만든 사람들</button>
		</ResultWrapper>
	);
}

export default Result;

const ResultWrapper = styled.div`
	${({ theme }) => theme.positions.flexColumnY};
	strong {
		margin: 50px 0;
		font-size: 20px;
		color: ${({ theme }) => theme.colors.textWhite};
	}

	button {
		width: 250px;
		height: 50px;
		margin-bottom: 10px;
		letter-spacing: 3px;
		background-color: ${({ theme }) => theme.colors.button};
		color: ${({ theme }) => theme.colors.textWhite};
		border-radius: 7px;
		font-size: 1rem;
		cursor: pointer;
		box-shadow: rgb(0 0 0) 0px 5px 5px -5px;
	}

	@media ${({ theme }) => theme.size.mobile} {
		strong {
			margin: 15px 0 50px 0;
			font-size: 18px;
		}
	}
`;
