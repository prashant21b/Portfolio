import React from 'react'
import './Form.css'
import { Heading } from './Heading'
export const Form = () => {
  return (
    <>
    <Heading title="Contact me"/>
    <div className='form-container'>
        
    <form action='mailto:jhakumarprasant111@gmail.com' method='POST' enctype="text/plain">
        <lable for="name">Name:</lable>
        <input type='text' name='name' className='name'  placeholder="Enter Your Name" required></input>
        <lable for="email">Email:</lable>
        <input type='email' name='email' className='email'  placeholder="Enter Your Email" required></input>
        <lable for="message">Message:</lable>
        <textarea type='text' name='message' className='message'  placeholder="Write here.." required></textarea>
        <input type='submit' value="Submit"></input>
    </form>
    </div>
    </>
  )
}
