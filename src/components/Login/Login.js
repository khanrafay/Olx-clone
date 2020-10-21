import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import './Login.css';
import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';

function Login(props) {

    const [isModalOpen, setModalOpen] = useState(props.show);
    const [isEmailBlock, setEmailBlock] = useState(false);
    const [isButtonVisible, setButtonVisible] = useState(true);
    //const [isSignIn, setSignIn] = useState(true);
    const [isSignUp, setSignUp] = useState(false);

    console.log(isModalOpen);
    const handleClose = () => {
      props.setShow(!props.show)
    }

    const handleButtonBlack = () => {
        setButtonVisible(false);
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
                {isButtonVisible &&
                    <>
                        <Button variant="outline-secondary">Continue with Phone</Button>
                        <Button variant="outline-primary">Continue with Facebook</Button>
                        <Button variant="outline-success">Continue with Google</Button>
                        <Button
                            onClick={handleButtonBlack}
                            variant="outline-info">Continue with Email</Button>
                    </>
                }
                {isEmailBlock && <>
                    {isSignUp ?
                        <Signup setSignUp={setSignUp} setModal={props.setModal} />
                        :
                        <Signin setSignUp={setSignUp} />
                    }
                </>}
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
