import React from "react";
import appData from '../../data/app.json'
import { useState, useEffect } from "react";

const ContactWithMap = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !message) {
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setShowMessage(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
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
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post">
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

              <button type="submit" className="btn-curve btn-color" onClick={handleSubmit}
                disabled={!name || !phone || !email || !message}
              >
                <span>
                  {showMessage ? 'Message Sent' : 'Send Message'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
