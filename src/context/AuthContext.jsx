import { createContext, useContext, useEffect, useState } from "react";

import {db, auth, storage} from '../firebase'
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
       onAuthStateChanged,
       updateProfile,
       updateCurrentUser,
       updateEmail,
       reauthenticateWithCredential,
       AuthCredential,
       EmailAuthProvider,
       signInWithCredential,
    } from 'firebase/auth'
import { 
        collection,
        addDoc,
        updateDoc,
        query,
        where,
        deleteDoc,
        doc,
        onSnapshot
    } from "firebase/firestore"; 
import {
    getDownloadURL,
    ref, uploadBytes, uploadString
} from "firebase/storage"
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const cr = collection(db, 'users')
    const crOF = collection(db, 'offers')
    const crR = collection(db, 'requests')
    const Filtre = query(collection(db, 'offers'), where('authorId', '==',`${auth.currentUser?.uid}`))
    const [password, setPassword] = useState()
    const [offers, setOffers] = useState()
    const [value, setValue] = useState('')
    const [photoChange, setPhotoChange] = useState(null)
    const [offerPhoto, setOfferPhoto] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unsub 
    }, [])
    


    const CreateUser = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    const logout = () => {
        navigate('/')
        return signOut(auth)
        
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
 
    }

    const setUserName = (name) => {
           return updateProfile(auth.currentUser, {displayName: name})
    }


    const createUserData =(displayName, email, bio, messanger, instagram, phoneNumber, dis, photoURL, password) => {
        return addDoc(cr, {
            id: auth.currentUser.uid,
            name : displayName,
            email : email,
            bio : bio,
            messanger : messanger,
            instagram : instagram,
            phoneNumber : phoneNumber,
            deals: 0,
            stars: 0,
            photoURL: photoURL,
            password: password,
            dis: dis,
 
        })
        
    }

    const createOffer = async(name, phoneNumber, content, price, photoURL, dis) => {        
        await addDoc(crOF, {
            authorId: auth.currentUser.uid,
            name: name,
            phoneNumber: phoneNumber,
            content: content,
            price: price,
            photoURl: user?.photoURL,
            offerImage: offerPhoto,
            dis: dis
        })


    }

    const createRequest = async(senderId, senderName, resId, resName, content, price) => {
        return await addDoc(crR, {
            senderId: senderId,
            senderName: senderName,
            resId: resId,
            resName: resName,
            content: content,
            price: price,
            state: 'waiting',
            message: null

        })
    }
const refuseRequest = (docRef, message, sender) => {
    return updateDoc(docRef, {state: 'refuse', message: message? message : `${sender} has nothing to say`})
}


useEffect(() => {
    if(!value){
        onSnapshot(crOF, (data) => {
            setOffers(data.docs)  
        })
    }

    onSnapshot(query(collection(db, 'users'), where('id', '==', `${auth?.currentUser?.uid}`)), (data) => {
        data.docs.forEach(doc => {
            setPassword(doc.data().password)
        })
    })


}, [user])



const acceptRequest = (docRef, user, deal) => {
        updateDoc(docRef, {state: 'accept'})
        updateDoc(doc(db, 'users', `${user}`), {deals: deal + 1})
        
}
        


        

const deleteOffer = (offerId) => {
    return deleteDoc(doc(db, 'offers', `${offerId}`))
}




const search = () => {
    onSnapshot(crOF, (data) => {
        if(value){
            setOffers(
              data.docs.filter(doc => {
                if(doc.data().name?.toLowerCase().includes(value?.toLowerCase()) || doc.data().content?.toLowerCase().includes(value?.toLowerCase()) ) {
                  return doc
                }
              })
            )
        }
        else{
                setOffers(data.docs)
            }


   
    })
}

const cancelSearch = () => {
    onSnapshot(crOF, (data) => {
        setOffers(data.docs)
    })
  
}




const deleteRequest = (docRef) => {
    return deleteDoc(docRef)
}






const updateUser = async(email, pEmail, docId, bio, pBio, messenger, pMessenger, instagram, pInstagram, phone, pPhone, name, pName, dis, pDis) => {
    const credentials = EmailAuthProvider.credential(
        auth?.currentUser.email,
        password && password
    )
    await reauthenticateWithCredential(auth.currentUser, credentials)
    await updateEmail(auth?.currentUser, email)
    await updateProfile(auth.currentUser, {displayName: name? name : pName})
    await updateDoc(doc(db, 'users', `${docId}`), {
        name: name? name : pName,
        email: email? email : pEmail,
        bio: bio? bio : pBio,
        messanger: messenger? messenger : pMessenger,
        instagram: instagram? instagram : pInstagram,
        phoneNumber: phone? phone : pPhone == '00000000'? 'Not available' : pPhone,
        dis: dis? dis : pDis,
    })
    navigate('/profile')
    
    
}


const createReview = (senderId, senderPhoto,senderName, resId, resName, content, rate, docId, isFirstReview, deals, rri, rci, stars, udid, senderBio) => {
        
    
        if(isFirstReview){
                updateDoc(doc(db, 'users', `${udid}`), {stars: (stars + rate)})
             addDoc(collection(db, 'reviews'), {
                senderId: senderId,
                senderPhoto: senderPhoto,
                senderName: senderName,
                resId: resId,
                resName: resName,
                content: content? content : null,
                rate: rate,
                deals: 1,
                senderBio: senderBio
            })
        }
        else {
            updateDoc(doc(db, 'users', `${udid}`), {stars: (stars + rate)})
            updateDoc(doc(db, 'reviews', `${docId}`),{
                content: content? content : rci,
                rate: rate? rate : rri,
                deals : (deals + 1)

            })
        }
    
}



const upload = async(currentUser, setLoading, docRef) => {

    const file = photoChange
    const fileRef = ref(storage, currentUser.uid + ".png")

    setLoading(true)
    
    const snapshot = await uploadString(fileRef, file, 'data_url');
    const photoURl = await getDownloadURL(fileRef);
    await updateProfile(auth.currentUser, {photoURL: photoURl})
    await updateDoc(docRef, {photoURL: photoURl})
    console.log('wait...')
    onSnapshot(Filtre, (data) => {
        data.docs.forEach(offer => {
            updateDoc(doc(db, 'offers', `${offer.Id}`), {photoURl})
        }
            )

    })
    window.location.reload(false)
    onSnapshot((query(collection(db, 'reviews'), where('senderId', '==',`${auth.currentUser?.uid}`))), (data) => {
        data.docs.forEach(review => {
            updateDoc(doc(db, 'reviews', `${review.id}`), {senderPhoto: photoURl})
        }
            )
    })
    setPhotoChange(null)
    setLoading(false)
    


}



    return(
        <UserContext.Provider value={{CreateUser, user, logout, signIn, setUserName, createUserData, upload, createOffer, deleteOffer, createRequest, refuseRequest, acceptRequest, deleteRequest, createReview, updateUser, offers, search, cancelSearch, value, setValue, photoChange, setPhotoChange, offerPhoto, setOfferPhoto}}>
            {children}
        </UserContext.Provider>
    )
}



export const UserAuth = () => {
    return useContext(UserContext)
}