import React, { useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container } from './style';

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fullNameRef = useRef('');
  const phoneRef = useRef('');

  const nextFun = () => {
    if(fullNameRef.current.value && phoneRef.current.value) {
      navigate('/register-page/2');
      localStorage.setItem('fullName', fullNameRef.current.value);
      localStorage.setItem('phone', phoneRef.current.value);
    }
    else {
      setError("Iltimos ma'lumot kiriting");
    }
  }

  return (
    <Container>
    <div style={{width: '400px'}} className='p-4'>
      <h2 className='mb-4' style={{color:'#5B33AF'}}>Ro‘yxatdan o‘tish</h2>
        <p className={'label-text'}>To‘liq ism</p>
        <input onFocus={() => setError('')} ref={fullNameRef} className='form-control' type={'text'} placeholder={'Ex: Saul Ramirez'} required/>
        <p className='label-text mt-3'>Telefon nomer</p>
        <input onFocus={() => setError('')} ref={phoneRef} className='form-control' type={'tel'} placeholder='Tel' required/>
        <p className='text-danger error'>{error}</p>
        <button className='btn btn-primary w-100 mt-4' onClick={nextFun}>Keyingi</button>
        <p className='mt-3'>Accountingiz mavjudmi? <span className='sign-up' onClick={() => navigate('/loginpage')}>Kirish</span></p>
    </div>
  </Container>
  )
}

export default Register;