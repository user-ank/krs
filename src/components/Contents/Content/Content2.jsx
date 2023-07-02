import { useEffect, useState } from 'react'
import './Content2.css'

function Content2() {

  const [clas, changeClass] = useState('content2')
  
  useEffect(()=>{
    setTimeout(()=>changeClass(prev => prev + " show"), 1000)
  },[])

  return (
    <div className={clas}>
        <p className='content2_head'>Get rid of the traditional and time-consuming hiring process.</p>
        <p className='content2_body' >
            Our digital recruitment solution app is here to revolutionize the way you hire top talent for your multinational company.
        </p>
        <p className='content2_foot'>Why Choose Our Services ?</p>
    </div>
  )
}

export default Content2