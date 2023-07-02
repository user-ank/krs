import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TextField } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className='footer'>
      <div className='iconTray'><InstagramIcon fontSize='large' /> <TwitterIcon fontSize='large'/> <FacebookIcon fontSize='large'/><YouTubeIcon fontSize='large'/></div>
      <div className='copyRight'><CopyrightIcon/> Kruger Recruitment Solutions 2023</div>
      <div className='feedback'>
        <p>Your Feedback Is Valuable For Us</p>
        <TextField id="outlined" label="Type here" multiline color='grey' sx={{minHeight:"100px"}} variant="outlined" />
      </div>
    </div>
  )
}

export default Footer