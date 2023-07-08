import React, { useState } from 'react'
import {db} from '../firebase'
import Navbar from '../components/Navbar'
import avatar from '../assets/avatar.png'
import {
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'





function Home() {
  const [offers, setOffers] = useState()
  const {user} = UserAuth()
  const crOF = collection(db, 'offers')
  const [value, setValue] = useState()

  useEffect(() => {
    onSnapshot(crOF, (data) => {
      setOffers(data.docs)
  })
  }, [user])

 

  const handleSearch = () => {
    onSnapshot(value? query(collection(db, 'offers'), where('name', '==', `${value}`)) : crOF, (data) => {
      setOffers(data.docs)
      value && scrollTo(0, 400)
      
  })
  }

  const handleCancel= () => {
    onSnapshot(crOF, (data) => {
      setOffers(data.docs)
  })

  document.getElementById('searchbar').value = ''
  setValue(undefined)

  
  }





  return (
    
    <div className='home'>
      <Navbar/>
      <div className='search-area'>
        <input type="text" onChange={(e) => {setValue(e.target.value)}} id='searchbar'/>
        <div id='cancel'>
          <span class="material-symbols-outlined"onClick={handleCancel} >close</span>
        </div>
        <button onClick={handleSearch}>search</button>
      </div>
  

{
  
  offers?.length? offers.map(offer => 
    <div className='offer' key={offer.id}>
      <div className='offer-top'>
        <img src={offer.data().photoURl ? offer.data().photoURl : avatar} alt="" />
        <div>
          <h3>{offer?.data().name}</h3>
          <div className='phoneNumber'>
            <h2>+216</h2>
            <h2>{offer.data().phoneNumber.substr(0, 2)}</h2>
            <h2>{offer.data().phoneNumber.substr(2, 3)}</h2>
            <h2>{offer.data().phoneNumber.substr(5, 5)}</h2>
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
    : 
    <h1>nothing</h1>
  
}
  
    </div>
  )
}

export default Home
