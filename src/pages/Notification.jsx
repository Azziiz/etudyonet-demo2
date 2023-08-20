

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

function Notification() {
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
                        <FiThumbsUp onClick={() => {
                            acceptRequest(doc(db, 'requests', `${request.id}`), docId, deals),
                            setRequestAccept(true),
                            setTimeout(() => {setRequestAccept(false)}, 1500)
                            }} size='30px' className='thumb'/>
                        <FiThumbsDown onClick={() => {setIsRefused(true)}} id='thumb-down' size='30px' className='thumb'/>
                    </div>
                    {isRefused &&
                        <form className='justify'>
                            <div className='inputBox'>
                                <input type="text" onChange={(e) => {setMessage(e.target.value)}}/>
                                <span>Why you refused the offer?(optional)</span>
                            </div>
                            <button onClick={(e) => {
                                e?.preventDefault(),
                                refuseRequest(doc(db, 'requests', `${request.id}`), message, user.displayName),
                                setRequestRefuse(true),
                                setTimeout(() => {setRequestRefuse(false)}, 1500)
                        }}>Send</button>
                        </form>
                    }
                </div>
            )
        }
    )


  return (
    <div>
        <div className='popups'>
            {requestAccept &&
                <div className='pop'>
                    <h3>you accpeted something</h3>
                </div>
            }
            {requestRefuse &&
                <div className='pop'>
                    <h3>you refused something</h3>
                </div>
            }  
            {requestCancel &&
                <div className='pop'>
                    <h3>you canceled something</h3>
                </div>
            }          
        </div>
        <div className='notification'>
        
        <div className='noti-content'>
                <div className="received">
                    <h5>Requests received</h5>
                    <div className="received-content">
                        {renderRequestR}
                    </div>
                </div>
                <div className='sent'>
                    <h5>Requests sent</h5>
                    <div className='sent-content'>
                        {renderRequestsS}
                    </div>

                </div>
        </div>
        </div>

    </div>
  )
}

export default Notification
