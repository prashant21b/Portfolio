import React from 'react'

import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Cards } from '../components/Cards'
export const Project = () => {
  return (
    <div style={{ background: "#212121"}} >
    <Navbar/>
     <Cards/>
    <Footer style={{marginTop:"500px"}}/>
    </div>
  )
}
