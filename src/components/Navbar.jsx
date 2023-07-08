import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import {auth, db} from '../firebase'
import { collection} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useNavigate} from 'react-router-dom'
function navbar() {

  const [photo, setPhoto] = useState('')
  const {user, logout} = UserAuth()
  const navigate = useNavigate()

useEffect(() => {
  setPhoto(user.photoURL)
}, [user])



  return (

    <header className='navbar'>
      <div id='logo'>
        <img src={logo} alt="" />
        <h2 onClick={() => {navigate('/'), scrollTo(0, 0)}}>Etudyo<span>net</span></h2>
      </div>
      <ul className='middle-section'>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
      </ul>
      <ul>
          <li onClick={() => {navigate('/notifications')}}><span className="material-symbols-outlined" title='notifications'>notifications</span></li>
          <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}}>{photo ? <img src={photo} /> : <img src={avatar}/>}</li>
          <li onClick={logout}><span className="material-symbols-outlined">move_item</span></li>
      </ul>
    </header>

  )
}

export default navbar

