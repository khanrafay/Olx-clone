import React from 'react';
import './Header.css';

import slider1 from '../Images/slider1.jpg';
function Header() {
	return (
		<div className="header">
			<div className="header__left">
                <img src={slider1}
                />
                </div>
			<div className="header__right">
                <button>Login</button>
                <button>Register</button>
            </div>
		</div>
	);
}

export default Header;
