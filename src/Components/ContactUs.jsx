import React from 'react'
import "../Style/ContactUs.css"
import { FaEnvelopeOpen } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="main-service-heading">
          <h4 className="service-title">Contact Us</h4>
          <h1 className="e-service-title">Contact For Any Query</h1>
      </div>

      <div className="email-details">
        
        <div>
            <h4 className="service-title">Booking</h4>
            <div className='email-icons'>
                <FaEnvelopeOpen size={15} color='#ffb400'/><h6>book@example.com</h6>
            </div>
        </div>
        <div >
            <h4 className="service-title">Booking</h4>
            <div className='email-icons'>
                <FaEnvelopeOpen size={15} color='#ffb400' /><h6>book@example.com</h6>
            </div>
        </div>
        <div >
            <h4 className="service-title">Booking</h4>
            <div className='email-icons'>
                <FaEnvelopeOpen size={15} color='#ffb400' /><h6>book@example.com</h6>
            </div>
        </div>
      </div>
      <div className="contact-wrapper">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105761.33777929275!2d72.62066937846679!3d34.06844256993465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38def93f4f603821%3A0x7b413c25386fab65!2sTopi!5e0!3m2!1sen!2s!4v1758552651411!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      <div className="contact-form">
        <h2>Message Us</h2>

        <div className="input-group">
          <input type="text" required />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input type="email" required />
          <label>Email</label>
        </div>

        <div className="input-group">
          <input type="text" required />
          <label>Subject</label>
        </div>

        <div className="input-group">
          <textarea rows="4" required></textarea>
          <label>Message</label>
        </div>

        <button className="send-btn">Send Message</button>
      </div>
    </div>
    </div>
  )
}

export default ContactUs
