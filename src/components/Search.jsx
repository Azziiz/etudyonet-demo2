import { useEffect } from 'react'
import banner from '../assets/banner.jpg'
import { UserAuth } from '../context/AuthContext'

function Search() {

    const {search, cancelSearch, value, setValue, user} = UserAuth()


    const handleSearch = () => {
        search()
      }
    
    const handleCancel= () => {
        cancelSearch()
        document.getElementById('searchbar').value = ''
        setValue(undefined)
      }

      useEffect(() => {     
          document.addEventListener('keypress', (event)=>{
    
            let keyCode = event.keyCode ? event.keyCode : event.which;
       
    
            if(keyCode === 13) {
                handleSearch()
            }
          })
      }, [user])



  return (
    <div className='top'>
        <img src={banner} alt="banner" className='banner'/>
        <div className='search-area'>
            <input type="text" onChange={(e) => {setValue(e.target.value)}} id='searchbar' placeholder='Search for any offer'/>
            <div id='cancel' >
                {value && <span className="material-symbols-outlined"onClick={handleCancel} >close</span>}    
            </div>
            <button onClick={handleSearch} >search</button>
        </div>
    </div>
  )
}

export default Search
