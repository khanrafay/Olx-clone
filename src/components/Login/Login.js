import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import './Login.css';
function Login(props) {

    const [isModalOpen, setModalOpen] = useState(props.show);
    const [isEmailBlock, setEmailBlock] = useState(false);
    const [isButtonBlock, setButtonBlock] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    console.log(isModalOpen);
    const handleClose = () => {
        setModalOpen(!props.show);
    }

    const handleButtonBlack = () => {
        setButtonBlock(false);
        setEmailBlock(true);
    }
    return (
        <Modal
            show={props.show}
            backdrop="static"
            keyboard={false}
            className="login"
        >
            <Modal.Header >
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body className="login__buttons">
                {isButtonBlock &&
                    <>
                        <Button variant="outline-secondary">Continue with Phone</Button>
                        <Button variant="outline-primary">Continue with Facebook</Button>
                        <Button variant="outline-success">Continue with Google</Button>
                        <Button
                            onClick={handleButtonBlack}
                            variant="outline-info">Continue with Email</Button>
                    </>
                }
                {isEmailBlock &&
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                  </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => props.setShow(!props.show)}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Login
