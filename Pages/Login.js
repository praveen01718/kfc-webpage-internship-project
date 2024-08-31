import React from 'react'
import './Login.css'
import logo from '../Image/kfcLogo.492728c6.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <section className=' container you mb-5'>
            
            <h5>Sign in / Sign up</h5>
            <br/>
            <Link to='/'> <img src={logo} alt=''/></Link>
            <br/>
            <br/>
            <h2>LET'S SIGN IN OR CREATE ACCOUNT WITH YOU PHONE NUMBER !</h2>
            <br/>
            <br/>
            <div className='input-box mb-3'>
                MOBILE NUMBER : <input type='number'
                placeholder='Enter your number' required />
                <br/>
                <br/>
                <h5>By "logging in to KFC",you agree to our Privacy Pollcy and Terms&Conditions.</h5>
            </div>
            <br/>
            <button className='btn btn-dark mb-3'>Send me code</button>
            <h5>(OR)</h5>
            <br/>
            <button className='btn btn-light mb-3'>Skip, Continue As Guest</button>
            <br/>
        
        </section>
    </div>
  )
}

export default Login