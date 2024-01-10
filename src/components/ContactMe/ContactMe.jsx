import React from 'react'
import "./ContactMe.css"
import ContactCard from './ContactCard/ContactCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <div className='contact-container'>
      <h5>contact</h5>
      <ContactCard 
      img={"/abc.png"}
      name={"Email"}
      link={"gopalchobey9@gmail.com"}
      />
      <ContactCard 
      img={"/abc.png"}
      name={"Github"}
      link={"gopalchobey9"}
      />

      <div className='contact-form'>
        <ContactForm />
      </div>
    </div>
  )
}
export default ContactMe