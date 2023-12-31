import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import '../styles/auth.css'
import Navbar from '../components/Navbar'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {signIn} = UserAuth()
    const navigate = useNavigate()
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        try{
            await signIn(email, password)
            navigate('/profile')
        }catch (e) {
            setError(e.message)
            console.log(e.message);
            
        }
    }


  return (
    <div className='auth'>
      <form onSubmit={handleSubmit} className='form'>
      {error && <p id='error' hidden={!error}>Invalid Email or password.</p>}
        <div className='inputBox'>
            <input onChange={(e) => {setEmail(e.target.value)}}  id='email' pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g' placeholder=' ' required/>
            <span>Email</span>      
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password"  id='password' placeholder=' ' required/>
            <span>Password</span>
        </div>
        <button>Sign In</button>
        <p>Don't have an account? <span className='span' onClick={() => {navigate('/signup'), scrollTo(0, 0)}}>Sign Up</span></p>
      </form>
    </div>
  )
}

export default Signin
