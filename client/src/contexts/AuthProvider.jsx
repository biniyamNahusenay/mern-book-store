import React ,{createContext, useEffect, useState}from 'react'
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
   
     const createUser = (email,password)=>{
       setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
     }

     const loginwithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }

    const login = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }
    
    const logout = ()=>{
      setLoading(true)
      return signOut(auth)
    }

     useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
      });
      return ()=>{
        return unsubscribe()
      }
     },[])

     const authInfo = {
        user,
        createUser,
        loginwithGoogle,
        login,
        logout
     }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
