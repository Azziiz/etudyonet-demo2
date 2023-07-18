import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import '../styles/auth.css'
import avatar from '../assets/avatar.png'


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [bio, setBio] = useState('')
    const [messanger, setMessanger] = useState('')
    const [instagram, setInstagram] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('')
    const [photo, setPhoto] = useState()
    const {CreateUser,  setUserName, user, createUserData} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        let phone;

        try{
             await CreateUser(email, password)
             await setUserName(displayName)
             await createUserData(displayName, email, bio, messanger, instagram, phoneNumber, avatar)
             navigate('/profile')


            

        }catch (e) {
            setError(e.message)
        }
    }
  return (
    <div className='auth'>
      
      <form onSubmit={handleSubmit}>
      <div className='inputBox'>
            <input onChange={(e) => {setDisplayName(e.target.value)}} type="text"  required/>
            <span>username</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setEmail(e.target.value)}} pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g' required/>
            <span>Email</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setPassword(e.target.value)}} type="passowrd"  required/>
            <span>Password</span>
        </div >
        <div className='inputBox'>
            <input onChange={(e) => {setBio(e.target.value)}} type="text" required/>
            <span>Bio</span>
        </div>
        <div className='box'>
            <input onChange={(e) => {setMessanger(e.target.value)}} type="text" required/>
            <span>messanger</span>
        </div>
        <div className='box'>
            <input onChange={(e) => {setInstagram(e.target.value)}} type="text" required/>
            <span>instagram</span>
        </div>
        <div className='box'>
            <input onChange={(e) => {setPhoneNumber(e.target.value)}} type="tel" required/>
            <span>Phone number</span>
        </div>
        <p>Already have an account? <Link to='/signin' className='link'>Sign In</Link></p>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;


