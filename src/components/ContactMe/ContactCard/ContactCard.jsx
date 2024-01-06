import React from 'react'
import "./ContactCard.css"

const ContactCard = ({name,link,img}) => {
  return (
    <div className='contact-card-container'>
        <div className='card-name'>{name}</div>
        <div className='card-img'>
            <img src={{img}} alt="abc"></img>
        </div>
        <div className='card-link'>{link}</div>
    </div>
  )
}

export default ContactCard