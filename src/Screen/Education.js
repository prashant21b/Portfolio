import React from 'react'

import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Educards } from '../components/Educards'

export const Education= () => {
  return (
    <div >
    <Navbar/>
     <Educards/>
    <Footer style={{marginTop:"500px"}}/>
    </div>
  )
}
