import React from 'react';
import './css/auth.css';

import FormComp from './FormComp';
import useLogin from '../hooks/useLogin';

const Login = ()=> {

  const {logIn:func, error, loading, user, setError} = useLogin();
  const hook = {func, error, loading, user, setError};

  return (
    <div className='login'>
      <FormComp type='LOG IN' hook={hook} />
    </div>
  )
}

export default Login