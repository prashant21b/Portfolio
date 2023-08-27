import React from 'react'
import {SocialIcon} from 'react-social-icons'
import './Summary.css'
export const Summary = () => {
  return (
    <div className='container'>
        <div className='info'>
            <h3>Hello,it's Me</h3>
            <h2>Prashant Kumar Jha</h2>
            <h3 className='spn'>And I'm a <span>MERN Stack Developer.</span></h3>
        </div>

        <div className='discription'>
            <p>I am a third-year Computer Science and Engineering undergraduate with a strong foundation in C, C++, Java, Python, and Data Structures and Algorithms. Additionally, I specialize in the MERN stack, enabling me to develop powerful web applications.

Passionate about technology and innovation, I constantly seek new challenges and opportunities to expand my knowledge. My commitment to excellence and collaborative nature allows me to work effectively in teams and deliver top-notch results.

I believe in the transformative power of technology and strive to make a positive impact through my skills and creativity. Join me on my journey of exploration and innovation as we shape a better, more connected world through technology.</p>
        </div>
        <div className='social-icons'>
        <SocialIcon url="https://www.linkedin.com/in/prashant-kumar-jha-28b53a228/" />
        <SocialIcon url="https://github.com/prashant21b?tab=repositories" />
        <SocialIcon url="https://instagram.com/in/" />
        <SocialIcon url="https://" />
        </div>
        <div>
        <button className="btn" type="button">
  <strong>Download CV</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>

        </div>
    </div>
  )
}
