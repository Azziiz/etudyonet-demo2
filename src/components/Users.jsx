import React from 'react'
import '../styles/users.css'
import avatar from '../assets/avatar.webp'
import { useNavigate } from 'react-router-dom'
function Users({user}) {

    const navigate = useNavigate()



  return (
    <div id='user' onClick={() => {navigate(`/users/${user.data().id}`), scrollTo(0, 0)}}>
      <div className='photo-section'>
          <div className="profile-deals">
            <i className="fa-regular fa-handshake fa-xl" ></i>
            <h3>{user.data().deals? user.data().deals : "0"}</h3>
          </div>
          <div className="profile-rate">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#FFB800">
              <path transform='scale(0.6)' d="M17.5 0L23.1574 9.50482L34.1435 11.8328L26.6539 20.035L27.7862 30.9786L17.5 26.543L7.21376 30.9786L8.34608 20.035L0.85651 11.8328L11.8426 9.50482L17.5 0Z" fill="#FFB800"/>
            </svg>
            <h3>{(user.data().stars/user.data().deals)? (user.data().stars/user.data().deals).toFixed(1) : "0"}</h3>
          </div>
          <img src={user.data().photoURL? user.data().photoURL : user.data().photoURl} alt="" />
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className='setting' overflow="visible" onClick={() => {navigate('/settings'), scrollTo(0, 0)}}>
            <path d="M16.4054 20.5C18.958 20.5 21.0271 18.4854 21.0271 16C21.0271 13.5146 18.958 11.5 16.4054 11.5C13.8529 11.5 11.7838 13.5146 11.7838 16C11.7838 18.4854 13.8529 20.5 16.4054 20.5Z" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.148 13.5931L26.457 9.6172L28.7297 7L25.6486 4L22.9753 6.22443L18.8053 4.55461L17.8463 1H14.8356L13.8621 4.6017L9.78787 6.27394L7.16216 4L4.08108 7L6.32006 9.68327L4.65493 13.6694L1 14.5V17.5L4.69901 18.4833L6.41616 22.4495L4.08108 25L7.16216 28L9.92152 25.8105L13.9359 27.4185L14.8649 31H17.9459L18.8772 27.4198L22.9606 25.7732C23.6412 26.2469 25.6486 28 25.6486 28L28.7297 25L26.4434 22.3741L28.1349 18.397L31.8107 17.4658L31.8108 14.5L28.148 13.5931Z" stroke="#333C41" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
       </div>
       <h5 className='name'>{user.data().name}</h5>
        <div className='phoneNumber'>
        {user.data().phoneNumber == 'Not available'?
          <h2>Not available</h2>:
          <>
            <h2>+216</h2>
            <h2>{user.data().phoneNumber.substr(0, 2)}</h2>
            <h2>{user.data().phoneNumber.substr(2, 3)}</h2>
            <h2>{user.data().phoneNumber.substr(5, 5)}</h2>
          </>
          }
        </div>
        <div className='bio'>{user.data().bio}</div>
        
    </div>
  )
}

export default Users
