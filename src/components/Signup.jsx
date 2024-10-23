import React from 'react';
import './css/auth.css';

import FormComp from './FormComp';
import { useSignup } from '../hooks/useSignup';

const Signup = ()=> {

  const {signup: func, error, loading, setError} = useSignup();
  const hook = {func, error, loading, setError};

  return (
    <div className='signup'>
      <FormComp type='SIGN UP' hook={hook} />
    </div>
  )
}

export default Signup