import { useEffect, useState } from 'react'
import '../styles/navbar.css'
import {db} from '../firebase'
import { collection, onSnapshot} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import { useNavigate} from 'react-router-dom'
import { AiOutlineQuestion } from 'react-icons/ai'
import { BiHomeAlt} from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import {VscSignIn } from 'react-icons/vsc'







function navbar() {

  const [photo, setPhoto] = useState('')
  const {user, logout} = UserAuth()
  const navigate = useNavigate()
  const [noti1, setNoti1] = useState(0)
  const [noti2, setNoti2] = useState(0)

useEffect(() => {
  user && setPhoto(user.photoURL)
  
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
            <li id={window.location.pathname == '/about' ? 'about' : 'undefined'} onClick={() => {navigate('/about')}}>about</li>
            <li id={window.location.pathname == '/contact' ? 'contact' : 'undefined'} onClick={() => {navigate('/#')}}>contact</li>
      </ul>
      <ul className='middle-section-icons'>
            <li onClick={() => {navigate('/'), scrollTo(0, 0)}} title='home'><BiHomeAlt size='24px' color={window.location.pathname == '/' ? '#FF8C00' : '#333C41'}/></li>
            <li onClick={() => {navigate('/about')}} title='about'><AiOutlineQuestion size='20px' color={window.location.pathname == '/about' ? '#FF8C00' : '#333C41'}/></li>
            <li onClick={() => {navigate('/#')}} title='contact'><FiPhoneCall size='24px'/></li>
      </ul>

    
    {user?
      <ul className='user-section'>
          <li onClick={() => {navigate('/notifications')}} title='notifications'>
            {
                (noti2 + noti1) != '0' && <div id='hey'>{noti1 + noti2}</div>
                
            }
            
            <MdOutlineNotifications size='24px' color={window.location.pathname == '/notifications' ? '#FF8C00' : '#333C41'}/>
            </li>
          <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}} title='profile'>{photo ? <img src={photo} /> : <img src={avatar}/>}</li>
          <li onClick={logout}><CgLogOut size='24px' id='logout'/></li>
      </ul> : 
      <div id='sginin-section'>
        <button id='signin' onClick={() => {navigate('/signin')}}>Sign in</button>
        <VscSignIn size='30px' title='sign in' id='signin-icon' onClick={() => {navigate('/signin')}}/>
      </div>
    }
    </header>

  )
}

export default navbar

