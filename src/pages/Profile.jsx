import { useState, useEffect } from 'react'
import {UserAuth} from '../context/AuthContext'
import {auth, db} from '../firebase'

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where
} from 'firebase/firestore'
import'../styles/profile.css'
import '../styles/popups.css'
import '../styles/offer.css'
import avatar from '../assets/avatar.webp'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import priceIcon from '../assets/price.webp'
import offerIcon from '../assets/offer.webp'
import tiket from '../assets/tiket.webp'
import emailIcon from '../assets/email.webp'
import messangerIcon from '../assets/messanger.webp'
import instagramIcon from '../assets/instagram.webp'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar-edit'
import { MdSettings } from 'react-icons/md'
import Cropper from '../components/cropper'
import Offer from '../components/Offer'
import Cutter from '../components/cutter'
import logo from '../assets/logo.webp'





 function Profile() {
  const {user, upload, createOffer, deleteOffer, photoChange, setPhotoChange} = UserAuth()
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
  const [reviews, setReviews] = useState()
  const cr = collection(db, 'users')
  const filtre = query(cr, where('email', '==',`${user?.email}`))
  const offerFiltre = query(collection(db, 'offers'), where('authorId', '==',`${auth.currentUser?.uid}`))
  const reviewFilter = query(collection(db, 'reviews'), where('resId', '==',`${auth?.currentUser?.uid}`))
  const [deals, setDeals] = useState()
  const [stars, setStars] = useState()
  const [rNum, setRNum] = useState(0)
  const navigate = useNavigate()
  const docRef = doc(db, 'users', `${docId}`)
  const firstName = user?.displayName?.split(' ')[0]
  const [offerDone, setOfferDone] = useState(false)
  const [offerDeleted, setOfferDeleted] = useState(false)
  const [choose, setChoose] = useState(false)
  const [pre, setPre] = useState()
  const [pError, setPError] = useState()
  const [dis, setDis] = useState()





  useEffect(() => {

    onSnapshot((offerFiltre), (data) => {
      setOffers(data.docs)
    })

    onSnapshot((reviewFilter), (data) => {
      setReviews(data.docs)
    })

    onSnapshot(filtre, (data) => {
      data.docs.forEach((doc) => {
        setBio(doc.data().bio) 
        setMessanger(doc.data().messanger)
        setInstagram(doc.data().instagram)
        setDocId(doc.id)
        setPhoneNumber(doc.data().phoneNumber)
        setDeals(doc.data().deals)
        setStars(doc.data().stars)
        setDis(doc.data().dis)
  
    })})

    if(user?.photoURL) {
      setPhotoURL(user.photoURL)
    }

    
     

 }, [user])








useEffect(() => {
  if(photoChange != null) {
    upload(user, setLoading, docRef)
  }
  setRNum(0)
  reviews?.forEach(review => {
    review?.data().content != null && setRNum(num => num + 1)
  })
})
 


  
  






  const handleOffer = (e) => {
    e.preventDefault()
    document.getElementById('my-text').value = ''
    document.getElementById('price').value = ''
    document.getElementById('offer-image-input').value = ''
    document.getElementById('offer-image').disabled = false
    document.getElementById('price').blur()
    createOffer(user.displayName, phoneNumber, offerContent, offerPrice, photoURL, bio)
    setOfferContent('')
    setOfferDone(true)
    setTimeout(() => {setOfferDone(false)}, 1500)

    

  }

  


 







const renderOffers = offers?.map(offer => 
        <Offer offer={offer}/>
  )





  const renderReviews = reviews?.map(review => 
    review.data().content != null && 
    
    <div className="review" key={review.id}>
      <div className="deals">
        <i className="fa-regular fa-handshake fa-xl" ></i>
        <h3>{review.data().deals}</h3>
      </div>

      <h2 className="review-content">{review.data().content}</h2>

      <div className="review-bottom"> 
        <div className="sender-section">
          <img src={review.data().senderPhoto? review.data().senderPhoto : avatar} alt=""/>
          <div className="sender-info">
            <h2 className="senderName">{review.data().senderName}</h2>
            <h2 className='senderBio'>{review.data().senderBio}</h2>
          </div>
        </div>
        <div className='stars'>
            {[...Array(5)].map((star, index) => {    
              const currentRating = index + 1;
              return(
                <label>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 19" fill={currentRating <= review.data().rate ? "#ffc107" : "#e4e5e9"} className='star'>
                    <path transform='scale(0.6)' d="M17.5 0L23.1574 9.50482L34.1435 11.8328L26.6539 20.035L27.7862 30.9786L17.5 26.543L7.21376 30.9786L8.34608 20.035L0.85651 11.8328L11.8426 9.50482L17.5 0Z" fill="#FFB800"/>
                  </svg>
                </label>
              );
            })}
          </div>
      </div>
          
    </div>
  )




  return (
    <div>
      <Search />
      <div className='popups'>
        {offerDone &&
          <div className='pop'>
            <h3>You added an offer</h3>
          </div>
        }
        {
          offerDeleted &&
          <div className='pop'>
          <h3>you delete something</h3>
        </div>
        }
      </div>
    <div className='profile'>
      
      <div className="fields">
        <div className='user-info-display'>
        <div className='photo-section'>
          <div className="profile-deals">
            <i className="fa-regular fa-handshake fa-xl" ></i>
            <h3>{user && deals? deals : "0"}</h3>
          </div>
          <div className="profile-rate">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#FFB800">
              <path transform='scale(0.6)' d="M17.5 0L23.1574 9.50482L34.1435 11.8328L26.6539 20.035L27.7862 30.9786L17.5 26.543L7.21376 30.9786L8.34608 20.035L0.85651 11.8328L11.8426 9.50482L17.5 0Z" fill="#FFB800"/>
            </svg>
            <h3>{user && (stars/deals)? (stars/deals).toFixed(1) : "0"}</h3>
          </div>
          <Cropper photoURL={photoURL}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className='setting' overflow="visible" onClick={() => {navigate('/settings'), scrollTo(0, 0)}}>
            <path d="M16.4054 20.5C18.958 20.5 21.0271 18.4854 21.0271 16C21.0271 13.5146 18.958 11.5 16.4054 11.5C13.8529 11.5 11.7838 13.5146 11.7838 16C11.7838 18.4854 13.8529 20.5 16.4054 20.5Z" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.148 13.5931L26.457 9.6172L28.7297 7L25.6486 4L22.9753 6.22443L18.8053 4.55461L17.8463 1H14.8356L13.8621 4.6017L9.78787 6.27394L7.16216 4L4.08108 7L6.32006 9.68327L4.65493 13.6694L1 14.5V17.5L4.69901 18.4833L6.41616 22.4495L4.08108 25L7.16216 28L9.92152 25.8105L13.9359 27.4185L14.8649 31H17.9459L18.8772 27.4198L22.9606 25.7732C23.6412 26.2469 25.6486 28 25.6486 28L28.7297 25L26.4434 22.3741L28.1349 18.397L31.8107 17.4658L31.8108 14.5L28.148 13.5931Z" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </div>
        <h5 className='name'>{user && user.displayName}</h5>
        <div className='phoneNumber'>
        {phoneNumber == 'Not available'?
          <h2>Not available</h2>:
          <>
            <h2>+216</h2>
            <h2>{phoneNumber.substr(0, 2)}</h2>
            <h2>{phoneNumber.substr(2, 3)}</h2>
            <h2>{phoneNumber.substr(5, 5)}</h2>
          </>
          }
        </div>
        <div className='bio'>{user && bio}</div>
        
        </div>
        <form className='offer-form' onSubmit={handleOffer}>
          <Cutter />
          <div className='offer-box'>
            <textarea  onChange={(e) => {setOfferContent(e.target.value)}} id='my-text'  required maxLength={100}/>
            <p className='letter-counter'>{offerContent.length}/100</p>
            <div className='offer-placeholder'>
              <img src={offerIcon} alt="" />
              <h3>The offer</h3>    
            </div>
          </div>
          <div className='offer-box'>
            <input type="text" onChange={(e) => {setOfferPrice(e.target.value)}} pattern="[0-9 ]+" maxLength="5" min='0' required id='price'/>
            <div className='offer-placeholder'>
              <img src={priceIcon} alt="" />
              <h3>The starting Price</h3>
            </div>
              <button onClick={() => {document.getElementById('offer-image-input').value == '' && document.getElementById('offer-image').click()}}>Add</button>
            </div>
        </form>
        <div className="info-box">
          <div className='info'>
            <img src={emailIcon} alt="" href={user && user.email}/>
            <h3>{user && user.email}</h3>
          </div>
          <div className='info'>
            {messanger == 'Not available'?
              <div className='not-avai'>
                  <img src={messangerIcon} alt="" />                
                  <h3>Not available</h3>
              </div>
                :
                <a href={user && messanger} target='_blank'>
                  <img src={messangerIcon} alt="" />
                  <div>
                    <h3>{user && messanger}</h3>
                    <h3>...</h3>
                  </div>
                </a>
            }
          </div>
          <div className='info'>
            {instagram == 'Not available'?
              <div className='not-avai'>
                <img src={instagramIcon} alt="" />                
                <h3>Not available</h3>
              </div>
              :
              <a href={user && instagram} target='_blank'>
              <img src={instagramIcon} alt="" />
              <div>
                <h3>{user && instagram}</h3>
                <h3>...</h3>
              </div>
            </a>
            }

          </div>   
        </div>
        <div className="dis">
            <div className="title">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.3999 9.40001C9.3999 5.19998 15.9999 5.20001 15.9999 9.40001C15.9999 12.4 12.9999 11.7999 12.9999 15.3999" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 20.2121L13.0119 20.1987" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h2>About {firstName} : </h2>
            </div>
            <h3>{dis}</h3>
        </div>
      </div>



      <div className='offers-display' id='offers-display'>
        <div className='offers-section-title'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#333C41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <h3>{firstName}'s offers</h3>
        </div>
        <div className='offers-section'>
          {renderOffers}
        </div>
      </div>
       <div className="reviews">
        <div className='reviews-title'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#333C41" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <h2>Reviews: ({rNum})</h2>
        </div>
        <div className="reviews-content">
          {renderReviews}
        </div>
       </div>
    </div>
    </div>
    
  )
}

export default Profile
