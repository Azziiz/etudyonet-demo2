import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import avatar from '../assets/avatar.webp'
import { UserAuth } from '../context/AuthContext'
import { useNavigate} from 'react-router-dom'
import Search from '../components/Search'
import '../styles/main.css'
import '../styles/offer.css'
import Offer from '../components/Offer'
import Users from '../components/Users'





function Home() {
  const {offers, users, user} = UserAuth()
  const navigate = useNavigate()
  const [isOffer, setIsOffer] = useState(true)



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


const renderUsers = users?.length? users.map(users => 
    <Users user={users}/>
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
    <div className='all'>
      <Search />
      <div className="offer-or-user">
        <h3 id={isOffer == true ? 'offers' : 'undefined'} onClick={() => {setIsOffer(true)}}>Offers</h3>
        <h3 id={isOffer == false ? 'offers' : 'undefined'} onClick={() => {setIsOffer(false)}}>Users</h3>
      </div>
    <div className='home'>
      {
        isOffer ?
        <div className='offers-section'>
          {renderOffers}
        </div>
        :
      <div className='users-section'>
        {renderUsers}
      </div>
      }
    </div>
    </div>
    
  )
}

export default Home
