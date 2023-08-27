import React from 'react'
import { Form } from '../components/Form'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
export const Contact = () => {
  return (
    <div >
    <Navbar/>
    <Form/>
    <Footer style={{marginTop:"500px"}}/>
    </div>
  )
}
