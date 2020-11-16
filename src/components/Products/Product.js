import { Card, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MobileImage from '../../Images/mobile.jpg';
import './Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { firestore } from '../../firebaseconfig/firebase';

function Product() {
	const [ productDetails, setProductDetails ] = useState([ {} ]);
	const getProductDetails = () => {
		const docRef = firestore.collection('users');
		//console.log('doc', docRef);
		docRef.onSnapshot((querySnapshot) => {
			querySnapshot.forEach(function(doc) {
				// doc.data() is never undefined for query doc snapshots
				console.log(doc.id, ' => ', doc.data());
				firestore.collection('users').doc(doc.id).collection('posts').onSnapshot((querySnapshot) => {
					querySnapshot.forEach(function(doc) {
						//console.log(doc.id, ' => ', doc.data());
						setProductDetails(doc.data())
					});
				});
			});
			// let data = doc.data();
			// setProductDetails(data);
			// console.log('Document data:', data);

			// // doc.data() will be undefined in this case
			// setProductDetails(null);
			// console.log('No such document!');
		});
		// .catch(function(error) {
		// 	setProductDetails(null);
		// 	console.log('Error getting document:', error);
		// });
	};

	// useEffect(() => {
	// 	getProductDetails();
	// }, [productDetails]);

	return (
		<div className="products">
			<Container>
				<Card style={{ width: '18rem' }}>
					<div className="products_Image">
						<Card.Img variant="top" src={MobileImage} />
						<FavoriteBorderIcon />
					</div>
					<Card.Body>
						<Card.Title>Rs. 50,000</Card.Title>
						<Card.Text>Product Name</Card.Text>
					</Card.Body>
					<div className="products_address">
						<p>Address</p>
						<p>Day</p>
					</div>
				</Card>
			</Container>
		</div>
	);
}

export default Product;
