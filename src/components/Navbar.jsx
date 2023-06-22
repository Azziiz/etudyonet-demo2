import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import {auth, db} from '../firebase'
import { collection} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
function navbar() {
  if (auth) {

  }
  const [photo, setPhoto] = useState('')
  const {user, logout} = UserAuth()

useEffect(() => {
  setPhoto(user.photoURL)
}, [user])



  return (

    <header>
      <div id='logo'>
        <img src={logo} alt="" />
        <a href="/" className='logo' >Etudyo<span>net</span></a>
      </div>
      <ul>
          <li><span className="material-symbols-outlined" title='notifications'>notifications</span></li>
          <li><a href="/profile">{photo ? <img src={photo} /> : <img src={avatar}/>}</a></li>
          <li onClick={logout}><span className="material-symbols-outlined">move_item</span></li>
      </ul>
    </header>

  )
}

export default navbar

