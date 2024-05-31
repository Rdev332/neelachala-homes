import React from "react";
import { useState, useEffect } from "react";
import * as pixel from '../../common/fpixel'

const Contact = ({ footerData }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [sendingError, setSendingError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) {
      return;
    }
    try {
      pixel.event('Contact', {
        name,
        phone,
        email,
        message
      })
      const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        setPhoneError('Please enter a valid 10-digit phone number.');
        return;
      } else {
        setPhoneError('')
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      } else {
        setEmailError('')
      }
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        const data = await response.json();
        setShowMessage(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setSendingError('')
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [showMessage]);

  return (
    <>
      <section className="contact cont-map" id="contactForm">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".1s"
            >
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="section-head">
                  <h6>Contact Us</h6>
                  <h4 className="playfont">Get In Touch</h4>
                </div>

                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required="required"
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="2"
                      required="required"
                      value={message} onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  {sendingError && <p style={{ color: 'red' }}>{sendingError}</p>}
                  <button type="submit" className="btn-curve btn-color"
                    disabled={!name || !phone || !email || !message}
                  >
                    <span>
                      {showMessage ? "Message Sent" : "Send Message"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          {footerData.map_iframe && <iframe
            style={{
              // filter: "grayscale(100%)",
            }}
            src={footerData.map_iframe}></iframe>}
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: `url(${footerData.home_page_contact_form_bg_image.data.attributes.url})` }}
        ></div>
      </section>
    </>
  );
};

export default Contact;
