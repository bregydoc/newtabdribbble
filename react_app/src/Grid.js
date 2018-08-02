import React, { Component } from 'react';
import Shot from './Shot';
import styled, { css } from 'styled-components';

const BaseGrid = styled.div`
	display: grid;
	${props => {
		console.log(props);
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
// 1, 2, 3, 4
// 100% 50% 33.333% 25%
const ratio = 400 / 300; // 1.333

class Grid extends Component {
	state = {
		width: window.innerWidth,
		height: window.innerHeight,
		h: '240px'
	};

	handleWindowSizeChange = () => {
		const h = window.innerWidth / 4 / ratio;
		console.log(h.toString() + 'px');

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
			<BaseGrid type={4}>
				{this.props.shots.map((shot, i) => {
					return (
						<Shot
							h={this.state.h}
							title={shot.title}
							image={shot.image}
							link={shot.link}
							key={i}
						>
							Inner
						</Shot>
					);
				})}
			</BaseGrid>
		);
	}
}

export default Grid;
