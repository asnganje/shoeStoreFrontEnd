import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Store from './components/Store';
import Product from './components/Products';
import StoreCreate from './components/StoreCreate';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/store' element = {<Store />} />
        <Route path='/products' element = {<Product />} />
        <Route path='/storecreate' element = {<StoreCreate />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;