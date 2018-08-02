import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
	height: ${props => props.h};
	display: flex;
	background-image: url(${props => props.background});
	text-decoration: none;

	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	background-color: none;

	transition: 0.5s;

	${props => {
		if (props.active) {
			return css`
				-webkit-filter: grayscale();
				-moz-filter: grayscale();
				-o-filter: grayscale();
				-ms-filter: grayscale();
				filter: grayscale();
			`;
		} else {
			return css`
				-webkit-filter: none;
				-moz-filter: none;
				-o-filter: none;
				-ms-filter: none;
				filter: none;
			`;
		}
	}};
`;

const Sheet = styled.div`
	background-color: #031d3e;
	position: relative;
	color: white;

	display: none;

	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	${props => {
		if (props.active) {
			return css`
				display: flex;
				height: auto;
			`;
		}
	}};
`;
class Shot extends Component {
	// constructor(props) {
	//     this.props = props;
	// }

	state = {
		active: false
	};

	mouseEnter = () => {
		this.setState(prevState => {
			return { ...prevState, active: true };
		});
	};

	mouseLeave = () => {
		this.setState(prevState => {
			return { ...prevState, active: false };
		});
	};

	render() {
		return (
			<a href={'https://dribbble.com' + this.props.link}>
				<Wrapper
					h={this.props.h}
					background={this.props.image}
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
					active={this.state.active}
				>
					{/* <Sheet active={this.state.active}>{this.props.title}</Sheet> */}
				</Wrapper>
			</a>
		);
	}
}

export default Shot;
