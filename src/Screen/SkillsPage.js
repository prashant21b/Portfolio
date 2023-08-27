import React from 'react'

import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import  Skills  from '../components/Skills'
import {Heading} from '../components/Heading'
export const SkillsPage= () => {
  return (
    <div >
    <Navbar/>
    <Heading title="Technical Skills" />
     <Skills/>
    <Footer style={{marginTop:"500px"}}/>
    </div>
  )
}
