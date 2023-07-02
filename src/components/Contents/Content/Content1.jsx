import React from 'react'
import './Content1.css'
import 'animate.css';
import pic from "../../../assets/content1.jpg";
import pic2 from "../../../assets/content1img22.jpg";
import Button from '@mui/material/Button';




export const fadeEffect = ()=>{
  document.getElementsByClassName("content1_section")[0].className += " visible animate__animated animate__fadeInLeft";
  document.getElementsByClassName("content1img")[0].className += " visible animate__animated animate__fadeInRight";
}

const appearOdis = (foo) =>{
  if(foo)
    document.getElementsByClassName("content1img2")[0].className += " visible animate__animated animate__fadeInUp";
  else{
    document.getElementsByClassName("content1img2")[0].className += " animate__fadeOutDown";
    setTimeout(()=>{
      document.getElementsByClassName("content1img2")[0].classList.remove("animate__animated", "visible","animate__fadeInUp", "animate__fadeOutDown");
    }, 650)
    // document.getElementsByClassName("content1img2")[0].classList.remove("animate__animated", "visible","animate__fadeInLeft", "animate__fadeOutRight");
  }
}
function Content1() {

  return (
    <div className='content1'>
      <section className='content1_section'>
        <header>Find and hire qualified candidates for your businesses.</header>
        <p>We help all sorts of businesses to find and hire qualified candidates online at one place easily.</p>

          <Button variant='contained' color='warning'>Try Us</Button>
      

      </section>


        <img onMouseOver={()=>appearOdis(true)} onMouseLeave={()=>appearOdis(false)} className='content1img' src={pic}/>

        <img className='content1img2' src={pic2}/>
    </div>
  )
}

export default Content1