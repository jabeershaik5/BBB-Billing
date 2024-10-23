import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';
import Home from './components/Home';
import UpdateMenu from './components/UpdateMenu';
import useFetch from './hooks/useFetch';
import AdminC from './AdminC';
import NotFound from './components/NotFound';

import { auth } from './db/db';

import './App.css';

function App() {

  const user = useSelector(state => state.userReducer.user);
  const authReady = useSelector(state=> state.userReducer.authReady);
  const dispatch = useDispatch();
  const { fetchData } = useFetch();

  useEffect(()=>{
    fetchData();
    const unsub = auth.onAuthStateChanged(user =>{
      dispatch({type:'AUTH_IS_READY', payload:user});
      unsub();
    })
    
  },[dispatch, fetchData]);

  return (
    <div className="App">
      {authReady && (<React.Fragment>
        <Header />
        <Routes>
          <Route path='/' element={user? <Home /> : <Login />} />
          <Route path='/login' element={!user ? <Login />: <Home />} />
          <Route path='/signup' element={!user ? <Signup /> : <Home />} />
          <Route path='/history' element={!user ? <Signup /> : <History />} />
          <Route path='/update-menu' element={!user ? <Signup /> : <UpdateMenu />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {user &&<AdminC />}
        </React.Fragment>)}
    </div>
  );
}

export default App;
