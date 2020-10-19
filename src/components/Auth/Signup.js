import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { auth, generateUserDocument } from '../../firebaseconfig/firebase';

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, { name });
            console.log('object', user);
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setName("");
    };

    const onFormSubmit = () => {
        createUserWithEmailAndPasswordHandler(email, password);
    }
    return (
        <div>
            <Form onSubmit={onFormSubmit}>
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
                <Form.Text >Have an account? Log In here</Form.Text>
                <Form.Text >Forgot Password</Form.Text>

            </Form>

        </div>
    )
}

export default Signup
