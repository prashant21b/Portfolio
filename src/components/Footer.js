import React from 'react'
import './Footer.css'
import {SocialIcon} from 'react-social-icons'
export const Footer = () => {
  return (
    <div className='footer'>

  <h3>Created by <span>Prashant kumar jha</span></h3>
<div className='social-icons'>
        <SocialIcon url="https://linkedin.com/in/" />
        <SocialIcon url="https://github.com/in/" />
        <SocialIcon url="https://instagram.com/in/" />
        <SocialIcon url="https://codechef.com/in/" />
</div>
    </div>
  )
}
