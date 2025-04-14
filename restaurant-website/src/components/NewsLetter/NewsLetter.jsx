import React, { useState } from 'react';
import './Newsletter.css';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);
    setIsError(false);
    
    try {

      const response = await fetch('http://127.0.0.1:5000/newsletter/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSuccess(true);
        setMessage(data.message);
        // Reset form after successful submission
        setEmail('');
      } else {
        setIsError(true);
        setMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Network error. Please try again later.');
      console.error('Newsletter submission error:', error);
    } finally {
      setIsLoading(false);
    }
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
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="newsletter-button"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        
        {message && (
          <p className={`newsletter-message ${isSuccess ? 'success' : ''} ${isError ? 'error' : ''}`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;