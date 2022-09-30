import React, {useRef, useState} from 'react'
import {useMutation} from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Container } from './style'

const VerificationCode = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const verificationCodeRef = useRef('');

    const {mutate} = useMutation(() => {
            return fetch('http://207.154.246.125:8888/verificationcode', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    number: verificationCodeRef.current.value
                })
            }).then((res) => res.json());
        }
    );

    const onSubmit = () => {
        if(verificationCodeRef.current.value) {
            mutate({}, {
                onSuccess: ((res) => {
                    if(res.verify_email){
                        navigate('/forgetpage/newpassword')
                    }
                    else {
                        setError(res.message)
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
            <p style={{fontSize: '14px'}}>Biz sizning elektron pochtangizga tasdiqlash kodi bilan xat yubordik!</p>
            <p className={'label-text'}>Verification Code</p>
            <input ref={verificationCodeRef} onFocus={() => setError('')} className='form-control' type={'text'} placeholder={'Ex: 123456'} required/>
            <p className='text-danger f-size'>{error}</p>
            <button className='btn btn-primary w-100 mt-4' onClick={onSubmit}>Qabul qilish</button>
        </div>
  </Container>
  )
}

export default VerificationCode