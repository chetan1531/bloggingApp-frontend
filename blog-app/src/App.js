import React from 'react'
import Base from './components/Base'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import About from './pages/About'
import CustomNavbar from './components/CustomNavbar'
import Services from './pages/Servcies'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function App() {
  return (
    
    <BrowserRouter>
   <ToastContainer position='bottom-center'/>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/services" element={<Services></Services>}/>
        

      </Routes>
    </BrowserRouter>
  )
}