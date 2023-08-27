import React from 'react'
import './Heading.css'
export const Heading = (props) => {
  return (
<div className='wrap'>
<p class="subtitle fancy"><span>{props.title}</span></p>

</div>
  )
}
