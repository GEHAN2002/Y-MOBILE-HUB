import React, { useState } from 'react';
import '../styles/pages.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="page contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Location</h3>
            <p>123 Mobile Street</p>
            <p>Tech City, TC 12345</p>
          </div>
          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Mon - Fri: 9AM - 6PM</p>
          </div>
          <div className="info-card">
            <h3>✉️ Email</h3>
            <p>support@ymobilehub.com</p>
            <p>info@ymobilehub.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <div className="success-message">
              ✓ Thank you! We'll get back to you soon.
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}