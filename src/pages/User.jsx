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
import Arrow from '../assets/arrow.png'
import Cancel from '../assets/cancel.png'
import { UserAuth } from '../context/AuthContext';
import { FaStar } from 'react-icons/fa'
import avatar from '../assets/avatar.png'

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
  const myRequest = query(collection(db, 'requests'), where('resId', '==', `${id}`))
  const reviewFilter = query(collection(db, 'reviews'), (where('resId', '==',`${id}`), where('content', '!=', null)))

  const [isFirstReview, setIsFirstReview] = useState(true)
  const [reviewId, setReviewId] = useState()
  const [deals, setDeals] = useState()
  const [rci, setRci] = useState()
  const [rri, setRri] = useState()
  const [reviewContent, setReviewContent] = useState()
  const [reviewRate, setReviewRate] = useState()
  const [reviews, setReviews] = useState()
  const [requestMessage, setRequestMessage] = useState()
  const [hover, setHover] = useState(null);
  const [stars, setStars] = useState()
  const [docId, setDocId] = useState()
  
  
  useEffect(() => {
    onSnapshot((filtre2), (data) => {
      setOffers(data.docs)
      
  })
  },  [user])

  useEffect(() => {
    onSnapshot(myRequest, (data) => {
      data.docs.forEach(doc => {
        setRequestState(doc.data().state)
        setRequestId(doc.id)
        setRequestMessage(doc.data().message)
      }
          
        )
    })
  },  [user])


  
  
  useEffect(() => {
    onSnapshot(filtre, (data) => {
      data.docs.forEach((doc) => {
        setUser(doc.data())
        setStars(doc.data().stars)
        setDocId(doc.id)
    })})
  }, [user])

  
  useEffect(() => {
    onSnapshot((reviewFilter), (data) => {
      setReviews(data.docs)
    })
  },  [user])


useEffect(() => {
  if (auth.currentUser && id == auth.currentUser.uid) {
    window.location.href = '/profile'
  }

}, [user])



const handleRequest = (e) => {
  e.preventDefault()
  createRequest(auth.currentUser?.uid, auth.currentUser?.displayName, id, User?.name, requestContent, requestPrice)
}

useEffect(() => {
  onSnapshot((query(collection(db, 'reviews'), where('senderId', '==',`${auth.currentUser?.uid}`))), (data) => {
      data.docs.forEach(doc => {
        setIsFirstReview(false)
          setReviewId(doc.id)
          setDeals(doc.data().deals)
          setRci(doc.data().content)
          setRri(doc.data().rate)
      })
  })
}, [auth.currentUser])




const handleReview = (e) => {
  deleteRequest(doc(db, 'requests', `${requestId}`))
  window.location.reload(false)
  createReview(auth.currentUser.uid, auth.currentUser.photoURL, auth.currentUser.displayName, User.id, User.name, reviewContent, reviewRate, reviewId, isFirstReview, deals, rri, rci, stars, docId)
}



const firstName = User.name?.split(' ')[0]

const renderOffers = offers?.map(offer => 
  <div className='profile-offer'>
      <div className='offer-top'>
        <img src={User?.photoURL} alt="" />
        <div>
          <h3>{User?.name}</h3>
          <div className='phoneNumber'>
            <h2>+216</h2>
            <h2>{User?.phoneNumber.substr(0, 2)}</h2>
            <h2>{User?.phoneNumber.substr(2, 3)}</h2>
            <h2>{User?.phoneNumber.substr(5, 5)}</h2>
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


const renderReviews = reviews?.map(review => 
    <div className="review">
      <img src={review.data().senderPhoto? review.data().senderPhoto : avatar} alt=""/>
      <div className="deals">
        <h3>{review.data().deals}x</h3>
        <i className="fa-regular fa-handshake fa-xl" ></i>
      </div>
      <h2 className="senderName">{review.data().senderName}</h2>
      <h2 className="review-content">{review.data().content}</h2>
      <div className='stars'>
          {[...Array(5)].map((star, index) => {    
            const currentRating = index + 1;
            return(
              <label>
                <FaStar 
                  className='star' 
                  size={25} 
                  color={currentRating <= review.data().rate ? "#ffc107" : "#e4e5e9"}
                />
              </label>
            );
          })}
        </div>

    </div>
  )


  return (
    
    <div className='profile'>
      <Navbar/>
      <div className="fields">
        <img src={User?.photoURL}/>
        <h5 className='name'>{User && User.name}</h5>
        <div className='phoneNumber'>
          <h2>+216</h2>
          <h2>{User?.phoneNumber?.substr(0, 2)}</h2>
          <h2>{User?.phoneNumber?.substr(2, 3)}</h2>
          <h2>{User?.phoneNumber?.substr(5, 5)}</h2>
        </div>
        <div className='bio'>{User && User.bio}</div>
        
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
        <div className='cancel-request' onClick={() => {
          window.location.reload(false)
          deleteRequest(doc(db, 'requests', `${requestId}`))}}>
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
            <FaStar 
              className='star' 
              size={25} 
              color={currentRating <= (hover || reviewRate || rri) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
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
            <img src={messangerIcon} alt="" />
            <h3>{User && User.messanger}</h3>
          </div>
          <div className='info'>
            <img src={instagramIcon} alt="" />
            <h3>{User && User.instagram}</h3>
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
      <div className="reviews">
        <div className='reviews-title'>
        <span class="material-symbols-outlined">history_edu</span>
        <h2>Reviews: ({reviews?.length})</h2>
        </div>
        <div className="reviews-content">
          {renderReviews}
        </div>
       </div>
      
    </div>
  )
}

export default User
