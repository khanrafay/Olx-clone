import React, { useEffect } from 'react';
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
import { auth } from './firebaseconfig/firebase';
import { useStateValue } from './Providers/UserProvider';

function App() {

	const [{ }, disptach] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			console.log('The user is >>>>', authUser)

			if (authUser) {
				// The user just logged in or user was logged in
				disptach({
					type: 'SET_USER',
					user: authUser
				})
			} else {
				// The user is logged out
				disptach({
					type: 'SET_USER',
					user: null
				})
			}
		})
	}, [])
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Navigation />
					<Home />
				</Route>
				<Route path="/home">
					<Navigation />
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
