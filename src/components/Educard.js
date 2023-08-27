import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import './Educard.css'
export const Educard = ({item}) => {
  return (
    <div className='box'>
        <div className='icon'>
        <FaGraduationCap size={30} />
        </div>
        <div className='text'>
        <h3>{item.institute}</h3>
             <h4><span>{item.course}</span></h4>
             <h3><span>{item.year}</span></h3>
             <h2>CPI/marks -: <span>{item.marks}</span></h2>
        </div>
        

    </div>
  )
}





