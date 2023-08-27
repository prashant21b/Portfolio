import React from 'react'
import { Link } from 'react-router-dom'
import image from './image.jpg'
import './Card.css'
export const Card = ({item}) => {
  return (
        <div className='Card'>
                <img src={item.image} style={{height:"160px",width:"160px" }}/>
                <h3 style={{color:"green"}}>{item.name}</h3>
                 <p style={{fontSize:"16px",margin:"10px 0",lineHeight:"1.6",textAlign:"center"}}>{item.discription}
                 </p>
                 <span>Tech used-:{item.tech}</span>
                 <Link >
                 <button class="button1">Live</button>
                 
                </Link>
                <Link to={item.github}>
                <button class="button2">Code</button>
                </Link>
            </div>     
   
  )
}
