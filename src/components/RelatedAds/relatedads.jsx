import React from 'react';
import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slider1 from '../../Images/slider1.jpg';
import slider2 from '../../Images/slider2.jpg';
import slider3 from '../../Images/slider3.jpg';
import './relatedads.css'

function RelatedAds() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const multiImage = (<img
		src={slider1}
		alt="First slide"
		className="relatedads__img"
		height="200px"

	/>);

	const cardImage = (<Card >
		<Card.Img variant="top" src={slider1} />
		<Card.Body>
			<Card.Title>Card Title</Card.Title>
			<Card.Text>
				Some quick example text to build on the card title and make up the bulk of
				the card's content.
	  </Card.Text>
		</Card.Body>
	</Card>);

	const printImage = [0, 1, 2, 3, 4, 5, 6]

	return (
		<div>
			<Carousel responsive={responsive}>
				{printImage.map(image => {
					return (
						<div className="relatedads__card">
							{cardImage}
						</div>
					)
				})}
			</Carousel>;
		</div>
	);
}

export default RelatedAds;
