import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'
import '../styles/auth.css'
import avatar from '../assets/avatar.png'
import Navbar from '../components/Navbar'


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
             await createUserData(displayName, email, bio, messanger? messanger : 'Not available', instagram? instagram : 'Not available', phoneNumber? phoneNumber : 'Not available' , avatar, password)
             navigate('/profile')


            

        }catch (e) {
            setError(e.message)
        }
    }
  return (
    <div className='auth'>
      <Navbar />
      <form onSubmit={handleSubmit}>
      <div className='inputBox'>
            <input onChange={(e) => {setDisplayName(e.target.value)}} type="text" placeholder=' ' required/>
            <span>Username*</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setEmail(e.target.value)}} pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g' placeholder=' ' required/>
            <span>Email*</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setPassword(e.target.value)}} type="passowrd" placeholder=' ' required/>
            <span>Password*</span>
        </div >
        <div className='inputBox'>
            <input onChange={(e) => {setBio(e.target.value)}} type="text" placeholder=' ' required/>
            <span>Bio*</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setPhoneNumber(e.target.value)}} type="tel" placeholder=' '/>
            <span>Phone Number (optional)</span>
        </div>
        <div className='inputBox'>
            <input type='url' onChange={(e) => {setMessanger(e.target.value)}}  placeholder=' ' />
            <span>Facebook profile link (optional)</span>
        </div>
        <div className='inputBox'>
            <input type='url' onChange={(e) => {setInstagram(e.target.value)}}  placeholder=' '/>
            <span>Instagram profile link (optional)</span>
        </div>
        <p>Already have an account? <Link to='/signin' className='link'>Sign In</Link></p>
        <button>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup;


