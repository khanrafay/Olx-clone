import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Product from '../../components/Products/Product';
function Home() {
    return (
        <Jumbotron>
            <h3>Fresh recommendations</h3>
            <Container>
                <Row>
                    <Col xs={4}> <Link to='/product/:id'>
                        <Product />
                    </Link>
                    </Col>
                    <Col xs={4}> <Product /></Col>
                    <Col xs={4}> <Product /></Col>
                    <Col xs={4}> <Product /></Col>
                    <Col xs={4}> <Product /></Col>
                </Row>
            </Container>

        </Jumbotron>

    )
}

export default Home
