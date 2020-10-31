import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { auth } from '../../firebaseconfig/firebase';
import './Signin.css';

function Signin(props) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const signInUserWithEmailAndPasswordHandler = async (event) => {
        event.preventDefault();
      
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password);
            props.setModal(false);
            useHistory.push('/');
        }
        catch (error) {
            console.log('error', error);
            setError('Error Signing in with email and password');
        }

        setEmail("");
        setPassword("");
    };


	return (
		<div>
			<Form onSubmit={signInUserWithEmailAndPasswordHandler}>
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
					Login
				</Button>
				<Form.Text className="signin__no--account">Don't have an account? <Button
					variant="link"
					onClick={() => props.setSignUp(true)}>
					Sign up here</Button>
				</Form.Text>

				<Button variant="link" >Forgot Password</Button>

			</Form>
		</div>
	);
}

export default Signin;
