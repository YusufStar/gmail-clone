import React from 'react'
import { useDispatch } from 'react-redux'
import './css/login.css'
import { signin } from './features/userSlice';
import { auth, provider } from './firebase'

function Login() {

  const dispatch = useDispatch();
  const login = () => {
    auth.signInWithPopup(provider).then(({user}) => {
      dispatch(signin({
        displayName:user.displayName,
        photoUrl:user.photoURL,
        email:user.email
      }))
    }).catch(error=>{
      alert(error)
    })
  }

  return (
    <div className='loginwrapper'>
        <div className="login">
            <img src="https://cdn.vox-cdn.com/thumbor/K-q2WRPRyxxzzPLjxHGt26swMfM=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" />

            <button className='gmail_login' onClick={login}>Login with Gmail</button>
        </div>
    </div>
  )
}

export default Login