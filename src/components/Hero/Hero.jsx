import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
  <section className="hero-container">
    <div className="hero-content">
      <h2>Building diital Experience That Inspires</h2>
      <p>
        Passionate Frontend Developer | Transforming Ideas Into Seamless 
        and Visually Stunning Web Solutions
      </p>
    </div>
    <div className="hero-img">
      <div>
        <div className="tech-icon">
          <img className='logoi' src="./logo192.png" alt="" />
        </div>
        <img  src="./abc.png" alt="" />

      </div>
      <div>
        <div className="tech-icon">
          <img className='logoi' src="./images/html.png" alt="" />
        </div>
        <div className="tech-icon">
          <img className='logoi' src="././images/css.png" alt="" />
        </div>
        <div className="tech-icon">
          <img className='logoi' src="././images/javaS.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  
  
    )
}

export default Hero