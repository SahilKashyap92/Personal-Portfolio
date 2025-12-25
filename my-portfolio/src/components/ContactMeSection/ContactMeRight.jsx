import React from 'react'
import Contactinfo from './Contactinfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src="/Images/gmail-logo.png" alt="gamil-logo" className="max-w-[300px] " />

      <Contactinfo />
      <ContactSocial />
    </div>
  )
}

export default ContactMeRight
