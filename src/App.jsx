import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Store from './components/Store';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/store' element = {<Store />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;