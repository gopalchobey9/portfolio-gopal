import React from 'react'
import "./Navbar.css"



const Navbar = () => {
  return (
    <>
    <nav className="nav-wrapper">
    <div  className='nav-content'>
        <img className='logo' src="./abc.png" alt="" />
        <ul>
            <li>
                <a className='menu-item' >Home</a>
            </li>
            <li>
                <a className='menu-item' >Skills</a>
            </li>
            <li>
                <a className='menu-item'  >Work Experience</a>
            </li> <li>
                <a className='menu-item' >Contact Me</a>
            </li>
            <button className='contact-btn' onClick={()=>{}}>
                Hire Me
            </button>
                </ul>
            <button className="menu-btn" onClick={()=>{} } >
            <span class="material-icons">
                menu
            </span>
            </button>
    </div>

    </nav>
    </>
  )
}

export default Navbar