import styled from 'styled-components';

function Contributors() {
	const yjGit = () => {
		window.open('https://github.com/jo-love');
	};
	const wcGit = () => {
		window.open('https://github.com/one-iron');
	};

	return (
		<ContributorsWrapper>
			<section>
				<header>Contributors</header>
				<p>
					안녕하세요. <b>show me my dog</b>는 자신에게 맞는 강아지를 추천해주는 사이트로, Front End <b>조연정</b>, Back
					End
					<b>이원철</b>로 이루어져 만든 토이 프로젝트 입니다.
					<br />
					<br /> 어떤 사이트를 만들까 고민하다가 둘다 <b>강아지</b>를 무척 좋아하고, 강아지를 키우고 있다는 공통점을
					발견했습니다.
					<br />
					<br /> 요즘 <b>애완견</b>을 키우고 있는 사람들이 많아지고 있는데요. 그중에는 깊은 고민을 하지 않고 강아지를
					데리고 와서 힘들어하고, 심지어는 버리는 모습을 보고 너무 안타까웠습니다.
					<br />
					<br />
					그래서 간단한 <b>문제</b>를 풀면서 자신에게 어떤 강아지가 가장 잘 맞는지, 질문들을 통해 자신이 강아지를
					키워도 되는지에 대해서 다시 한번 고민하는 계기가 되었으면 하는 마음에 만들게 되었습니다.
					<br />
					<br />
					더불어, 많은 사람들이 강아지를 데려올 때 펫샵 구매보다는 <b>입양</b>을 생각하시면 좋겠습니다. :)
				</p>
				<div className="imgBox">
					<div className="info">
						<img src="/Images/몽이닷.jpeg" alt="mong" />
						<ul>
							<li>조연정</li>
							<li onClick={yjGit}>GitHub</li>
							<li>jolove.dev@gmail.com</li>
						</ul>
					</div>
					<div className="info">
						<img src="/Images/쿠마얏.jpeg" alt="kuma" />
						<ul>
							<li>이원철</li>
							<li onClick={wcGit}>GitHub</li>
							<li>lee.oneiron@gmail.com</li>
						</ul>
					</div>
				</div>
			</section>
		</ContributorsWrapper>
	);
}

export default Contributors;

const ContributorsWrapper = styled.div`
	${({ theme }) => theme.positions.flexColumnY};

	section {
		width: 350px;
		margin: 50px;
		background-color: ${({ theme }) => theme.colors.textGrayishyellow};
		border-radius: 10px;

		header {
			width: 80%;
			margin: 0 auto;
			padding: 10px;
			font-size: 18px;
			text-align: center;
			border-bottom: 1px solid ${({ theme }) => theme.colors.textLightgrey};
		}

		P {
			width: 80%;
			margin: 10px auto;
			line-height: 25px;

			b {
				color: ${({ theme }) => theme.colors.button};
			}
		}

		.imgBox {
			margin: 0 auto;
			width: 80%;

			.info {
				${({ theme }) => theme.positions.flexCenterY};
				margin: 10px 0;
			}

			img {
				width: 100px;
				border: 3px solid ${({ theme }) => theme.colors.textLightgrey};
				border-radius: 30px;
			}

			li {
				margin: 10px 5px;

				:nth-child(2) {
					cursor: pointer;
				}
			}
		}
	}
`;
