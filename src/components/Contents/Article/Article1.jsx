import pic from '../../../assets/article1.jpg'
import './Article1.css'

function Article1() {


    function inViewport(element) {
        var bb = element.getBoundingClientRect(); 
        
        return !(bb.top > window.innerHeight || bb.bottom < 0);
    }
  
    document.addEventListener('scroll' , event => {    
        let element = document.getElementById('article1');     
        if(element){

            if (element && inViewport(element)) {
                document.getElementsByClassName("article1img")[0].className += " animate__animated animate__fadeInRight";
                document.getElementsByClassName("article1_sec")[0].className += " animate__animated animate__fadeInRight";
            } else if (element ){
                document.getElementsByClassName("article1img")[0].classList.remove("animate__animated","animate__fadeInRight");
                document.getElementsByClassName("article1_sec")[0].classList.remove("animate__animated","animate__fadeInRight");
            }
        }    
    })


    return (
        <div id='article1'>
            <img className='article1img' src={pic} />
            <section className='article1_sec'>
                <p className='article1_head'>Streamlined Hiring Process</p>
                <p className='article1_body'>Our platform utilizes cutting-edge technology to automate and simplify the hiring process, saving you valuable time and effort.</p>
            </section>
        </div>
    )
}

export default Article1