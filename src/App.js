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
import { firestore } from './firebaseconfig/firebase';
import ProductDetail from './components/ProductDetail/productdetail';
import Post from './components/Post/post';
import PostHeader from './components/PostHeader/postheader';
import Attributes from './components/Attributes/attributes';

function App() {

	const [{ }, disptach] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged(authUser => {
			console.log('The user is >>>>', authUser)

			firestore
				.collection('users')
				.doc(authUser?.uid)
				.get()
				.then(snapshot => {
					console.log(snapshot.data())

					if (authUser) {
						// The user just logged in or user was logged in
						disptach({
							type: 'SET_USER',
							user: snapshot.data()
						})
					} else {
						// The user is logged out
						disptach({
							type: 'SET_USER',
							user: null
						})
					}
				})
				.catch(error => console.log(error))

		})
	}, [])
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Navigation />
					<Home />
				</Route>
				<Route path="/home">
					<Navigation />
					<Home />
				</Route>
				<Route path="/product/:id">
					<Navigation />
					<ProductDetail />
				</Route>
				<Route path="/post">
					<PostHeader/>
                   <Post/> 
				</Route>
				<Route path="/post/attributes">
					<PostHeader/>
                   <Attributes/> 
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
