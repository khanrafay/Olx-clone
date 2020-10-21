import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Signin.css';

function Signin(props) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");


	return (
		<div>
			<Form>
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
					Submit
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
