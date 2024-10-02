import React from 'react';
import './css/auth.css';

import FormComp from './FormComp';
import useLogin from '../hooks/useLogin';

const Login = ()=> {

  const {login:func, error, isPending} = useLogin();
  const hook = {func, error, isPending};

  return (
    <div className='login'>
      <FormComp type='LOG IN' hook={hook} />
    </div>
  )
}

export default Login