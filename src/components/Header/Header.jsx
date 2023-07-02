import React, { useEffect } from 'react'
import './Header.css'
import Button from '@mui/material/Button';
import 'animate.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';


export const fadeIn = () => {
  document.getElementsByClassName("logo")[0].className += " visible animate__animated animate__fadeIn";
  document.getElementsByClassName("navbar")[0].className += " visible animate__animated animate__fadeIn";
  document.getElementsByClassName("buttonSec")[0].className += " visible animate__animated animate__fadeIn";
}

function Header() {

  const { user, logout } = useAuth();

  function navHandlerOn(e) {
    e.target.nextSibling.classList.add("width100");
  }
  function navHandlerOff(e) {
    e.target.nextSibling.classList.remove("width100");
  }

  useEffect(() => {
    fadeIn();
  })
  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'>
          <div className='logoName'>KRS</div>
          <div className='logoSpan'> </div>
          <div className='fullNameDiv'>
            <span className='fullName'>Kruger</span>
            <span className='fullName'> Recruitment</span>
            <span className='fullName'>Solutions</span>
          </div>
        </div>
      </Link>


      <nav className='navbar'>
        <div><span onMouseOver={navHandlerOn} onMouseOut={navHandlerOff}>Solutions</span><div className='navLine'></div></div>
        <div><span onMouseOver={navHandlerOn} onMouseOut={navHandlerOff}>About</span><div className='navLine'></div></div>
        <div><span onMouseOver={navHandlerOn} onMouseOut={navHandlerOff}>Pricing</span><div className='navLine'></div></div>
        <div><span onMouseOver={navHandlerOn} onMouseOut={navHandlerOff}>Contact Us</span><div className='navLine'></div></div>
      </nav>

      <section className='buttonSec'>
        {
          user ?
            <>
              <p style={{ color: "white", display: "inline-block", marginRight: "10px" }}>{user.name}</p>

              <Button onClick={logout} variant="contained" sx={{ backgroundColor: "#f6bd03", color: "black" }}>Sign out</Button>
            </>
            :
            <Link to="/auth">
              <Button id="loginB" variant="contained" sx={{ backgroundColor: "#f6bd03", color: "black" }}>Sign in</Button>
            </Link>
        }
      </section>

    </div>
  )
}

export default Header