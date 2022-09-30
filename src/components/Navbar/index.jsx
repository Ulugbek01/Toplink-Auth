import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='d-flex justify-content-end p-4'>
          <NavLink className={'btn btn-primary me-3'} to={'/loginpage'}>Kirish</NavLink>
          <NavLink className={'btn btn-outline-primary'} to={'/register-page'}>Ro‘yxatdan o‘tish</NavLink>
    </div>
  )
}

export default Navbar