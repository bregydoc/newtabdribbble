import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
	background-color: transparent;
	position: fixed;
	bottom: 20px;
	left: 20px;
`;

const SwitchBase = styled.div`
	background-color: white;
	height: 30px;
	width: 60px;
	border-radius: 20px;
	z-index: 2;
	-webkit-box-shadow: 0px 4px 69px 10px rgba(0, 0, 0, 0.22);
	-moz-box-shadow: 0px 4px 69px 10px rgba(0, 0, 0, 0.22);
	box-shadow: 0px 4px 69px 10px rgba(0, 0, 0, 0.22);
	:hover {
		cursor: pointer;
	}
`;

const Ball = styled.div`
	position: relative;
	height: 24px;
	width: 24px;
	border-radius: 20px;
	top: 50%;

	transition: 0.3s;

	${props => {
		console.log(props.active);
		if (props.active) {
			return css`
				/* left: 2px; */
				background-color: #ec5594;
				transform: translateX(calc(0% + 2px)) translateY(-50%);
			`;
		} else {
			return css`
				/* right: 2px; */
				background-color: #52d5ad;
				transform: translateX(calc(100% + 10px)) translateY(-50%);
			`;
		}
	}}
`;

const TextMode = styled.div`
	font-family: 'Archivo', sans-serif;
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 8px;
	padding: 2.8px;
	background-color: white;
	border-radius: 5px;
	color: #0b012f;
	z-index: 5;
`;

class ToggleSwitch extends React.Component {
	state = {
		active: localStorage.getItem('artisticmode') === 'true'
	};

	toggleSwitch = async () => {
		console.log(this.state.active);
		localStorage.setItem('artisticmode', !this.state.active);
		await this.setState(s => {
			return { ...s, active: !this.state.active };
		});
		if (this.props.onToggle) {
			this.props.onToggle(this.state.active);
		}
	};

	render() {
		return (
			<Container>
				<TextMode>
					{!this.state.active ? 'Geek Mode' : 'Artist Mode'}
				</TextMode>
				<SwitchBase
					active={this.state.active}
					onClick={this.toggleSwitch}
				>
					<Ball active={this.state.active} />
				</SwitchBase>
			</Container>
		);
	}
}

export default ToggleSwitch;
