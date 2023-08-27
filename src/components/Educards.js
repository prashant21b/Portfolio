import React from 'react'
import { Educard } from './Educard'
import { Heading } from './Heading'
import educationDetails from '../Screen/data2'
const container={
        
  display: "flex",
  flexWrap: "wrap",
  justifyContent:"space-between",
  margin:"0 auto", 
  marginTop:"60px"  ,
maxWidth:"1280px",
marginBottom:"140px"
}
export const Educards = () => {
  return (
    <div >
      <Heading title="Education"/>
      <div style={container}>
      {
        educationDetails.map(item=>{
          return <Educard item={item}/>
        })
      }
      </div>
        
    </div>
  )
}


