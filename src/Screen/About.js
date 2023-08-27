import React from 'react'
import { Heading } from '../components/Heading'
import { Footer } from '../components/Footer'
import { Summary } from '../components/Summary'
import Navbar from '../components/Navbar'
import { Image } from '../components/Image'

export const About = () => {
  return (
    <>
    <Navbar/>
    <div style={{display:'flex',flexWrap: 'wrap' , margin:'0 auto'}}>
    <Summary/>
    <Image/>
    </div>
    <Footer/>
    </>
  )
}
