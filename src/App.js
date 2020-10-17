import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/NavigationBar';
import Home from './components/HomePage/Home';
function App() {
	return (
		<div>
			<Navigation />
			<Home />
		</div>
	);
}

export default App;
