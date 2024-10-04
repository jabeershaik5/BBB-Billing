import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';
import Home from './components/Home';
import Print  from './components/print';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
function App() {

  const user = useSelector(state => state.userReducer.user);
  const [print, setPrint] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={user? <Home print={print} /> : <Login />} />
      <Route path='/login' element={!user ? <Login />: <Home print={print} setPrint={setPrint} />} />
      <Route path='/signup' element={!user ? <Signup /> : <Home print={print} setPrint={setPrint} />} />
      <Route path='/history' element={<History />} />
    </Routes>
    </div>
  );
}

export default App;
