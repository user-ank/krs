import pic from '../../../assets/article3.jpg'
import './Article3.css'

function Article3() {


    function inViewport(element) {
        var bb = element.getBoundingClientRect(); 
       
        return !(bb.top > window.innerHeight || bb.bottom < 0);
    }
  
    document.addEventListener('scroll' , event => {    
        let element = document.getElementById('article3'); 
        if(element){

            if (element && inViewport(element)) {
                document.getElementsByClassName("article3img")[0].className += " animate__animated animate__fadeInLeft";
                document.getElementsByClassName("article3_sec")[0].className += " animate__animated animate__fadeInRight";
            } else if (element ){
                document.getElementsByClassName("article3img")[0].classList.remove("animate__animated","animate__fadeInLeft");
                document.getElementsByClassName("article3_sec")[0].classList.remove("animate__animated","animate__fadeInRight");
            }
        }    
    })


    return (
        <div id='article3'>
            <img className='article3img' src={pic} />
            <section className='article3_sec'>
                <p className='article3_head'>Data-Driven Insights</p>
                <p className='article3_body'> Leverage powerful analytics and reporting tools to gain valuable insights into your recruitment efforts. Track key metrics, measure the effectiveness of your job listings, and make data-driven decisions to optimize your hiring strategy.</p>
            </section>
        </div>
    )
}

export default Article3