import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import avatar from '../assets/avatar.webp'
import { UserAuth } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'
import Search from '../components/Search'
import '../styles/main.css'




function Home() {
  const {offers, user} = UserAuth()
  const navigate = useNavigate()



const renderOffers = offers?.length? offers.map(offer => 
  <div className='offer' key={offer.id} onClick={() => {navigate(`/users/${offer.data().authorId}`),scrollTo(0, 0)}}>
    <div className='offer-top'>
      <img src={offer.data().photoURl ? offer.data().photoURl : avatar} alt="" />
      <div>
        {
          offer.data().name.length >= 15 ?
          <h3>{offer.data().name.substr(0, 15)}...</h3>
          :
          <h3>{offer.data().name}</h3>
        }
        <div className='phoneNumber'>
          {offer.data().phoneNumber == 'Not available'?
            <h2>   </h2>:
            <>
              <h2>+216</h2>
              <h2>{offer.data().phoneNumber.substr(0, 2)}</h2>
              <h2>{offer.data().phoneNumber.substr(2, 3)}</h2>
              <h2>{offer.data().phoneNumber.substr(5, 5)}</h2>
            </>
          }
        </div>
      </div>
    </div>
    <div className='offer-content'>
      <h3>{offer.data().content}</h3> 
    </div>
    <div className='offer-footer'>
        <h4>STARTING AT <span>{offer.data().price.trim()}DT</span></h4>
    </div>
  </div> 

  )
  : 
  <div className="person">
    <div id='head'></div>
    <div id="body"></div>
    <div id="body2"></div>
    <div id='circle'></div>
    <div className="qmarks">
      <h3 className="q1">?</h3>
      <h3 className="q2">?</h3>
      <h3 className="q3">?</h3>
    </div>
    <h3>No results found for your search.</h3>
  </div>


 


  return (
    <div>
      <Search />
    <div className='home'>
      <div className='offers-section'>
        {renderOffers}
      </div>
    </div>
    </div>
    
  )
}

export default Home
