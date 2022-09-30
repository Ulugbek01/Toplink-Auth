import React, {useRef, useState} from 'react'
import {useMutation} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style'

const NewPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const newPasswordRef = useRef('');

    const {mutate} = useMutation(() => {
            return fetch('http://207.154.246.125:8888/newpassword', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailRef.current.value,
                    newpassword: newPasswordRef.current.value
                })
            }).then((res) => res.json());
        }
    );

    const onSubmit = () => {
        if(newPasswordRef.current.value && emailRef.current.value) {
            mutate({}, {
                onSuccess: ((res) => {
                    if(res.status === 200) {
                        navigate('/loginpage')
                    }
                    else {
                        setError(res.message);
                    }
                })
            })
        }
        else {
            setError("Ma'lumot kiriting!");
        }
    }

  return (
    <Container>
        <div style={{width: '400px'}} className='p-4'>
        <h2 className='mb-4' style={{color:'#5B33AF'}}>Parolni Unutdingizmi?</h2>
            <p style={{fontSize: '14px'}}>Hisobingizga kirish uchun yangi parolni o'rnating!</p>
            <p className={'label-text'}>Email</p>
            <input ref={emailRef} onFocus={() => setError('')} className='form-control' type={'email'} placeholder={'Ex: abc@example.com'} required/>
            <p className={'label-text mt-4'}>NewPassword</p>
            <input ref={newPasswordRef} onFocus={() => setError('')} className='form-control' type={'password'} placeholder={'Ex: **********'} required/>
            <p className='text-danger f-size'>{error}</p>
            <button className='btn btn-primary w-100 mt-4' onClick={onSubmit}>Qabul qilish</button>
        </div>
  </Container>
  )
}

export default NewPassword