import Button from '@mui/material/Button';
import './Text.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function Text() {
  function pulse(foo) {

    console.log(document.getElementsByClassName('text_head'));

    if (foo)
      document.getElementsByClassName('text_head')[0].className += " animate__animated animate__pulse";
    else
      document.getElementsByClassName('text_head')[0].classList.remove("animate__animated", "animate__pulse");
  }

  return (
    <div className='text' onMouseOver={() => pulse(true)} onMouseLeave={() => pulse(false)}>
      <p className='text_head'> Experience the Future of Recruitment Today!</p>
     
      <p className='text_body'>
        Join leading multinational companies that have already transformed their hiring process with our online recruitment solution. Discover the ease, efficiency, and effectiveness of our platform, and unlock a world of talented candidates ready to contribute to your organization's success.
      </p>

      <Link to="/candidate">
        <Button variant='contained' color='warning'>Get Started Now &nbsp;<ArrowForwardIcon/></Button>
      </Link>
    </div>
  )
}

export default Text