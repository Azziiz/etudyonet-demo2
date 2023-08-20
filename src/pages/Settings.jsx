import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { auth, db } from '../firebase'
import '../styles/settings.css'
import Navbar from '../components/Navbar'



function Settings() {

const [error, setError] = useState()
const [password, setPassword] = useState()
const [docId, setDocId] = useState()
const {user, updateUser} = UserAuth()
const [loading, setLoading] = useState(false)

    const [pEmail, setPEmail] = useState()
    const [email, setEmail] = useState()

    const [pBio, setPBio] = useState()
    const [bio, setBio] = useState()

    const [pMessenger, setPMessenger] = useState()
    const [messenger, setMessenger] = useState()

    const [pInstagram, setPInstagram] = useState()
    const [instagram, setInstagram] = useState()

    const [pPhone, setPPhone] = useState()
    const [phone, setPhone] = useState()

    const [pName, setPName] = useState()
    const [name, setName] = useState()


useEffect(() => {
    onSnapshot(query(collection(db, 'users'), where('id', '==', `${auth?.currentUser?.uid}`)), (data) => {
        data.docs.forEach(doc => {
            setPName(doc.data().name)
            setPEmail(doc.data().email)
            setPBio(doc.data().bio)
            setPMessenger(doc.data().messanger)
            setPInstagram(doc.data().instagram)
            setPPhone(doc.data().phoneNumber)
            setPassword(doc.data().passowrd)
            setDocId(doc.id)
        })
    })
}, [user])



const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{

        await updateUser(email, pEmail, docId, bio, pBio, messenger, pMessenger, instagram, pInstagram, phone, pPhone, name, pName)
        setLoading(false)
    }catch (e) {
        setError(e.message)
        console.log(e.message);
        
    }
}


  return (
    <div className='settings'>
      <form onSubmit={handleSubmit}>
      {error && <p id='error'>tchu tchu motherfucker</p>}
        <div className='inputBox'>
            <input onChange={(e) => {setName(e.target.value)}} defaultValue={pName} required/>
            <span>Username</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setEmail(e.target.value)}} defaultValue={pEmail} required/>
            <span>Email</span>
        </div>
        <div className='inputBox'>
            <textarea  onChange={(e) => {setBio(e.target.value)}} defaultValue={pBio}  required maxLength={600}/>
            <p className='letter-counter'>{bio? bio.length : pBio?.length}/600</p>
            <span>Bio</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setMessenger(e.target.value)}} defaultValue={pMessenger} required/>
            <span>Messenger link</span>
        </div>
        <div className='inputBox'>
            <input onChange={(e) => {setInstagram(e.target.value)}} defaultValue={pInstagram} required/>
            <span>Instagram link</span>
        </div>
        <div className='inputBox'>
            <input type='text' onChange={(e) => {setPhone(e.target.value)}} defaultValue={pPhone == 'Not available'? '00000000' : pPhone} pattern='\d+' minLength={8} maxLength='8' required/>
            <span>Phone number</span>
        </div>
        {loading?
        <button><i className="fa fa-spinner fa-spin"></i></button> :
        <button onClick={() => {setLoading(true)}}>update</button>
        }
      </form>
    </div>
  )
}

export default Settings
