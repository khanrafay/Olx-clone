import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row, Card, Button } from 'react-bootstrap';
import './productdetail.css';
import slider1 from '../../Images/slider1.jpg';
import slider2 from '../../Images/slider2.jpg';
import slider3 from '../../Images/slider3.jpg';
import FaceIcon from '@material-ui/icons/Face';
import PhoneIcon from '@material-ui/icons/Phone';
import RelatedAds from '../RelatedAds/relatedads';


function ProductDetail() {


    return (
        <div className="productdetail">
            <Container>
                <Row>
                    <Col xs={8}>
                        <Carousel >
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
                        <Card>
                            <Card.Body className="productdetail__details">
                                <Card.Title>Details</Card.Title>
                                <div className="productdetail__details-type">
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Condition
                                </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        New
                                </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Video-Audio
                                </Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        New
                                </Card.Subtitle>
                                </div>
                                <div className="productdetail__description">
                                    <Card.Title>Decription</Card.Title>
                                    <Card.Text>
                                        Brand : ALAN WILLSON (AW)
                                        Brand Origin: United Kingdom (UK)
                                        Made: UK
                                        Contact on given number.
                                        Rgds,
                                        Brand Matrix
                                        Gulberg-III, Lahore.
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>

                        <Card className="productdetail__ads">
                            <Card.Body >
                                <Card.Title>Related ads</Card.Title>
                                <RelatedAds />
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs="4">
                        <div className="productdetail__sidedetails">
                            <Card style={{ width: '24rem' }}>
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
                            <Card style={{ width: '24rem' }}>
                                <Card.Body>
                                    <Card.Title>Seller Description</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <FaceIcon />Name
                                <p style={{ fontSize: '10px' }}>Member Since: ---</p>
                                    </Card.Subtitle>
                                    <Button variant="primary">Chat with Seller</Button>
                                    <br /><br />
                                    <div className="productdetail__phone">
                                        <PhoneIcon />
                                        <p>************</p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '24rem' }}>
                                <Card.Body>
                                    <Card.Title>Posted in</Card.Title>

                                    <p style={{ fontSize: '10px' }}>Address</p>

                                    <img
                                        className="productdetail__map"
                                        src={`https://maps.googleapis.com/maps/api/staticmap?center=31.513%2C74.333&language=en&size=640x256&zoom=15&scale=1&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=QC-ViDktWvThij-aAIByCDcJ3ag=`}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default ProductDetail