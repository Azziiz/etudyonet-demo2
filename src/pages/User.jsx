import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { doc, collection, query, where, onSnapshot} from 'firebase/firestore'
import {auth, db} from '../firebase'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import tiket from '../assets/tiket.png'
import '../styles/main.css'
import emailIcon from '../assets/email.png'
import messangerIcon from '../assets/messanger.png'
import instagramIcon from '../assets/instagram.png'
import priceIcon from '../assets/price.png'
import offerIcon from '../assets/offer.png'
import { UserAuth } from '../context/AuthContext';


function User() {
  const {createRequest, deleteRequest} = UserAuth()
  const {id} = useParams()
  const [offers, setOffers] = useState()
  const [user, setUser] = useState({})
  const [requestContent, setRequestContent] = useState('')
  const [requestPrice, setRequestPrice] = useState('')
  const [requestState, setRequestState] = useState()
  const [requestId, setRequestId] = useState()
  const cr = collection(db, 'users')
  const filtre = query(cr, where('id', '==',`${id}`))
  const filtre2 = query(collection(db, 'offers'), where('authorId', '==',`${id}`))
  const myRequest = query(collection(db, 'requests'), where('senderId', '==', `${auth.currentUser?.uid}`))
  
  
  useEffect(() => {
    onSnapshot((filtre2), (data) => {
      setOffers(data.docs)
      
  })
  })

  useEffect(() => {
    onSnapshot(myRequest, (data) => {
      data.docs.forEach(doc => {
        setRequestState(doc.data().state)
        setRequestId(doc.id)
      }
          
        )
    })
  })
  
  
  useEffect(() => {
    onSnapshot(filtre, (data) => {
      data.docs.forEach((doc) => {
        setUser(doc.data())
    })})
  })


    if (auth.currentUser && id == auth.currentUser.uid) {
      return <Navigate to='/profile' />
    }


const handleRequest = (e) => {
  e.preventDefault()
  createRequest(auth.currentUser?.uid, auth.currentUser?.displayName, id, user?.name, requestContent, requestPrice)
}





const firstName = user.name?.split(' ')[0]

const renderOffers = offers?.map(offer => 
  <div className='profile-offer'>
      <div className='offer-top'>
        <img src={user?.photoURL} alt="" />
        <div>
          <h3>{user?.name}</h3>
          <div className='phoneNumber'>
            <h2>+216</h2>
            <h2>{user?.phoneNumber.substr(0, 2)}</h2>
            <h2>{user?.phoneNumber.substr(2, 3)}</h2>
            <h2>{user?.phoneNumber.substr(5, 5)}</h2>
          </div>
        </div>
      </div>
      <div className='offer-content'>
        <h3>{offer.data().content}</h3>
      </div>
      <div className="offer-footer">
        <h4>Starting at <span>{offer.data().price}Dt</span></h4>
      </div>
  </div>
)


  return (
    
    <div className='profile'>
      <Navbar/>
      <div className="fields">
        <img src={user?.photoURL}/>
        <h5 className='name'>{user && user.name}</h5>
        <div className='phoneNumber'>
          <h2>+216</h2>
          <h2>{user?.phoneNumber?.substr(0, 2)}</h2>
          <h2>{user?.phoneNumber?.substr(2, 3)}</h2>
          <h2>{user?.phoneNumber?.substr(5, 5)}</h2>
        </div>
        <div className='bio'>{user && user.bio}</div>
        
        {requestState == null && <form className='offer-form' onSubmit={handleRequest}>
          <div className='offer-box'>
            <input type="text" onChange={(e) => {setRequestContent(e.target.value)}}   required/>
            <div className='offer-placeholder'>
              <img src={offerIcon} alt="" />
              <h3>What you want {firstName} to do for you</h3>
            </div>
          </div>
          <div className='offer-box'>
            <input type="text" onChange={(e) => {setRequestPrice(e.target.value)}}  required/>
            <div className='offer-placeholder'>
              <img src={priceIcon} alt="" />
              <h3>You will pay</h3>
            </div>
            <button >Send Request</button>
          </div>   
        </form>}
        
        {requestState == 'waiting' && <h1>wait for a respond</h1>}

        {requestState == 'refuse' && 
        <div>
          <h1>your request has ben refused</h1>
          <button onClick={() => {
            window.location.reload(false)
            deleteRequest(doc(db, 'requests', `${requestId}`))}}>ok</button>
        </div>}
        <div className="info-box">
          <div className='info'>
            <img src={emailIcon} alt="" />
            <h3>{user && user.email}</h3>
          </div>
          <div className='info'>
            <img src={messangerIcon} alt="" />
            <h3>{user && user.messanger}</h3>
          </div>
          <div className='info'>
            <img src={instagramIcon} alt="" />
            <h3>{user && user.instagram}</h3>
          </div>   
        </div>
      </div>

      <div className='offers-display'>
        <div className='offers-section-title'>
          <img src={tiket} alt="" />
          <h3>{firstName}'s offers</h3>
        </div>
        <div className='offers-section'>
          {renderOffers}
        </div>
      </div>

      
    </div>
  )
}

export default User
