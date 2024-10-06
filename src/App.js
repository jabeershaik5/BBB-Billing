import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';
import Home from './components/Home';

import { auth } from './db/db';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {

  const user = useSelector(state => state.userReducer.user);
  const authReady = useSelector(state=> state.userReducer.authReady);
  const [print, setPrint] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    
    const unsub = auth.onAuthStateChanged(user=>{
      dispatch({type:'AUTH_IS_READY', payload:user});
      unsub();
    })
    
  },[dispatch]);

  return (
    <div className="App">
      {authReady && (<React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={user? <Home print={print} /> : <Login />} />
          <Route path='/login' element={!user ? <Login />: <Home print={print} setPrint={setPrint} />} />
          <Route path='/signup' element={!user ? <Signup /> : <Home print={print} setPrint={setPrint} />} />
          <Route path='/history' element={<History />} />
        </Routes>
        </React.Fragment>)}
    </div>
  );
}

export default App;
