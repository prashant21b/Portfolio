import React, { useState } from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaDatabase,FaPython} from 'react-icons/fa'; // Import icons from react-icons
import {SiCplusplus} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import './SkillCard.css'; // Make sure to create a corresponding CSS file
import { Skill } from './Skill';

const skills = [
  {name:'Python',},
  {name:'C++'},
  { name: 'Java' },
  { name: 'HTML'},
  { name: 'CSS'},
  {name:'JavaScripts'},
  { name: 'BootStrap' },
  { name: 'React'},
  { name: 'Node.js' },
  { name: 'Express'},
  { name: 'MongoDB' },
  { name: 'DSA' },
  { name: 'Redux' },
  { name: 'AWS' },
  { name: 'ML' },
 
  

  // Add more skills here
];

const SkillCard = () => {
  

  return (
    <div className="skill-card-container">
      {
        skills.map((skill)=>{
          return <Skill item={skill.name}/>
        })
      }
    </div>
  );
};

export default SkillCard;





