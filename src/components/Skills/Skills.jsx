import React, { useState } from 'react'
import { SKILLS } from '../utils/data'
import SkillCard from './SkillCard/SkillCard'
import "./Skills.css"
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => {
    let [selectedSkill, setSelectedSkill] =useState(SKILLS[0]);

    const handlerSelectedSkill =(data)=>{
      setSelectedSkill(data);
    }


  return (
    <>  
    <h5>Technical Proficiency</h5>
    <section className="skills-container">
    
        <div className="skills-content">
            <div className='skills'>
           
           {
           SKILLS.map((item) => {
             return (
               <SkillCard 
               key={item.title}
               iconUrl={item.icon}
               title={item.title}
             isActive={selectedSkill.title === item.title}
             onClick={()=>{
              handlerSelectedSkill(item);
             }}
               />
               )
              })}
            </div>
        <div className="skills-info">
          <SkillsInfoCard 
          heading={selectedSkill.title}
          skills={selectedSkill.skills}
          />
        </div>
        </div>

    </section>
              </>
  )
}

export default Skills