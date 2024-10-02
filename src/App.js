import './App.css';
import { Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import History from './components/History';
import Home from './components/Home';

import { useSelector, useDispatch } from 'react-redux';
function App() {

  const user = useSelector(state => state.userReducer.user);

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={user? <Home /> : <Login />} />
      <Route path='/login' element={!user ? <Login />: <Home />} />
      <Route path='/signup' element={!user ? <Signup /> : <Home />} />
      <Route path='/history' element={<History />} />
    </Routes>
    </div>
  );
}

export default App;
