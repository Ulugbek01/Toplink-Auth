import React, {useRef, useState} from 'react'
import {useMutation} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style'

const ForgetEmail = () => {
    const [error, setError] = useState('');
    const emailRef = useRef('');
    const navigate = useNavigate();

    const {mutate} = useMutation(() => {
            return fetch('http://207.154.246.125:8888/checkemail', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailRef.current.value,
                })
            }).then((res) => res.json());
    });

    const onSubmit = () => {
        if(emailRef.current.value) {
            mutate({}, {
                onSuccess: ((res) => {
                    if(res.status === 200 ){
                        navigate('/forgetpage/verificationcode')
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
            <p style={{fontSize: '14px'}}>Agar parolni unutgan bo'lsangiz, parolingizni tiklang!</p>
            <p className={'label-text'}>Elektron pochta</p>
            <input onFocus={() => setError('')} ref={emailRef} className='form-control' type={'email'} placeholder={'Ex: abc@example.com'} required/>
            <p className='text-danger f-size'>{error}</p>
            <button className='btn btn-primary w-100 mt-4' onClick={onSubmit}>Qabul qilish</button>
        </div>
  </Container>
  )
}

export default ForgetEmail