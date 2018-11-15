import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import FitText from '@kennethormandy/react-fittext';

const Wrapper = styled.div`
	height: ${props => props.h};
	display: flex;
	${props => {
		if (props.type === 'paper') {
			// console.log(props.background.split(',')[0]);
			return css`
				color: ${props => props.background.split(',')[1]};
				background-color: ${props => props.background.split(',')[0]};
			`;
		} else {
			return css`
				background-image: url(${props => props.background});
				background-color: none;
			`;
		}
	}}

	text-decoration: none;

	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;

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
	/* color: #041528; */
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

const WrapperPaperText = styled.div`
	padding: 15px;
	/* color: #1e2d3f; */
	/* text-transform: uppercase; */
	/* font-size: 2.5vw; */
	text-decoration: none;
	font-weight: 700;
	font-family: 'Archivo', sans-serif;
	vertical-align: middle;
	align-items: center;
	align-content: center;

	/* @media (min-width: 480px) {
		font-size: 5vw;
	} */
	/* overflow: hidden; */
	overflow-y: scroll;
`;

const Comment = styled.div`
	font-size: 16px;
	margin-top: 10px;
	text-decoration: none;
	font-weight: 400;
	font-family: 'Lato', sans-serif;
	letter-spacing: 0.2px;
	/* text-transform: uppercase; */
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
		let link = this.props.link;
		if (this.props.type === 'art') {
			link = 'https://dribbble.com' + this.props.link;
		}

		return (
			<a href={link} style={{ textDecoration: 'none' }}>
				<Wrapper
					h={this.props.h}
					type={this.props.type}
					background={this.props.image}
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
					active={this.state.active}
				>
					{/* <Sheet active={this.state.active}>{this.props.title}</Sheet> */}
					{this.props.type === 'paper' ? (
						<WrapperPaperText active={this.state.active}>
							<FitText compressor={1}>{this.props.title}</FitText>
							<Comment>{this.props.comment}</Comment>
						</WrapperPaperText>
					) : null}
				</Wrapper>
			</a>
		);
	}
}

export default Shot;
