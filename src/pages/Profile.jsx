import { useState, useEffect } from 'react'
import {UserAuth} from '../context/AuthContext'
import {auth, db} from '../firebase'

import {
  collection,
  doc,
  onSnapshot,
  query,
  where
} from 'firebase/firestore'
import'../styles/profile.css'
import avatar from '../assets/avatar.png'
import Navbar from '../components/Navbar'
import priceIcon from '../assets/price.png'
import offerIcon from '../assets/offer.png'
import tiket from '../assets/tiket.png'
import emailIcon from '../assets/email.png'
import messangerIcon from '../assets/messanger.png'
import instagramIcon from '../assets/instagram.png'





 function Profile() {
  const {user, logout, upload, createOffer, deleteOffer,  refuseRequest} = UserAuth()
  const [bio, setBio ] = useState('')
  const [messanger, setMessanger] = useState('')
  const [instagram, setInstagram] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [docId, setDocId] = useState()
  const [photoURL, setPhotoURL] = useState(avatar)
  const [offerContent, setOfferContent] = useState('')
  const [offerPrice, setOfferPrice] = useState('')
  const [offers, setOffers] = useState()
  const [requests, setRequests] = useState()
  const cr = collection(db, 'users')
  const filtre = query(cr, where('email', '==',`${user.email}`))
  const offerFiltre = query(collection(db, 'offers'), where('authorId', '==',`${auth.currentUser?.uid}`))
  const requestFilter = query(collection(db, 'requests'), where('resId', '==', `${auth.currentUser?.uid}`), where('state', '==', 'waiting'))


 useEffect(() => {
   onSnapshot((offerFiltre), (data) => {
     setOffers(data.docs)
 })

 }, [user])

 useEffect(() => {
   onSnapshot((requestFilter), (data) => {
     setRequests(data.docs)
    
 })
  
}, [user])
 
useEffect(() => {
  onSnapshot(filtre, (data) => {
    data.docs.forEach((doc) => {
      setBio(doc.data().bio) 
      setMessanger(doc.data().messanger)
      setInstagram(doc.data().instagram)
      setDocId(doc.id)
      setPhoneNumber(doc.data().phoneNumber)
  })})
  
}, [user])


  
  
const docRef = doc(db, 'users', `${docId}`)

  const handleChange = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0])
    }
    
  }


  useEffect(() => {
    if(user?.photoURL) {
      setPhotoURL(user.photoURL)
    }

  
  }, [user])



  

  const firstName = user.displayName?.split(' ')[0]

  


  const handleOffer = (e) => {
    e.preventDefault()
    createOffer(user.displayName, phoneNumber, offerContent, offerPrice, photoURL)
  }

  const handleClick = () => {
    upload(image, user, setLoading, docRef)

  }


const renderOffers = offers?.map(offer => 
        <div className='profile-offer'>
            <div className='offer-top'>
              <div className='offer-user-info'>
                <img src={photoURL} alt="" />
                <div>
                  <h3>{user?.displayName}</h3>
                  <div className='phoneNumber'>
                    <h2>+216</h2>
                    <h2>{phoneNumber.substr(0, 2)}</h2>
                    <h2>{phoneNumber.substr(2, 3)}</h2>
                    <h2>{phoneNumber.substr(5, 5)}</h2>
                  </div>
                </div>
              </div>
              <span className="material-symbols-sharp" onClick={() => {deleteOffer(offer.id)}}>delete</span>
            </div>
            <div className='offer-content'>
              <h3>{offer.data().content}</h3>   
            </div>
            <div className='offer-footer'>
              <h4>Starting at <span>{offer.data().price}Dt</span></h4>
            </div>
        </div>
  )



  const renderRequests = requests?.map(request => 
        <div>
          <button>yes</button>
          <button onClick={() => {refuseRequest(doc(db, 'requests', `${request.id}`))}}>no</button>
        </div>
  )

  return (
    
    <div className='profile'>
      <Navbar/>
      <div className="fields">

       {/*
       <input type="file" onChange={handleChange} />
        <button disabled={loading || !image} onClick={handleClick}>upload</button>
       */} 
        <img src={photoURL}/>
        <h5 className='name'>{user && user.displayName}</h5>
        <div className='phoneNumber'>
          <h2>+216</h2>
          <h2>{phoneNumber.substr(0, 2)}</h2>
          <h2>{phoneNumber.substr(2, 3)}</h2>
          <h2>{phoneNumber.substr(5, 5)}</h2>
        </div>
        <div className='bio'>{user && bio}</div>
        <form className='offer-form' onSubmit={handleOffer}>
          <div className='offer-box'>
            <textarea id='my-text' onChange={(e) => {setOfferContent(e.target.value)}}   required maxLength={100}/>
            <p id='letter-counter'>{offerContent.length}/100</p>
            <div className='offer-placeholder'>
              <img src={offerIcon} alt="" />
              <h3>The offer</h3>    
            </div>

          </div>
          <div className='offer-box'>
            <input type="text" onChange={(e) => {setOfferPrice(e.target.value)}} pattern='[0-9]' maxLength={7} min='0'required/>
            <div className='offer-placeholder'>
              <img src={priceIcon} alt="" />
              <h3>The starting Price</h3>
            </div>
            <button type='submit'>Add</button>
          </div>   
        </form>
        <div className="info-box">
          <div className='info'>
            <img src={emailIcon} alt="" />
            <h3>{user && user.email}</h3>
          </div>
          <div className='info'>
            <img src={messangerIcon} alt="" />
            <h3>{user && messanger}</h3>
          </div>
          <div className='info'>
            <img src={instagramIcon} alt="" />
            <h3>{user && instagram}</h3>
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
          {renderRequests}
        </div>
      </div>

    </div>
  )
}

export default Profile
