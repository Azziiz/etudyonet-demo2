import { useEffect } from 'react'
import banner from '../assets/banner.jpg'
import { UserAuth } from '../context/AuthContext'
import { MdSettings } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

function Search() {

    const {search, cancelSearch, value, setValue, user} = UserAuth()
    const navigate = useNavigate()

    const handleSearch = (e) => {
      e?.preventDefault()
      if(window.location.pathname != '/'){
           scrollTo(0, 300)
            navigate('/')
          }
          search()
    }
    
    const handleCancel= (e) => {
        e?.preventDefault()
        cancelSearch()
        document.getElementById('searchbar').value = ''
        setValue(undefined)
      }

      useEffect(() => {
        if(!user){
          handleCancel()
        }
      }, [!user])



  return (
    <div className='top'>
        <img src={banner} alt="banner" className='banner'/>
          <form onSubmit={handleSearch} className='search-area'>
          
            <input type="text" onChange={(e) => {setValue(e.target.value)}} id='searchbar' placeholder='Search for any offer' defaultValue={value} required/>
            <div id='cancel' >
                {value && <span className="material-symbols-outlined"onClick={handleCancel} >close</span>}    
            </div>
            <button id='search'>search</button>
        
          </form>

    </div>
  )
}

export default Search
