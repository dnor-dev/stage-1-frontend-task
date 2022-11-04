import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask anything you have in mind</p>

      <form action="" className="form">
        <div className="flex-names">
          <div>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              placeholder="Enter your firstname"
              id="first_name"
            />
          </div>
          <div>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              placeholder="Enter your lastname"
              id="last_name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="yourname@email.com" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Send me a message and i'll reply you as soon as possible..."
          ></textarea>
        </div>
        <div>
          <label htmlFor="agree" className="checkbox-container">
            You agree to providing your contact to name who may contact you.
            <input type="checkbox" id="agree" />
            <span className="checkmark"></span>
          </label>
        </div>

        <input
          type="submit"
          value="Send Message"
          className="submit-btn"
          id="btn__submit"
        />
      </form>
    </div>
  )
}

export default ContactForm
