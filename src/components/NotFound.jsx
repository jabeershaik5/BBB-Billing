import React from 'react';
import { Link } from 'react-router-dom';

import './css/notFound.css';

const NotFound = () => {
  return (
    <div className='not-found-page'>
        <p className="not-found-message">Oopss... Nothing here</p>
        <p className="not-found-message">Let's go back</p>
        <Link to='/' className='Link go-back-btn'>Go Back!</Link>
    </div>
  )
}

export default NotFound