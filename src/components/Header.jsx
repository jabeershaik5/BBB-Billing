import React from 'react';
import './css/header.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {   

    const user = useSelector(state => state.userReducer.user);

    return(
    <header>
        <div className="logo"><Link to='/' className='Link'>BIG BUCKET</Link></div>
        <ul className="burgerMenu">
            <li><Link to='/' className='Link'>Home</Link></li>
            {!user && <li><Link to='/Login' className='Link'>Login</Link></li>}
            {!user && <li><Link to='/Signup' className='Link'>Signup</Link></li>}
            {user && <li>Profile</li>}
            {user && <li><Link to='/History' className='Link'>History</Link></li>}
            {user && <li>Logout</li>}
            
        </ul>
    </header>
)
}

export default Header