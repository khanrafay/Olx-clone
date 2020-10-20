import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/NavigationBar';
import Home from './components/HomePage/Home';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Navigation />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
