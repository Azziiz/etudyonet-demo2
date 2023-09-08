import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import avatar from '../assets/avatar.webp'
import { UserAuth } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'
import Search from '../components/Search'
import '../styles/main.css'
import '../styles/offer.css'
import Offer from '../components/Offer'





function Home() {
  const {offers, user} = UserAuth()
  const navigate = useNavigate()



const renderOffers = offers?.length? offers.map(offer => 
    <Offer offer={offer}/>

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
