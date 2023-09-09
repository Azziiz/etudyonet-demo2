import React, { useState } from 'react'
import '../styles/offer.css'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function offer({offer}) {
    const navigate = useNavigate()
    const {deleteOffer} = UserAuth()
    const [color, setColor] = useState('#333C41')
    const handleClick = () => {
        if(window.location.pathname == '/') {
            navigate(`/users/${offer.data().authorId}`)
        }
    }
  return (
    <div className='offer' key={offer.id} onClick={() => {handleClick()}}>
        <img src={offer.data().offerImage} alt="" className="offer-image"/>
  
        <div className="offer-info">
            <div className='offer-top'>
                <div className='maker-info'>
                    <img src={offer.data().photoURl ? offer.data().photoURl : avatar} alt="" />
                    <div>
                        {
                            offer.data().name.length >= 12 ?
                            <h3>{offer.data().name.substr(0, 12)}...</h3>
                            :
                            <h3>{offer.data().name}</h3>
                        }
                        {offer.data().dis == 'Not available'?
                            <>   </>
                            :
                            <h3 className='offer-dis'>{offer.data().dis}</h3>

                        }
                    </div>
                </div>
                {window.location.pathname == '/profile' &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={() => {deleteOffer(offer.id)}} onMouseLeave={() => {setColor("#333C41")}} onMouseOver={() => {setColor("#FF8C00")}}>
                        <path d="M27.6666 14.3333V30C27.6666 30.5523 27.219 31 26.6666 31H5.33331C4.78103 31 4.33331 30.5523 4.33331 30V14.3333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.6667 24.3333V14.3333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.3333 24.3333V14.3333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31 7.66667H22.6667M22.6667 7.66667V2C22.6667 1.44772 22.219 1 21.6667 1H10.3333C9.78105 1 9.33333 1.44772 9.33333 2V7.66667M22.6667 7.66667H9.33333M1 7.66667H9.33333" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
            </div>
            <h3 className='offer-content'>{offer.data().content}</h3> 
            <div className='offer-footer'>
                <h4>STARTING AT <span>{offer.data().price.trim()}DT</span></h4>
            </div>
        </div>
  </div> 
  )
}

export default offer
