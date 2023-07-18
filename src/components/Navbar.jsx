import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import {auth, db} from '../firebase'
import { collection, onSnapshot, query, where} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useNavigate} from 'react-router-dom'
import { AiOutlineQuestion } from 'react-icons/ai'
import { BiHomeAlt} from "react-icons/bi";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineNotifications } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";







function navbar(props) {

  const [photo, setPhoto] = useState('')
  const {user, logout} = UserAuth()
  const navigate = useNavigate()
  const [noti1, setNoti1] = useState(0)
  const [noti2, setNoti2] = useState(0)
  const filter1 = query(collection(db, 'requests'), where('state', '!=', 'waiting'))
  const filter2 = query(collection(db, 'requests'),where('senderId', '==', `${user?.uid}`))
  const filter3 = query(collection(db, 'requests'),where('state', '==', 'waiting'))
  const filter4 = query(collection(db, 'requests'),where('resId', '==', `${user.uid}`))

useEffect(() => {
  setPhoto(user.photoURL)
  
  onSnapshot(collection(db, 'requests'), (data) => {
    setNoti1(0)
    data.docs?.forEach(doc => {
      if(doc.data().state != 'waiting' && doc.data().senderId == user?.uid) {
        setNoti1(noti1 => noti1 + 1)
      }
    }
    )
  })
  
  onSnapshot(collection(db, 'requests'), (data) => {
    setNoti2(0)
    data.docs?.forEach(doc =>{
      if(doc.data().state == 'waiting' && doc.data().resId == user?.uid) {
        setNoti2(noti2 => noti2 + 1)
      }
    })
  })
  
  
}, [user])



  return (

    <header className='navbar'>
      <div id='logo' onClick={() => {navigate('/'), scrollTo(0, 0)}}>
        <img src={logo} alt="" />
        <h2>Etudyo<span>net</span></h2>
      </div>
      <ul className='middle-section'>
            <li id={window.location.pathname == '/' ? 'home' : 'undefined'} onClick={() => {navigate('/'), scrollTo(0, 0)}} >home</li>
            <li id={window.location.pathname == '/about' ? 'about' : 'undefined'}>about</li>
            <li id={window.location.pathname == '/contact' ? 'contact' : 'undefined'}>contact</li>
      </ul>
      <ul className='middle-section-icons'>
            <li onClick={() => {navigate('/'), scrollTo(0, 0)}} title='home'><BiHomeAlt size='24px' color={window.location.pathname == '/' ? '#FF8C00' : '#333C41'}/></li>
            <li onClick={() => {navigate('/#'), scrollTo(0, 0)}} title='about'><AiOutlineQuestion size='20px'/></li>
            <li onClick={() => {navigate('/#'), scrollTo(0, 0)}} title='contact'><FiPhoneCall size='24px'/></li>
      </ul>

    

      <ul className='user-section'>
          <li onClick={() => {navigate('/notifications'), scrollTo(0, 0)}} title='notifications'>
            {(noti2 + noti1) !== 0 && <div id='hey'>{noti1 + noti2}</div>}
            
            <MdOutlineNotifications size='24px' color={window.location.pathname == '/notifications' ? '#FF8C00' : '#333C41'}/>
            </li>
          <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}} title='profile'>{photo ? <img src={photo} /> : <img src={avatar}/>}</li>
          <li onClick={logout}><CgLogOut size='24px' /></li>
      </ul>
    </header>

  )
}

export default navbar

