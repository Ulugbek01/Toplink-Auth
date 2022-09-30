import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useMutation } from 'react-query';
import { Container } from './style';


const Login = () => {
  const [error, setError] = useState('');

  const emailRef= useRef('')
  const passwordRef = useRef('');
  const navigate = useNavigate();
  
  const { mutate } = useMutation(() => {
    return fetch('http://207.154.246.125:8888/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
    }).then((res) => res.json());
  })

  const signIn = () => {
    if(emailRef.current.value && passwordRef.current.value){
      mutate({}, {
        onSuccess: (res) => {
          if(res.status === 200) {
            alert("Siz tizimga kirdingiz");
            localStorage.setItem('token', res.token)
            emailRef.current.value = '';
            passwordRef.current.value = ''
          }
          else {
            setError('email yoki parol xato');
          }
        },
      })
    }
    else {
      setError('email yoki password bo\'sh bo\'lmasligi kerak');
    }
  }

  return (
    <Container>
    <div style={{width: '400px'}} className='p-4'>
      <h2 className='mb-4' style={{color:'#5B33AF'}}>Kirish</h2>
        <p className={'label-text'}>Elektron pochta</p>
        <input ref={emailRef} onFocus={() => setError('')} className='form-control' type={'email'} placeholder={'Ex: abc@example.com'} required/>
        <p className='label-text mt-3'>Parol</p>
        <input ref={passwordRef} onFocus={() => setError('')} className='form-control' type={'password'} placeholder={'**********'} required/>
        <p className='mt-3 forget-password' onClick={() => navigate('/forgetpage')}>Parolni unutdingizmi?</p>
        <p className='error text-danger'>{error}</p>
        <button className='btn btn-primary w-100' onClick={signIn}>Kirish</button>
        <p className='mt-3'>Accountingiz mavjud emasmi? <span className='sign-up' onClick={() => navigate('/register-page')}>Ro‘yxatdan o‘tish</span></p>
    </div>
  </Container>
  )
}

export default Login;