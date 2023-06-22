import React, { useState } from 'react'
import {db} from '../firebase'
import Navbar from '../components/Navbar'
import avatar from '../assets/avatar.png'
import {
  collection,
  onSnapshot,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'





function Home() {
  const [offers, setOffers] = useState()
  const {user} = UserAuth()
  const crOF = collection(db, 'offers')

  useEffect(() => {
    onSnapshot(crOF, (data) => {
      setOffers(data.docs)
      
  })
  }, [user])


  





  return (
    <div className='home'>
      <Navbar/>
{
  offers && offers.map(offer => 
    <div className='offer' key={offer.id}>
      <div className='offer-top'>
        <img src={offer.data().photoURl ? offer.data().photoURl : avatar} alt="" />
        <div>
          <h3>{offer.data().author.name}</h3>
          <div className='phoneNumber'>
            <h2>+216</h2>
            <h2>{offer.data().author.phoneNumber.substr(0, 2)}</h2>
            <h2>{offer.data().author.phoneNumber.substr(2, 3)}</h2>
            <h2>{offer.data().author.phoneNumber.substr(5, 5)}</h2>
          </div>
        </div>
      </div>
      <div className='offer-content'>
        <h3>{offer.data().content}</h3> 
      </div>
      <div className='offer-footer'>
          <a href={`/users/${offer.data().authorId}`}><button>See profile</button></a> 
          <h4>Starting at <span>{offer.data().price}Dt</span></h4>
      </div>
    </div>

    )
  
}
  
    </div>
  )
}

export default Home
