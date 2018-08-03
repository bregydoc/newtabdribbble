import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import dribbble from './dribbble_ball.png';

const Background = styled.div`
	/* display: grid; */
	position: absolute;
	display: inline-block;
	height: 100vh;
	width: 100vw;
	background-color: white;
`;

const InnerAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;
const LoadContainer = styled.div`
	display: flex;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 15px;
	border: 1px solid #26283f;
	border-radius: 40px;

	align-items: center;

	transition: 1s;
	animation: ${InnerAnimation} 0.7s linear;
`;

const DribbbleBall = styled.img`
	width: auto;
	height: 40px;
`;

const LoadingMessage = styled.span`
	font-family: 'Raleway', sans-serif;
	color: #26283f;
	font-size: 20px;
	margin-left: 20px;
	margin-right: 8px;
`;

class Loading extends Component {
	render() {
		return (
			<Background>
				<LoadContainer>
					<DribbbleBall src={dribbble} />
					<LoadingMessage> Loading, please wait </LoadingMessage>
				</LoadContainer>
			</Background>
		);
	}
}

export default Loading;
