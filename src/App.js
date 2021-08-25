import React from 'react';
import { Route } from 'react-router-dom';
import SurveyContainer from './Container/Survey';
import './App.css';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={SurveyContainer} />
		</div>
	);
}

export default App;
