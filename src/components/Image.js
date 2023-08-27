import React from 'react'
import image from './image.jpg'
import './Image.css'

export const Image = () => {
  return (
    <div className='img' style={{borderRadius:'50%'}}>
        <img src={image}/>
    </div>
   
  )
}
