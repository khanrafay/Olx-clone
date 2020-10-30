import React, { useState } from 'react';
import { Button, Form, FormControl, Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import bg_Image from '../../Images/hero_bg_pk.jpg';
import Login from '../Login/Login';
import { useStateValue } from '../../Providers/UserProvider';
import { auth } from '../../firebaseconfig/firebase';
import { Link } from 'react-router-dom';


function Navigation() {
	const playerImage = <img src="img" />;

	const [isModalOpen, setModalOpen] = useState(false);
	const [{ user }, disptach] = useStateValue();
	//const [isUserSignedIn, setUserSignedIn] = useState();
	//console.log('isUserSin', isUserSignedIn, user)
	const handleSignOut = () => {
		auth.signOut().then(
			() => {
				console.log('signed out successfully')
				disptach({
					type: 'SET_USER',
					user: null
				})
			})
			.catch((error) => console.log(error))
	}
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Olx Clone</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav style={{ width: '800px' }}>
						<Nav.Link href="#home">Search Bar</Nav.Link>
						<Nav.Link href="#link">Second Search bar</Nav.Link>
					</Nav>
					<div className="d-flex mt-10">
						{/* <div>
							<MessageIcon />
						</div>
						<div>
							<NotificationsIcon />
						</div> */}
						<div style={{ display: 'flex' }}>

							{user ? (
								<>
									<p>Welcome {user?.displayName}</p>
									<Button
										onClick={handleSignOut}
										style={{ marginRight: '10px' }}>
										Sign out
								</Button>
								</>
							) : (
									<Button
										onClick={() => { setModalOpen(true) }}
										style={{ marginRight: '10px' }}>
										Login
									</Button>
								)}

							<Link to="/post">Sell</Link>
						</div>

					</div>
					{/* <NavDropdown title={<PersonIcon />} id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown> */}

				</Navbar.Collapse>
			</Navbar>

			<div>
				<p>Drop down of Categories</p>
			</div>
			<div>
				<img style={{ width: '100%' }} src={bg_Image} />
			</div>

			{isModalOpen &&
				<Login show={isModalOpen} setModal={setModalOpen} />
			}
		</div>
	);
}

export default Navigation;
