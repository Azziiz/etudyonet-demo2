import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { doc, collection, query, where, onSnapshot} from 'firebase/firestore'
import {auth, db} from '../firebase'
import Navbar from '../components/Navbar'
import { useEffect } from 'react';
import tiket from '../assets/tiket.webp'
import '../styles/main.css'
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
  createReview(auth.currentUser.uid, auth.currentUser.photoURL, auth.currentUser.displayName, User.id, User.name, reviewContent, reviewRate, reviewId, isFirstReview, deals, rri, rci, stars, docId)
  setReviewAdded(true)
  setTimeout(() => {setReviewAdded(false)}, 1500)
}



const firstName = User.name?.split(' ')[0]

const renderOffers = offers?.map(offer => 
  <div className='offer'>
      <div className='offer-top'>
        <img src={User?.photoURL == '/assets/avatar-28c1f46a.png'? avatar : User.photoURL} alt="" />
        <div>
          <h3>{User?.name}</h3>
          <div className='phoneNumber'>
            {User?.phoneNumber == 'Not available'?
              <h2>Not available</h2>:
              <>
                <h2>+216</h2>
                <h2>{User?.phoneNumber?.substr(0, 2)}</h2>
                <h2>{User?.phoneNumber?.substr(2, 3)}</h2>
                <h2>{User?.phoneNumber?.substr(5, 5)}</h2>
              </>
            }
          </div>
        </div>
      </div>
      <div className='offer-content'>
        <h3>{offer.data().content}</h3>
      </div>
      <div className="offer-footer">
        <h4>STARTING AT<span>{offer.data().price}DT</span></h4>
      </div>
  </div>
)


const renderReviews = reviews?.map(review => 
  review.data().content != null &&
    
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
      <div className='photo-section'>
      <div className="profile-deals">
            <i className="fa-regular fa-handshake fa-xl" ></i>
            <h3>{User && tDeals? tDeals : "0"}</h3>
          </div>
          <div className="profile-rate">
            <i className="fa-solid fa-star fa-xl"></i>
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
                <img src={messangerIcon} alt="" />                
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
