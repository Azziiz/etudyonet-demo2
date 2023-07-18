import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import '../styles/auth.css'
import banner from "../assets/banner.jpg"

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
      <form onSubmit={handleSubmit}>
      {error && <p id='error'>tchu tchu motherfucker</p>}
        <div className='inputBox'>
            <input onChange={(e) => {setEmail(e.target.value)}}  id='email' pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g' required/>
            <span>email</span>      
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setPassword(e.target.value)}} type="passowrd"  id='password' required/>
            <span>password</span>
        </div>
        <button>Sign In</button>
        <p>Don't have an account? <Link to='/signup' className='link'>Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Signin
