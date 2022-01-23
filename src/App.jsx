import * as React from 'react';
import './App.css';
import { TVChartContainer } from './components/TVChartContainer/index';

class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				<TVChartContainer />
			</div>
		);
	}
}

export default App;
