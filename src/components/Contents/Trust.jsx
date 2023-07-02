import pic1 from '../../assets/image1.png'
import pic2 from '../../assets/image2.png'
import pic3 from '../../assets/image3.png'
import pic4 from '../../assets/image4.png'
import './Trust.css'
function Trust() {
  return (
    <div className='tech'>
      <p className='techHead'>Featured on</p>
      <div className='techImgDiv'> 
        <img src={pic1} alt="" className="techImg" />
        <img src={pic2} alt="" className="techImg" />
        <img src={pic3} alt="" className="techImg" />
        <img src={pic4} alt="" className="techImg" />
      </div>
    </div>
  )
}

export default Trust