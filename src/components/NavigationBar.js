import React from 'react';
import { Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';

function Navigation() {
	const playerImage = <img src="img" />;
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Olx Clone</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
					<div>
						<MessageIcon />
						<NotificationsIcon />
						<NavDropdown title={<PersonIcon />} id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Navigation;
 