import { Card } from "./Card";
import './Cards.css'
import React from 'react'
import './Summary.css'
import { Heading } from "./Heading";
import projectDetails from '../Screen/data'
export const Cards = () => {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center horizontally
    margin: "0 auto",
    maxWidth: "1680px",
  };

    const container2= {
      display:"flex",
      justifyContent:"center",
      alignitems: "center",
      height:"20vh", /* Adjust as needed */
      marginTop:"50px"
    }
  return (
    <div>
        <Heading title="Project"/>
    <div style={container}>
    {/* <Card/>
    <Card/>
    <Card/>
    <Card/> */}
    {
      projectDetails.map(item=>{
        return <Card item={item} />
      })
    }
    
    </div>
    


    </div>
  )
}
