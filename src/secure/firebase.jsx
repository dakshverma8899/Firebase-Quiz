import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAf76mouhUulhF03gUwAaPEX2oNhO5oP0Y",
  authDomain: "quizzo-2e625.firebaseapp.com",
  projectId: "quizzo-2e625",
  storageBucket: "quizzo-2e625.appspot.com",
  messagingSenderId: "250934409149",
  appId: "1:250934409149:web:be55c35f9d47c5938a84d4"
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}
