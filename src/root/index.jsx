import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Register2 from '../components/Register2';
import ForgetEmail from '../components/ForgetEmail';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import VerificationCode from '../components/VerificationCode';
import NewPassword from '../components/NewPassword';

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/loginpage' element={<Login/>}/>
            <Route path='/register-page' element={<Register/>}/>
            <Route path='/register-page/2' element={<Register2/>}/>
            <Route path='/forgetpage' element={<ForgetEmail/>}/>
            <Route path='/forgetpage/verificationcode' element={<VerificationCode/>}/>
            <Route path='/forgetpage/newpassword' element={<NewPassword/>}/>
        </Routes>
    </div>
  )
}

export default Root