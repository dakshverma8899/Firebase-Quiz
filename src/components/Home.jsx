import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../secure/firebase'
import {useHistory} from 'react-router-dom'
const Home = () => {
    const { user } = useAuthState()
  console.log(user?.displayName)
  if (user.displayName != null){
    return(
      <>
      <h1>Welcome {user.displayName}</h1>
      <button onClick={() => signOut(getAuth())}>Sign out</button>
      <div id="verify">
        <Ve />
      </div>
    </>
    )
  }
  else{
    return(
      <>
      <Stn />
      </>
    )
  }

}

export const Stn = () => {
  useHistory().push('/setname')
  return (

    <div>
      
    </div>
  )
}
export const Ve = () => {
  useHistory().push('/verify')
  return (

    <div>
    
    </div>
  )
}

export default Home
