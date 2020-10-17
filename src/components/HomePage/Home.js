import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import Product from '../../components/Products/Product';
function Home() {
    return (
        <Jumbotron>
            <h3>Fresh recommendations</h3>
            <Container>
                <Row>
                    <Col xs={4}> <Product /></Col>
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
