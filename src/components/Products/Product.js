
import { Card, Container } from 'react-bootstrap'
import React from 'react'
import { Button } from 'react-bootstrap'
import MobileImage from '../../Images/mobile.jpg'
import './Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Product() {
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
                        <Card.Text>
                            Product Name
                       </Card.Text>
                    </Card.Body>
                    <div className="products_address">
                        <p>Address</p>
                        <p>Day</p>
                    </div>
                </Card>
            </Container>
        </div>

    )
}

export default Product
