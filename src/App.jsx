
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import { BrowserRouter as Router, HashRouter , Routes, Route } from 'react-router-dom';

import Navbar from './layout/navbar';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Payment from './pages/payment';
import Sign from './pages/sign';
import { Plano } from './pages/plano';
import { SucessPage } from './pages/sucess';
import { PaymentEstatus } from './pages/payment_estatus';
import { Termos } from './pages/termos';






function App(){
  return(
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/sign' element = {<Sign/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/' element = {<Dashboard/>}/>
        <Route path='/payment' element = {<Payment/>}/>
        <Route path='/sucess-page' element = {<SucessPage/>}/>
        <Route path='/payment-estatus' element = {<PaymentEstatus/>}/>
        <Route path='/plano' element = {<Plano/>}/>
        <Route path='/termos-e-condicoes' element = {<Termos/>}/>
      </Routes>
    </HashRouter>
  )
}


export default App
