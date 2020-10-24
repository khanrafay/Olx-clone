import React from 'react';
import { Carousel, Col, Container, Row, Card, Button } from 'react-bootstrap';
import './productdetail.css';
import slider1 from '../../Images/slider1.jpg';
import slider2 from '../../Images/slider2.jpg';
import slider3 from '../../Images/slider3.jpg';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
function ProductDetail() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Carousel className="productdetail">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={slider1}
                                    alt="First slide"
                                    className="productdetail__img"

                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={slider2}
                                    alt="Third slide"
                                    className="productdetail__img"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={slider3}
                                    alt="Third slide"
                                    className="productdetail__img"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Rs. 5000</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Product
                                Description
                                </Card.Subtitle>
                                <div className="productdetail__address">
                                    <p>Address</p>
                                    <p>Day</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Seller Description</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    <FaceIcon />Name
                                <p style={{ fontSize: '10px' }}>Member Since: ---</p>
                                </Card.Subtitle>
                                <Button variant="primary">Chat with Seller</Button>
                                <br/><br/>
                                <div className="productdetail__phone">
                                <PhoneIcon />
                                <p>************</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProductDetail