import React, { useEffect } from 'react'
import Header from './Header/Header'
import Content1 from './Contents/Content/Content1'
import { fadeEffect } from './Contents/Content/Content1'
import { fadeIn } from './Header/Header'
import Content2 from './Contents/Content/Content2'
import Article1 from './Contents/Article/Article1'
import Article2 from './Contents/Article/Article2'
import Article3 from './Contents/Article/Article3'
import Text from './Contents/Text'
import Trust from './Contents/Trust'
import Footer from './Contents/Footer'

function Home() {

 useEffect (()=>{
    fadeIn();
    fadeEffect();
    window.scroll(0, 0);
  })
  return (
    <div>
        <Header/>
        <Content1/>
        <Content2/>
        <Article1 />
        <Article2 />
        <Article3 />
        <Trust/>
        <Text />
        <Footer />
    </div>
  )
}

export default Home