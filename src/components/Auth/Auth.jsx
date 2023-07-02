import React, { useEffect, useState } from 'react'
import './Auth.css'
import Signin from './Signin'
import Signup from './Signup';
import Footer from '../Contents/Footer';
import Header from '../Header/Header';
function Auth({ auth }) {

  const [login, changeState] = useState(auth);
  console.log(login);

  useEffect(()=>{
    window.scroll(0,0);
  })
  return (
    <>
    <Header/>
      <div className='auth'>
        <div className='backdropText'>
          {login ? <>
            <div className='backdropTextHead'>Welcome Back</div>
            <div className='backdropTextBody'>Please sign-in to continue</div>
          </>
            :
            <>
              <div className='backdropTextHead'>Create Account</div>
              <div className='backdropTextBody'>Please sign-up to continue</div>
            </>
          }
        </div>
        <div className='backdrop'></div>
        <div className='change'>
          {login ? <Signin changeState={changeState} /> : <Signup changeState={changeState} />}

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Auth