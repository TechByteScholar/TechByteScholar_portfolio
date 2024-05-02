import React from 'react';
import './Contact.css'; // Ensures styles are applied from Contact.css

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or just want to get in touch, feel free to contact us through any of the platforms below.</p>
      <div className="contact-methods">
        <div className="contact-method">
          <h3>Email</h3>
           <a href="mailto:techbytescholar@gmail.com" className="contact-link">techbytescholar@gmail.com</a>
        </div>
        <div className="contact-method">
           <h3>WhatsApp</h3> 
              <a href="https://wa.me/+821072816645?text=I'm%20interested%20in%20your%20services." 
                 className="contact-link">+82 10-7281-6645</a>
                 
                 <a href="https://wa.me/+447933898413?text=I'm%20interested%20in%20your%20services." 
                 className="contact-link">+44 7933 898413</a>
        </div>
        <div className="contact-method">
          <h3>Social Media</h3>
          <div className="social-media-links">
            <a href="https://www.linkedin.com/in/freyasantos/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              Facebook
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              Instagram
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              Twitter
            </a>
          </div>
        </div>
        <div className="contact-method">
          <h3>Address</h3>
          <p>Visit us at:</p>
          <address>
          45 Denmark Street<br />
          Wokingham, Berkshire, RG40 2AY<br />
          United Kingdom.

             
          </address>
        </div>
      </div>
    </div>
  );
};

export default Contact;
