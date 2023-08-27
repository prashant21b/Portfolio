import React from 'react'
import Navbar from '../components/Navbar'
import { Summary } from '../components/Summary'
import { Image } from '../components/Image'
import { Cards } from '../components/Cards'
import { Footer } from '../components/Footer'
import { Educards } from '../components/Educards'
import { Skills } from '../components/Skills'
import { Form } from '../components/Form'
export const Home = () => {
  return (
    <>
    <div><Navbar></Navbar></div>
    <div style={{display:'flex',flexWrap: 'wrap' , margin:'0 auto'}}>

    <Summary/>
    <Image/>
    </div>
    {/* <Cards/>
    <Educards/>
    <Skills/>
    
   <Form/> */}
    <Footer/>
    </>
  )
}

