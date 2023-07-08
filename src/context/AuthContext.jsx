import { createContext, useContext, useEffect, useState } from "react";

import {db, auth, storage} from '../firebase'
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
       onAuthStateChanged,
       updateProfile,
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
    ref, uploadBytes
} from "firebase/storage"
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    const cr = collection(db, 'users')
    const crOF = collection(db, 'offers')
    const crR = collection(db, 'requests')
    const Filtre = query(collection(db, 'offers'), where('authorId', '==',`${auth.currentUser?.uid}`))

    

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


    const createUserData =(displayName, email, bio, messanger, instagram, phoneNumber, photoURL) => {
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
            photoURL: photoURL
 
        })
        
    }

    const createOffer = async(name, phoneNumber, content, price, photoURL) => {
        return await addDoc(crOF, {
            authorId: auth.currentUser.uid,
            name: name,
            phoneNumber: phoneNumber,
            content: content,
            price: price,
            photoURl: user?.photoURL
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



const acceptRequest = (docRef, user, deal) => {

        updateDoc(docRef, {state: 'accept'})
        updateDoc(doc(db, 'users', `${user}`), {deals: deal + 1})
        
}
        


        

const deleteOffer = (offerId) => {
    return deleteDoc(doc(db, 'offers', `${offerId}`))
}







const deleteRequest = (docRef) => {

    return deleteDoc(docRef)
}
    /*const updateProfile = (email, name, bio, messanger, instargram, phoneNumber) =>  {
        if(auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                email : email,
              })
        }

    }*/


const createReview = (senderId, senderPhoto,senderName, resId, resName, content, rate, docId, isFirstReview, deals, rri, rci, stars, udid) => {
        
        
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
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unsub
        
    }, [])


const upload = async(file, currentUser, setLoading, docRef) => {
    const fileRef = ref(storage, currentUser.uid + ".png")

    setLoading(true)
    
    const snapshot = await uploadBytes(fileRef, file);
    const photoURl = await getDownloadURL(fileRef);
    await updateProfile(auth.currentUser, {photoURL: photoURl})
    await updateDoc(docRef, {photoURL: photoURl})
    console.log('wait...')
    onSnapshot(Filtre, (data) => {
        data.docs.forEach(offer => {
            updateDoc(doc(db, 'offers', `${offer.id}`), {photoURl})
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
    
    setLoading(false)
    


}



    return(
        <UserContext.Provider value={{CreateUser, user, logout, signIn, setUserName, createUserData, upload, createOffer, deleteOffer, createRequest, refuseRequest, acceptRequest, deleteRequest, createReview}}>
            {children}
        </UserContext.Provider>
    )
}



export const UserAuth = () => {
    return useContext(UserContext)
}