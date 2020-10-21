import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { auth, generateUserDocument } from '../../firebaseconfig/firebase';
import './Signin.css';
import { Link, useHistory } from 'react-router-dom';


function Signup(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const history = useHistory();

    const createUserWithEmailAndPasswordHandler = async (event) => {
        event.preventDefault();
        console.log('create')
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            console.log('object', user);

            generateUserDocument(user, { name });
            console.log('gen', user);
            setSuccess("Your account has been created.")
            props.setModal(false);
            history.push('/');
        }
        catch (error) {
            console.log(error);
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setName("");
    };

    // const onFormSubmit = () => {
    //     createUserWithEmailAndPasswordHandler(email, password);
    // }
    return (
        <div>
            <Form onSubmit={createUserWithEmailAndPasswordHandler}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => { setName(e.currentTarget.value) }}
                        type="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
				</Button>
                {success !== "" &&
                    <Alert variant='success'>
                        {success}
                    </Alert>
                }
                <Form.Text>{error}</Form.Text>
                <Form.Text className="signin__no--account">Have an account?
                    <Button
                        variant="link"
                        onClick={() => { props.setSignUp(false) }}>
                        Log In here</Button>

                </Form.Text>
                <Form.Text >Forgot Password</Form.Text>

            </Form>

        </div>
    )
}

export default Signup
