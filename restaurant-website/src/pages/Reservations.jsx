import React, { useState, useEffect } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });
  
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Generate available times from 3:30 PM to 11:30 PM in 30-minute intervals
  useEffect(() => {
    const times = [];
    let hour = 15; // 3 PM in 24-hour format
    let minute = 30;

    while (hour < 24) {
      // Break the loop when we reach 11:30 PM
      if (hour === 23 && minute === 30) {
        times.push(`${hour}:${minute === 0 ? '00' : minute}`);
        break;
      }

      times.push(`${hour}:${minute === 0 ? '00' : minute}`);
      
      // Increment by 30 minutes
      minute += 30;
      if (minute === 60) {
        hour += 1;
        minute = 0;
      }
    }
    
    setAvailableTimes(times);
  }, []);

  // Format the time for display (convert from 24-hour format to 12-hour format)
  const formatTimeForDisplay = (time) => {
    if (!time) return '';
    
    const [hour, minute] = time.split(':');
    const hourNum = parseInt(hour, 10);
    
    const period = hourNum >= 12 ? 'PM' : 'AM';
    const hour12 = hourNum === 0 ? 12 : hourNum > 12 ? hourNum - 12 : hourNum;
    
    return `${hour12}:${minute} ${period}`;
  };

  // Check if a date is valid (Wednesday to Sunday)
  const isValidDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDay();
    
    // 0 is Sunday, 3 is Wednesday, 4 is Thursday, 5 is Friday, 6 is Saturday
    return day === 0 || day >= 3;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for date to validate day of week
    if (name === 'date') {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Check if the selected day is valid
      if (value && !isValidDate(value)) {
        setFormErrors({
          ...formErrors,
          date: 'Reservations are only available from Wednesday to Sunday'
        });
      } else {
        // Clear error if date is valid
        const updatedErrors = { ...formErrors };
        delete updatedErrors.date;
        setFormErrors(updatedErrors);
      }
      return;
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
    }
    
    if (!formData.date) {
      errors.date = 'Date is required';
    } else if (!isValidDate(formData.date)) {
      errors.date = 'Reservations are only available from Wednesday to Sunday';
    }
    
    if (!formData.time) errors.time = 'Time is required';
    
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      // In a real application, this is where you would submit the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  // Get today's date in YYYY-MM-DD format for the date input's min attribute
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get a date 3 months from now for the date input's max attribute
  const getMaxDate = () => {
    const today = new Date();
    today.setMonth(today.getMonth() + 3);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="reservations-container">
      <div className="reservations-header">
        <h1>Make a Reservation</h1>
        <p>We look forward to hosting you at Café Fausse</p>
      </div>
      
      {submitted ? (
        <div className="confirmation-message">
          <h2>Thank You!</h2>
          <p>Your reservation request has been submitted. We will confirm your reservation via email or phone soon.</p>
          <div className="reservation-details">
            <h3>Reservation Details:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> {formatTimeForDisplay(formData.time)}</p>
            <p><strong>Party Size:</strong> {formData.guests} {formData.guests === 1 ? 'guest' : 'guests'}</p>
          </div>
          <button className="new-reservation-button" onClick={() => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              date: '',
              time: '',
              guests: 2,
              specialRequests: ''
            });
            setSubmitted(false);
          }}>Make Another Reservation</button>
        </div>
      ) : (
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <div className="error-message">{formErrors.name}</div>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <div className="error-message">{formErrors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={formErrors.phone ? 'error' : ''}
              />
              {formErrors.phone && <div className="error-message">{formErrors.phone}</div>}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date (Wed-Sun only)</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={getTodayDate()}
                max={getMaxDate()}
                className={formErrors.date ? 'error' : ''}
              />
              {formErrors.date && <div className="error-message">{formErrors.date}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="time">Time (3:30 PM - 11:30 PM)</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={formErrors.time ? 'error' : ''}
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {formatTimeForDisplay(time)}
                  </option>
                ))}
              </select>
              {formErrors.time && <div className="error-message">{formErrors.time}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i + 2} value={i + 2}>
                    {i + 2} {i + 2 === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests (Optional)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          
          <div className="reservation-notes">
            <p>Please note:</p>
            <ul>
              <li>Reservations can be made up to 3 months in advance</li>
              <li>For parties larger than 10, please call us directly</li>
              <li>We hold reservations for 15 minutes past the reserved time</li>
              <li>A credit card is not required to reserve a table, but a 24-hour cancellation policy applies</li>
            </ul>
          </div>
          
          <button type="submit" className="submit-button">Reserve Table</button>
        </form>
      )}
    </div>
  );
};

export default Reservations;