import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../Firebase/Firebase.init";

initilizeAuthentication()

const useFirebase = () => {
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth()
      const [user, setUser] = useState('')
      const [error, setError] = useState('')

      const googleSignIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then((result) => {
                        setUser(result.user)
                  }).catch((error) => {

                        setError(error.message)
                  });
      }

      const newUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        setUser(userCredential.user)
                  })
                  .catch((error) => {
                        setError(error.message)
                  });
      }
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user)
                  } else {
                        setUser('')
                  }
            })
            return () => unsubscribe
      }, [])
      const emailSignIn = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        setUser(userCredential.user)
                  })
                  .catch((error) => {
                        setError(error.message)
                  });
      }
      const logOut = () => {
            signOut(auth).then(() => {
                  setUser('')
            }).catch((error) => {
                  setError(error.message)
            });

      }
      return {
            user,
            error,
            googleSignIn,
            newUser,
            emailSignIn,
            logOut
      }
}

export default useFirebase;