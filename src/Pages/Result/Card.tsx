import styled from 'styled-components';
import { ResultData } from '../../Contexts/ResultContext';

function Card({ img, name, averageSize, play, description }: ResultData) {
	return (
		<CardWrapper>
			<div className="imgBox">
				<img src={img} alt="matching_dog" />
			</div>
			<div className="content">
				<p>{name}</p>
				<div className="wrapper">
					<span className="title">평균 몸무게</span>
					<span>{averageSize}</span>
				</div>
				<div className="wrapper">
					<span className="title">운동량</span>
					<span>{play}</span>
				</div>
				<div className="wrapper description">
					<span>{description}</span>
				</div>
			</div>
		</CardWrapper>
	);
}

export default Card;

const CardWrapper = styled.section`
	display: flex;
	width: 430px;
	height: 200px;
	margin-bottom: 30px;
	border-radius: 32px;
	background-color: ${({ theme }) => theme.colors.textGrayishyellow};
	box-shadow: 3px 3px 8px #e6e6e6;

	.imgBox {
		width: 40%;
		border-radius: 25px;
		background: linear-gradient(to right, #f3c392, #f3d9b9);

		img {
			width: 120px;
			position: relative;
			bottom: 45px;
			left: 30px;
		}
	}

	.content {
		width: 60%;
		text-align: center;
		font-family: 'Nanum Gothic';
		color: #615333;
		font-weight: bold;

		p {
			margin-top: 20px;
			font-size: 16px;
		}

		.wrapper {
			display: flex;
			justify-content: space-around;
			width: 90%;

			.title {
				font-weight: bold;
				color: ${({ theme }) => theme.colors.textLightgrey};
			}
		}

		.description {
			height: 80px;
			overflow: auto;
		}

		span {
			padding: 5px 10px;
			line-height: 20px;
			font-size: 14px;
		}
	}

	@media ${({ theme }) => theme.size.mobile} {
		width: 350px;
		height: 160px;

		.imgBox {
			img {
				width: 100px;
				bottom: 40px;
				left: 20px;
			}
		}

		.content {
			p {
				font-size: 14px;
			}

			.description {
				height: 50px;
			}

			span {
				padding: 5px;
				font-size: 12px;
				line-height: 16px;
			}
		}
	}
`;
