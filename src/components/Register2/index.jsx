import React, {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useMutation } from 'react-query';
import { Container } from './style';

const Register2 = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const userNameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('') 

  const { mutate } = useMutation(() => {
    return fetch('http://207.154.246.125:8888/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: userNameRef.current.value,
        fullname: localStorage.getItem('fullName'),
        email: emailRef.current.value,
        password: passwordRef.current.value,
        phone: localStorage.getItem('phone'),
      })
    }).then((res) => res.json());
  })

  const onSubmit = () => {
    if(userNameRef.current.value && emailRef.current.value && passwordRef.current.value){
      mutate({}, {
        onSuccess: ((res) => {
          if(res.status === 200) {
            alert("Foydalanuvchi qo'shildi!");
            setError(res.message);
          }
          else {
            setError(res.message);
          }
        })
      })
    }
    else {
      setError("Ma'lumot kiriting")
    }
  }

  return (
    <Container>
    <div style={{width: '400px'}} className='p-4'>
      <h2 className='mb-4' style={{color:'#5B33AF'}}>Ro‘yxatdan o‘tish</h2>
        <p className={'label-text'}>Elektron pochta</p>
        <input ref={emailRef} className='form-control' type={'email'} placeholder={'Ex: abc@example.com'} required/>
        <p className='label-text mt-3'>Parol</p>
        <input ref={passwordRef} className='form-control' type={'password'} placeholder='**********' required/>
        <p className='label-text mt-3'>Foydalanuvchi nomi</p>
        <input ref={userNameRef} className='form-control' type={'text'} placeholder='Ex. Saul Ramirez' required/>
        <p className='text-danger error'>{error}</p>
        <button className='btn btn-primary w-100 mt-4' onClick={onSubmit}>Qabul qilish</button>
        <p className='mt-3'>Accountingiz mavjudmi? <span className='sign-up' onClick={() => navigate('/loginpage')}>Kirish</span></p>
    </div>
  </Container>
  )
}

export default Register2