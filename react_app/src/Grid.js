import React, { Component } from 'react';
import Shot from './Shot';
import styled, { css } from 'styled-components';
import ToggleSwitch from './Toggle';

const BaseGrid = styled.div`
	display: grid;
	${props => {
		// console.log(props);
		switch (props.type) {
			case 0:
				return css`
					grid-template-columns: 100%;
				`;
			case 1:
				return css`
					grid-template-columns: 50% 50%;
				`;
			case 2:
				return css`
					grid-template-columns: 33.333% 33.333% 33.333%;
				`;
			default:
				return css`
					grid-template-columns: 25% 25% 25% 25%;
				`;
				break;
		}
	}};
`;

const MadeWithLove = styled.div`
	position: fixed;
	bottom: 0px;
	right: 0px;
	color: white;
	padding: 6px;

	font-family: 'Raleway', sans-serif;
	font-size: 14px;

	background-color: #26283f55;
`;

const Link = styled.a`
	text-decoration: none;
	color: white;
`;
// 1, 2, 3, 4
// 100% 50% 33.333% 25%
const ratio = 400 / 300; // 1.333

class Grid extends Component {
	state = {
		width: window.innerWidth,
		height: window.innerHeight,
		h: '240px',
		artistMode: localStorage.getItem('artisticmode') === 'true'
	};

	handleWindowSizeChange = () => {
		const h = window.innerWidth / 4 / ratio;
		// console.log(h.toString() + 'px');

		this.setState(prevState => {
			return {
				...prevState,
				width: window.innerWidth,
				height: window.innerHeight,
				h: h.toString() + 'px'
			};
		});
	};

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	render() {
		return (
			<div>
				<BaseGrid type={4}>
					{this.props.shots.map((shot, i) => {
						if (shot.type === 'paper') {
							if (!this.state.artistMode) {
								return (
									<Shot
										h={this.state.h}
										title={shot.title}
										image={shot.image}
										link={shot.link}
										key={i}
										type={shot.type}
										comment={shot.comment}
									>
										Inner
									</Shot>
								);
							} else {
								return null;
							}
						}
						return (
							<Shot
								h={this.state.h}
								title={shot.title}
								image={shot.image}
								link={shot.link}
								key={i}
								type={shot.type}
								comment={shot.comment}
							>
								Inner
							</Shot>
						);
					})}
				</BaseGrid>
				<MadeWithLove>
					Made with ❤ by{' '}
					<Link href="https://github.com/bregydoc/newtabdribbble">
						Bregy
					</Link>
				</MadeWithLove>
				<ToggleSwitch
					onToggle={act =>
						this.setState(s => {
							return { ...s, artistMode: act };
						})
					}
				/>
			</div>
		);
	}
}

export default Grid;
