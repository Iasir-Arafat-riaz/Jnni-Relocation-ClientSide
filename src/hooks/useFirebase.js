import React, { useEffect, useState } from "react";
import FirebaseInitialize from "../firebase/Firebase.Initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword, signOut } from "firebase/auth";
FirebaseInitialize();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true);
    const [error, setError]=useState("")
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = (navigate,location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state?.from||"/Dashboard")
        setError("")
      })
      .catch((error) => {
        // Handle Errors here
        setError(error.message);
      });
  };

const userRegistration=(email,password,displayName,navigate)=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    setError("")
    // ...
  })
  .catch((error) => {
   
    setError(error.message);
    // ..
  });
}

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setIsLoading(true)
        if (user) {
         setUser(user)
        } else {
         setUser({})
        }
        setIsLoading(false)
      });  
},[])
  

const logOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setError("")
      }).catch((error) => {
        setError(error.message)
      });
}

  console.log(user);
  return {user,googleSignIn,logOut,userRegistration,error,isLoading};
};

export default useFirebase;
