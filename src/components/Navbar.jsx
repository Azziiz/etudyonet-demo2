import { useEffect, useState } from 'react'
import '../styles/navbar.css'
import {db} from '../firebase'
import { collection, onSnapshot} from 'firebase/firestore'
import { UserAuth } from '../context/AuthContext'
import avatar from '../assets/avatar.webp'
import logo from '../assets/logo.webp'
import { useNavigate} from 'react-router-dom'
import { MdOutlineNotifications } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import {VscSignIn } from 'react-icons/vsc'







function navbar() {

  const [photo, setPhoto] = useState('')
  const {user, logout} = UserAuth()
  const navigate = useNavigate()
  const [noti1, setNoti1] = useState(0)
  const [noti2, setNoti2] = useState(0)
  const [drop, setDrop] = useState(0)

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
            <li id={window.location.pathname == '/' ? 'home' : 'undefined'} onClick={() => {navigate('/'), scrollTo(0, 0)}} >Home</li>
            <li id={window.location.pathname == '/about' ? 'about' : 'undefined'} onClick={() => {navigate('/about')}}>About</li>
            <li id={window.location.pathname == '/contact' ? 'contact' : 'undefined'} onClick={() => {navigate('/#')}}>Contact</li>
      </ul>
      {user &&
        <div className='drop-down' >
          <ul>
          <li onClick={() => {navigate('/notifications')}} title='notifications'>
                  {(noti2 + noti1) != '0' && <div id='hey'>{noti1 + noti2}</div>}
                  <MdOutlineNotifications size='24px' color={window.location.pathname == '/notifications' ? '#FF8C00' : '#333C41'}/>
            </li>
          </ul>
          <span class="material-symbols-outlined" onClick={() => {setDrop(1)}}>menu</span>

          {drop == 1 &&
            <div className='white-space'>
              <span class="material-symbols-outlined"  onClick={() => {setDrop(2),setTimeout(() => {setDrop(0)}, 700)}}>close</span>
              <ul className='links'>
                <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}} id={window.location.pathname == '/profile' ? 'profile' : 'undefined'} title='profile'>Profile</li>
                
                <li id={window.location.pathname == '/' ? 'home' : 'undefined'} onClick={() => {navigate('/'), scrollTo(0, 0)}} >Home</li>
                <li id={window.location.pathname == '/about' ? 'about' : 'undefined'} onClick={() => {navigate('/about')}}>About</li>
                <li id={window.location.pathname == '/contact' ? 'contact' : 'undefined'} onClick={() => {navigate('/#')}}>Contact</li>
                <li onClick={logout}><button>Logout</button></li>
              </ul>
            </div>
          }
          {drop == 2 &&
          <>
              <div className='white-space2'>
              <span class="material-symbols-outlined"  onClick={() => {setDrop(2)}}>close</span>
              <ul className='links'>
                <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}} id={window.location.pathname == '/profile' ? 'profile' : 'undefined'} title='profile'>Profile</li>
                
                <li id={window.location.pathname == '/' ? 'home' : 'undefined'} onClick={() => {navigate('/'), scrollTo(0, 0)}} >Home</li>
                <li id={window.location.pathname == '/about' ? 'about' : 'undefined'} onClick={() => {navigate('/about')}}>About</li>
                <li id={window.location.pathname == '/contact' ? 'contact' : 'undefined'} onClick={() => {navigate('/#')}}>Contact</li>
                <li onClick={() => {setDrop(0), logout}}><button>Logout</button></li>
              </ul>
            </div>

          </>
              
          }
        </div>
      }

    
    {user?
      <ul className='user-section'>
          <li onClick={() => {navigate('/notifications'),scrollTo(0, 0)}} title='notifications'>
            {
                (noti2 + noti1) != '0' && <div id='hey'>{noti1 + noti2}</div>
                
            }
            
            <MdOutlineNotifications size='24px' color={window.location.pathname == '/notifications' ? '#FF8C00' : '#333C41'}/>
            </li>
          <li onClick={() => {navigate('/profile'), scrollTo(0, 0)}} title='profile'>{photo ? <img src={photo} /> : <img src={avatar}/>}</li>
          <button id='logout' onClick={() => {logout()}}>Logout</button>
      </ul> : 
      <div id='sginin-section'>
        <button id='signin' onClick={() => {navigate('/signin')}}>Sign in</button>
      </div>
    }
    </header>

  )
}

export default navbar

