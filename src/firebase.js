import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAdYeQZYe6wHGUOU0SOwv1sbppnSoViJ2M",
  authDomain: "etudyonet-clone-3.firebaseapp.com",
  projectId: "etudyonet-clone-3",
  storageBucket: "etudyonet-clone-3.appspot.com",
  messagingSenderId: "555691155641",
  appId: "1:555691155641:web:13e1ad4042d03e16dd7b68"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app);


export default app