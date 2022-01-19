import React, { useEffect, useState } from "react";
import FirebaseInitialize from "../firebase/Firebase.Initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [success,setSuccess]=useState("")
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = (navigate, location) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state?.from || "/Dashboard");
        setError("");
      })
      .catch((error) => {
        // Handle Errors here
        setError(error.message);
      });
  };

  const userRegistration = (
    email,
    password,
    displayName,
    navigate,
    location
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const user = result.user;
        const newUser = { email, displayName };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName,
          email,
        })
          .then(() => {
            // Profile updated!
            setSuccess("Your Profile Create Successfully")
            setError("")
            const destination =location?.state?.from ||"/"
            navigate(destination)
            // ...
          })
          .catch((error) => {
            // An error occurred
            setError(error.message)
            // ...
          });
      })
      .catch((error) => {
        setSuccess("")
        setError(error.message);
        // ..
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setError("");
        setSuccess("")
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  console.log(user);
  return { user, googleSignIn, logOut, userRegistration, error, isLoading,success };
};

export default useFirebase;
