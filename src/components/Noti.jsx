
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { UserAuth } from '../context/AuthContext'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import'../styles/notification.css'
import priceIcon from '../assets/price.webp'
import offerIcon from '../assets/offer.webp'
import { FiThumbsUp} from "react-icons/fi"
import { FiThumbsDown } from "react-icons/fi"
function noti() {
    const {user, deleteRequest, acceptRequest, refuseRequest} = UserAuth()
    const [requestsS, setRequestsS] = useState()
    const [requestsR, setRequestsR] = useState()
    const [message, setMessage] = useState()
    const [isRefused, setIsRefused] = useState()
    const [docId, setDocId] = useState()
    const [deals, setDeals] = useState()
    const navigate = useNavigate()
    const [requestAccept, setRequestAccept] = useState(false)
    const [requestRefuse, setRequestRefuse] = useState(false)
    const [requestCancel, setRequestCancel] = useState(false)


    useEffect(() => {

        onSnapshot((query(collection(db, 'requests'), where('senderId', '==', `${auth.currentUser?.uid}`))), (data) => {
            setRequestsS(data.docs)
        })

        onSnapshot((query(collection(db, 'requests'),where('state', '==', 'waiting'), where('resId', '==', `${auth.currentUser?.uid}`))), (data) => {
            setRequestsR(data.docs)
        })

        onSnapshot(query(collection(db, 'users'), where('id', '==', `${auth.currentUser?.uid}`)), (data) => {
            data.docs.forEach((doc) => {
              setDocId(doc.id)
              setDeals(doc.data().deals)
        
          })})


    }, [user])



    
    

    const renderRequestsS = requestsS?.map(request => 
        
        { 
            if(request.data().state == 'waiting') {
                return(
                    <div className='state-section' key={request.id}>
                <div className='waiting'>
                <span className="material-symbols-outlined">chat</span>
                    <h2>Your Request Has Been Sent. Waiting For {request.data().resName?.split(' ')[0]}’s Response</h2>
                </div>
                <div className='cancel-request' onClick={() => {
                    deleteRequest(doc(db, 'requests', `${request.id}`)),
                    setRequestCancel(true),
                    setTimeout(() => {setRequestCancel(false)}, 1500)                    
                    }}>
                    <span className="material-symbols-outlined">speaker_notes_off</span>
                    <h2>Cancel request</h2>
                </div>
                </div>   
                )
            }

            else if(request.data().state == 'refuse') {
                return(
                <div className='refused-state-section'>
                <div className='refused'>
                    <span className="material-symbols-outlined">speaker_notes_off</span>
                    <h2>{request.data().resName?.split(' ')[0]} refused your request.</h2>
                </div>
                <div className='message'>
                    <div className='message-title'>
                        <span className="material-symbols-outlined">chat</span>
                        <h2>Message from {request.data().resName?.split(' ')[0]}</h2>
                    </div>
                    <h2>{request.data().message}</h2>
                </div>
                <button onClick={() => {
                    deleteRequest(doc(db, 'requests', `${request.id}`))}} className='profile-button'>ok
                </button>
            </div>
                )
            }

            else if(request.data().state == 'accept') {
                    return(
                        <div className="accept-state-section">
                            <div className='accept'>
                            <span class="material-symbols-outlined">mark_chat_read</span>
                            <h2>{request.data().resName?.split(' ')[0]} accepted your request.</h2>
                            </div>
                            <div className="see-more" onClick={() => {navigate(`/users/${request.data().resId}`)}}>
                                <span class="material-symbols-outlined">visibility</span>
                                <h2>See more</h2>
                            </div>
                            
                        </div>
                    )
            }

    }
        
    )


    const renderRequestR = requestsR?.map(request => 
        
        {
           
            return(
                <div className='RequestR-all'>

                    <div className='requestR'>
                        <div className='request-content'>
                            <div className='the-content'>
                                <img src={offerIcon} alt="" />
                                <p><span>{request.data().senderName} Wants : </span>{request.data().content}</p>
                            </div>
                            <div className='the-content'>
                                <img src={priceIcon} alt="" />
                                <p>{request.data().price}<span id='dt'>Dt</span></p>
                            </div>
                        </div>
                        <div className="thumbs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={() => {
                                    acceptRequest(doc(db, 'requests', `${request.id}`), docId, deals),
                                    setRequestAccept(true),
                                    setTimeout(() => {setRequestAccept(false)}, 1500)
                                    }} size='30px' className='thumb'>
                                <mask id="mask0_560_339"  maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                <path d="M30 0H0V30H30V0Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_560_339)">
                                <path d="M8.62842 12.241V28.7242H21.8254C22.2105 28.75 23.5456 28.827 24.8036 27.9027C25.6766 27.2609 26.0874 26.4649 26.2671 26.0797C26.9346 22.8704 27.5765 19.6354 28.2441 16.426C29.117 13.9099 27.2171 10.9059 24.2901 10.9059C22.1591 10.9059 20.0538 10.9059 17.9228 10.9059V4.89794C17.9741 1.5602 15.0215 0.0710476 13.481 2.33045C11.8635 5.64251 10.2459 8.92891 8.62842 12.241Z" stroke="#FF8C00" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.25" d="M3.92975 28.75H8.62828V12.241H3.92975C2.62034 12.241 1.54199 13.3194 1.54199 14.6289V26.3622C1.54199 27.6717 2.62034 28.75 3.92975 28.75Z" fill="#FF8C00" stroke="#FF8C00" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.92975 28.75H8.62828V12.241H3.92975C2.62034 12.241 1.54199 13.3194 1.54199 14.6289V26.3622C1.54199 27.6717 2.62034 28.75 3.92975 28.75Z" stroke="#FF8C00" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" onClick={() => {setIsRefused(true)}}   size='30px' className='thumb'>
                                <g clip-path="url(#clip0_560_346)">
                                    <mask id="mask0_560_346"  maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
                                    <path d="M30 0H0V30H30V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_560_346)">
                                    <path d="M21.371 17.7505V1.27555H8.17567C7.79134 1.24994 6.459 1.17307 5.20352 2.09546C4.33237 2.73601 3.8968 3.53029 3.74307 3.91463C3.0769 7.14299 2.43635 10.3457 1.77017 13.5741C0.899027 16.085 2.79505 19.0829 5.71596 19.0829C7.84259 19.0829 9.96921 19.0829 12.0958 19.0829V25.104C12.0446 28.4605 14.9911 29.9209 16.554 27.6663C18.1682 24.361 19.7824 21.0558 21.3966 17.7505H21.371Z" stroke="#4D565B" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path opacity="0.25" d="M26.0598 1.25H21.3711V17.7505H26.0598C27.3666 17.7505 28.4427 16.6744 28.4427 15.3678V3.63285C28.4427 2.32613 27.3666 1.25 26.0598 1.25Z" fill="#4D565B"/>
                                    <path d="M26.0598 1.25H21.3711V17.7505H26.0598C27.3666 17.7505 28.4427 16.6744 28.4427 15.3677V3.63285C28.4427 2.32613 27.3666 1.25 26.0598 1.25Z" stroke="#4D565B" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_560_346">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>                                   
                        </div>
                    </div>
                        {isRefused &&
                            <form className='justify' onSubmit={(e) => {
                                e?.preventDefault(),
                                refuseRequest(doc(db, 'requests', `${request.id}`), message, user.displayName),
                                setRequestRefuse(true),
                                setTimeout(() => {setRequestRefuse(false)}, 1500)
                            }}>
                                <div className='inputBox'>
                                    <input type="text" onChange={(e) => {setMessage(e.target.value)}} required={true} placeholder=' '/>
                                    <span>Why you refused the offer?</span>
                                </div>
                                <button type='submit'>Send</button>
                                <button id='thanks' onClick={(e) => {
                                    e?.preventDefault(),
                                    refuseRequest(doc(db, 'requests', `${request.id}`), message, user.displayName),
                                    setRequestRefuse(true),
                                    setTimeout(() => {setRequestRefuse(false)}, 1500)
                            }}>No, thanks</button>  
                            </form>
                        }
                </div>
            )
        }
    )


  return (
    <div className='notification'>
      {renderRequestR}
      {renderRequestsS}
    </div>
  )
}

export default noti
