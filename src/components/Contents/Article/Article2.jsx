import pic from '../../../assets/article2.jpg'
import './Article2.css'

function Article2() {


    function inViewport(element) {
        var bb = element.getBoundingClientRect(); 
        return !(bb.top > window.innerHeight || bb.bottom < 0);
    }
  
    document.addEventListener('scroll' , event => {    
        let element = document.getElementById('article2');     
        if(element){

            if (element && inViewport(element)) {
                document.getElementsByClassName("article2img")[0].className += " animate__animated animate__fadeInLeft";
                document.getElementsByClassName("article2_sec")[0].className += " animate__animated animate__fadeInLeft";
            } else if (element ){
                document.getElementsByClassName("article2img")[0].classList.remove("animate__animated","animate__fadeInLeft");
                document.getElementsByClassName("article2_sec")[0].classList.remove("animate__animated","animate__fadeInLeft");
            }
        }    
    })


    return (
        <div id='article2'>
            <section className='article2_sec'>
                <p className='article2_head'>Enhanced Candidate Matching</p>
                <p className='article2_body'>Our advanced algorithms analyze candidate profiles, skills, and experience to provide you with the most relevant and qualified candidates. Our goal is to help you find the perfect fit for your organization quickly and efficiently.</p>
            </section>
            <img className='article2img' src={pic} />
        </div>
    )
}

export default Article2