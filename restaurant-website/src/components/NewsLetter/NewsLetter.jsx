import React, { useState } from 'react';
import './Newsletter.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    // Reset form after submission
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h3 className="newsletter-title">Join Our Newsletter</h3>
        
        <p className="newsletter-description">
          Subscribe to our newsletter to receive the latest news and updates.
        </p>
        
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
