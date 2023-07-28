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
import Search from '../components/Search'
import priceIcon from '../assets/price.png'
import offerIcon from '../assets/offer.png'
import tiket from '../assets/tiket.png'
import emailIcon from '../assets/email.png'
import messangerIcon from '../assets/messanger.png'
import instagramIcon from '../assets/instagram.png'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { MdSettings } from 'react-icons/md'





 function Profile() {
  const {user, upload, createOffer, deleteOffer} = UserAuth()
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
  
    })})

    if(user?.photoURL) {
      setPhotoURL(user.photoURL)
    }

 }, [user])


  







useEffect(() => {
  setRNum(0)
  reviews?.forEach(review => {
    review?.data().content != null && setRNum(num => num + 1)
  })
})
 


  
  


  const handleChange = (e) => {
    if(e.target.files[0]) {
      setImage(e.target.files[0])
    }
    
  }



  const handleOffer = (e) => {
    e.preventDefault()
    createOffer(user.displayName, phoneNumber, offerContent, offerPrice, photoURL)
    document.getElementById('my-text').value = ''
    document.getElementById('price').value = ''
    setOfferContent('')

  }



  const handleClick = () => {
    upload(image, user, setLoading, docRef)
  }




 


const renderOffers = offers?.map(offer => 
        <div className='profile-offer' key={offer.id}>
            <div className='offer-top'>
              <div className='offer-user-info'>
                <img src={photoURL} alt="" />
                <div>
                  <h3>{user?.displayName}</h3>
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





  const renderReviews = reviews?.map(review => 
    review.data().content != null && 
    
    <div className="review" key={review.id}>
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
    <div className='profile'>
      <Navbar/>
      <MdSettings className="setting" size='30px'  onClick={() => {navigate('/settings')}}/>
      <div className="fields">
        <div className='photo-section'>
          <button className='photo-button'>
            <span className="material-symbols-outlined">edit</span>
            <input type="file" onChange={handleChange} />
          </button>
          <div className="profile-deals">
            <i className="fa-regular fa-handshake fa-xl" ></i>
            <h3>{user && deals? deals : "0"}</h3>
          </div>
          <div className="profile-rate">
            <i className="fa-solid fa-star fa-xl"></i>
            <h3>{user && (stars/deals)? (stars/deals).toFixed(1) : "0"}</h3>
          </div>
          <img src={photoURL}/>
       </div>
       {image && 
       <div className='photo-buttons'>
          <button hidden={!image} onClick={() => {setLoading(false), window.location.reload(false)}}></button>
          {loading? 
            <button>
              <i className="fa fa-spinner fa-spin"></i>
            </button> :
            <button disabled={loading || !image} hidden={!image} onClick={handleClick}>upload</button>
          }
       </div>
       }
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
            <input type="text" onChange={(e) => {setOfferPrice(e.target.value)}} pattern="\d*" maxLength="5" min='0' required id='price'/>
            <div className='offer-placeholder'>
              <img src={priceIcon} alt="" />
              <h3>The starting Price</h3>
            </div>
            <button type='submit'>Add</button>
          </div>   
        </form>
        <div className="info-box">
          <div className='info'>
            <img src={emailIcon} alt="" href={user && user.email}/>
            <h3>{user && user.email}</h3>
          </div>
          <div className='info'>
            <a href={user && messanger} target='_blank'>
              <img src={messangerIcon} alt="" />
              <div>
                <h3>{user && messanger}</h3>
                <h3>...</h3>
              </div>
            </a>
          </div>
          <div className='info'>
          <a href={user && instagram} target='_blank'>
              <img src={instagramIcon} alt="" />
              <div>
                <h3>{user && instagram}</h3>
                <h3>...</h3>
              </div>
            </a>
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
