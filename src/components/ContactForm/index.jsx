import React, { useState } from 'react'

const ContactForm = () => {
  const handleChange = e => {
    if (e.target.value === '') {
      setError(true)
    } else {
      setError(false)
    }
  }

  const [error, setError] = useState(false)

  return (
    <>
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
                required
              />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <input
                type="text"
                placeholder="Enter your lastname"
                id="last_name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="yourname@email.com"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              onChange={handleChange}
              className={error ? 'inputError' : undefined}
            ></textarea>
            {error && <p className="error-text">Please enter a message</p>}
          </div>
          <div>
            <label htmlFor="agree" className="checkbox-container">
              You agree to providing your contact to DNor who may contact you.
              <input type="checkbox" id="agree" />
              <span className="checkmark"></span>
            </label>
          </div>

          <button className="submit-btn" id="btn__submit" disabled={error}>
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
