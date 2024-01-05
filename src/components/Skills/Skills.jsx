import React from 'react'
import { SKILLS } from '../utils/data'
import SkillCard from './SkillCard/SkillCard'

const Skills = () => {
  return (

    <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
            <div className='skills'>
           {SKILLS.map((item) => {
              return (
                <SkillCard 
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                />
              )
          })}
            </div>
        <div className="skills-info">
        </div>
        </div>

    </section>
  )
}

export default Skills