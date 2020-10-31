import React from 'react'
import './post.css';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Post() {
    return (
        <div className="post">
            
            <div className="post__ads">
                <h4>POST YOUR AD</h4>
                <div className="post__categories">
                    <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Link to="/attributes">
                                Mobile
                                </Link>
                                </ListGroup.Item>
                            <ListGroup.Item>Vehicles</ListGroup.Item>
                            <ListGroup.Item>Property for Sale</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Post
