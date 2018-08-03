import React, { Component } from 'react';
import fetchRawShotsOfDribbble from './fetcher';
import Grid from './Grid';
import Loading from './Loading';

class App extends Component {
	state = { shots: null, loading: true };

	componentDidMount() {
		console.log('fetching...');
		fetchRawShotsOfDribbble().then(r => {
			let shots = r.data;
			this.setState(prevState => {
				return { ...prevState, shots: shots, loading: false };
			});
			// console.log(shots);
		});
	}

	render() {
		if (this.state.loading) {
			return <Loading />;
		}

		return (
			<div className="App">
				<Grid shots={this.state.shots} />
			</div>
		);
	}
}

export default App;
