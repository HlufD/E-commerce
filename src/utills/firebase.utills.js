import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {getFirestore,doc,setDoc,getDoc} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDBj3DhnJFLvrDuENOY2-DKFAoe7Ucn4OU",
  authDomain: "elyahu-clothing-db.firebaseapp.com",
  projectId: "elyahu-clothing-db",
  storageBucket: "elyahu-clothing-db.appspot.com",
  messagingSenderId: "484620255236",
  appId: "1:484620255236:web:c795d30a941caebe06b551"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
 export const singinWithGoogle = async ()=>{
    return signInWithPopup(auth,provider)
 };

 export const db = getFirestore(app); //intance of firestore

export const createUserFromAuth = async function(userAuth){
  const userDocRef = doc(db,"users",userAuth.uid)
  const snapshot = await getDoc(userDocRef)
  if(!snapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef,{displayName,email,createdAt});
      
    } catch (error) {
      console.log("erroe creating the user",error.message);
    }

  }
  return userDocRef
 }

  