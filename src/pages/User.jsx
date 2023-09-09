import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { doc, collection, query, where, onSnapshot} from 'firebase/firestore'
import {auth, db} from '../firebase'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import tiket from '../assets/tiket.webp'
import '../styles/main.css'
import '../styles/offer.css'

import emailIcon from '../assets/email.webp'
import messangerIcon from '../assets/messanger.webp'
import instagramIcon from '../assets/instagram.webp'
import priceIcon from '../assets/price.webp'
import offerIcon from '../assets/offer.webp'
import Arrow from '../assets/arrow.webp'
import Cancel from '../assets/cancel.webp'
import { UserAuth } from '../context/AuthContext';
import { FaStar } from 'react-icons/fa'
import avatar from '../assets/avatar.webp'
import Search from '../components/Search'
import Offer from '../components/Offer'

function User() {
  const {createRequest, deleteRequest, createReview, user} = UserAuth()
  const {id} = useParams()
  const [offers, setOffers] = useState()
  const [User, setUser] = useState({})
  const [requestContent, setRequestContent] = useState('')
  const [requestPrice, setRequestPrice] = useState('')
  const [requestState, setRequestState] = useState()
  const [requestId, setRequestId] = useState()
  const cr = collection(db, 'users')
  const filtre = query(cr, where('id', '==',`${id}`))
  const filtre2 = query(collection(db, 'offers'), where('authorId', '==',`${id}`))
  const myRequest = query(collection(db, 'requests'), where('resId', '==', `${id}`), where('senderId', '==', `${auth?.currentUser?.uid}`))
  const reviewFilter = query(collection(db, 'reviews'), where('resId', '==',`${id}`))

  const [isFirstReview, setIsFirstReview] = useState(true)
  const [reviewId, setReviewId] = useState()
  const [deals, setDeals] = useState()
  const [rci, setRci] = useState()
  const [rri, setRri] = useState()
  const [reviewContent, setReviewContent] = useState()
  const [reviewRate, setReviewRate] = useState()
  const [reviews, setReviews] = useState([])
  const [requestMessage, setRequestMessage] = useState()
  const [hover, setHover] = useState(null);
  const [stars, setStars] = useState()
  const [docId, setDocId] = useState()
  const [tDeals, setTDeals] = useState()
  const navigate = useNavigate()
  const [reviewAdded, setReviewAdded] = useState(false)
  const [requestCancel, setRequestCancel] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [bio, setBio] = useState('')

  
  
  useEffect(() => {
    onSnapshot((filtre2), (data) => {
      setOffers(data.docs)
      
  })
  },  [user])

  useEffect(() => {

    if (auth.currentUser && id == auth.currentUser.uid) {
      navigate('/profile')
    }
  
    onSnapshot(collection(db, 'requests'), (data) => {
      data.docs.forEach(doc => {
        if(doc.data().resId == id && doc.data().senderId == auth?.currentUser?.uid) {
          setRequestState(doc.data().state)
          setRequestId(doc.id)
          setRequestMessage(doc.data().message)
        }
      }
          
        )
    })

    onSnapshot(filtre, (data) => {
      data.docs.forEach((doc) => {
        setUser(doc.data())
        setStars(doc.data().stars)
        setTDeals(doc.data().deals)
        setDocId(doc.id)
    })})

    onSnapshot((reviewFilter), (data) => {
      setReviews(data.docs)
      
    })

    onSnapshot((query(collection(db, 'reviews'), where('senderId', '==',`${auth.currentUser?.uid}`))), (data) => {
      data.docs.forEach(doc => {
        setIsFirstReview(false)
          setReviewId(doc.id)
          setDeals(doc.data().deals)
          setRci(doc.data().content)
          setRri(doc.data().rate)
      })
  })

  onSnapshot((query(cr, where('email', '==',`${user?.email}`))), (data) => {
    data.docs.forEach(doc => {
      setBio(doc.data().bio)
    })
  })

  },  [user])


  
  

  


const handleRequest = (e) => {
  e.preventDefault()
  !user?
   navigate('/signin')
   :
  createRequest(auth.currentUser?.uid, auth.currentUser?.displayName, id, User?.name, requestContent, requestPrice),
  setRequestSent(true),
  setTimeout(() => {setRequestSent(false)}, 1500)
}






const handleReview = (e) => {
  e.preventDefault()
  setRequestState(null)
  deleteRequest(doc(db, 'requests', `${requestId}`))
  createReview(auth.currentUser.uid, auth.currentUser.photoURL, auth.currentUser.displayName, User.id, User.name, reviewContent, reviewRate, reviewId, isFirstReview, deals, rri, rci, stars, docId, bio)
  setReviewAdded(true)
  setTimeout(() => {setReviewAdded(false)}, 1500)
}



const firstName = User.name?.split(' ')[0]

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
        <h2 className="senderName">{review.data().senderName?.split(' ')[0]}</h2>
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
            {reviewAdded &&
                <div className='pop'>
                    <h3>review added</h3>
                </div>
            }
            {requestCancel &&
                <div className='pop'>
                    <h3>you canceled something</h3>
                </div>
            }
            {requestSent &&
                <div className='pop'>
                    <h3>you sent something</h3>
                </div>
            }                    
        </div>
    <div className='profile'>
      <div className="fields">
      <div className='user-info-display'>

      <div className='photo-section'>
      <div className="profile-deals">
            <i className="fa-regular fa-handshake fa-xl" ></i>
            <h3>{User && tDeals? tDeals : "0"}</h3>
          </div>
          <div className="profile-rate">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#FFB800">
              <path transform='scale(0.6)' d="M17.5 0L23.1574 9.50482L34.1435 11.8328L26.6539 20.035L27.7862 30.9786L17.5 26.543L7.21376 30.9786L8.34608 20.035L0.85651 11.8328L11.8426 9.50482L17.5 0Z" fill="#FFB800"/>
            </svg>
            <h3>{User && (stars/tDeals)? (stars/tDeals).toFixed(1) : "0"}</h3>
          </div>
        <img src={User?.photoURL == '/assets/avatar-28c1f46a.png'? avatar : User.photoURL}/>
      </div>
        <h5 className='name'>{User && User.name}</h5>
        <div className='phoneNumber'>
          {User?.phoneNumber == 'Not available' ?
            <h2>not available</h2>
            :
            <>
              <h2>+216</h2>
              <h2>{User?.phoneNumber?.substr(0, 2)}</h2>
              <h2>{User?.phoneNumber?.substr(2, 3)}</h2>
              <h2>{User?.phoneNumber?.substr(5, 5)}</h2>
            </>
          }
        </div>
        <div className='bio'>{User && User.bio}</div>
      </div>
        
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
        
        {requestState == 'waiting' && 
        <div className='state-section'>
        <div className='waiting'>
        <span class="material-symbols-outlined">chat</span>
          <h2>Your Request Has Been Sent. Waiting For {firstName}’s Response</h2>
        </div>
        <div className='cancel-request' onClick={(e) => {
          e.preventDefault(),
          deleteRequest(doc(db, 'requests', `${requestId}`)),          
          setRequestState(null),
          setRequestCancel(true),
          setTimeout(() => {setRequestCancel(false)}, 1500)    
          }}>
          <span class="material-symbols-outlined">speaker_notes_off</span>
          <h2>Cancel request</h2>
        </div>
        </div>
        }

        {requestState == 'refuse' && 
        <div className='refused-state-section'>
          <div className='refused'>
          <span className="material-symbols-outlined">speaker_notes_off</span>
          <h2>{firstName} refused your request.</h2>
          </div>
          <div className='message'>
            <div className='message-title'>
            <span className="material-symbols-outlined">chat</span>
            <h2>Message from {firstName}</h2>
            </div>
            <h2>{requestMessage}</h2>
          </div>
          <button onClick={() => {
            deleteRequest(doc(db, 'requests', `${requestId}`))
            window.location.reload(false)}} className='profile-button'>ok</button>
        </div>}

        {requestState == 'accept' && 
        <div className="accept-state-section">
          <div className='accept'>
          <span class="material-symbols-outlined">mark_chat_read</span>
          <h2>{firstName} accepted your request.</h2>
          </div>
          <form onSubmit={handleReview} className='feedback-section'>
            <div>
            <label >
            <span class="material-symbols-outlined">history_edu</span>
            <h2>Write a review after you receive the service</h2>
            </label>
          <input type="text" onChange={(e) => {setReviewContent(e.target.value)}} maxLength={100} defaultValue={rci}/>
          <div className='stars'>
          {[...Array(5)].map((star, index) => {
            
        const currentRating = index + 1;
        return(
          <label>
            <input 
              type="radio" 
              name="rating"
              value={currentRating}
              onClick={() => {setReviewRate(currentRating)}}
           />
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" onMouseEnter={() => setHover(currentRating)}  onMouseLeave={() => setHover(null)} fill={currentRating <= (hover || reviewRate || rri) ? "#ffc107" : "#e4e5e9"}  className='star'>
              <path transform='scale(1)' d="M17.5 0L23.1574 9.50482L34.1435 11.8328L26.6539 20.035L27.7862 30.9786L17.5 26.543L7.21376 30.9786L8.34608 20.035L0.85651 11.8328L11.8426 9.50482L17.5 0Z" fill={currentRating <= (hover || reviewRate || rri) ? "#ffc107" : "#e4e5e9"}/>
            </svg>
          </label>
        );
      })}
          </div>

            </div>
          <button type='submit' disabled={!reviewRate && !rri}>Add Review</button>
        </form>
        </div>

        }
        <div className="info-box">
          <div className='info'>
            <img src={emailIcon} alt="" />
            <h3>{User && User.email}</h3>
          </div>
          <div className='info'>
          {User?.messanger == 'Not available'?
              <div className='not-avai'>
                  <img src={messangerIcon} alt="" />                
                  <h3>Not available</h3>
              </div>
                :
                <a href={User?.messanger} target='_blank'>
                  <img src={messangerIcon} alt="" />
                  <div>
                    <h3>{User?.messanger}</h3>
                    <h3>...</h3>
                  </div>
                </a>
            }
          </div>
          <div className='info'>
            {User?.instagram == 'Not available'?
              <div className='not-avai'>
                <img src={instagramIcon} alt="" />                
                <h3>Not available</h3>
              </div>
              :
              <a href={User?.instagram} target='_blank'>
              <img src={instagramIcon} alt="" />
              <div>
                <h3>{User?.instagram}</h3>
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
            <h3>{User?.dis}</h3>
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
      <div className="reviews">
        <div className='reviews-title'>
        <span className="material-symbols-outlined">history_edu</span>
        <h2>Reviews: ({reviews?.length})</h2>
        </div>
        <div className="reviews-content">
          {renderReviews}
        </div>
       </div>
      
    </div>
    </div>
  )
}

export default User
