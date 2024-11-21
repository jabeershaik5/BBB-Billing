import React from 'react';
import './css/header.css';

import useLogout from '../hooks/useLogout';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Header() {   

    const loggedUser = useSelector((state) => state.userReducer.user);
    const admin = useSelector(state => state.userReducer.admin);
    const dispatch = useDispatch();
    const { logout } = useLogout();
    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        dispatch({type:"LOG_USER_OUT", payload:null});

    }

    const handleToHome = ()=>{   
        loggedUser ? navigate('/') : alert('Please log in to access');
    }

    return(
        <header>
            <div className="logo"><Link to='/' className='Link'>BIG BUCKET</Link></div>
            <ul className="burgerMenu">
                <li onClick={(handleToHome)}>Home</li>
                {!loggedUser && <li><Link to='/Login' className='Link'>Login</Link></li>}
                {!loggedUser && <li><Link to='/Signup' className='Link'>Signup</Link></li>}
                {loggedUser && <li><Link to='/History' className='Link'>History</Link></li>}
                {admin && <li><Link to='/update-menu' className='Link'>Update Menu</Link></li>}
                {loggedUser && <li onClick={handleLogout}>Logout</li>}
                
            </ul>
        </header>
    )
}

export default Header