import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

const BookService = () => {
  const [formData, setFormData] = useState({
    serviceId: '',
    customerId: '',
    serviceStartDate: '',
    serviceEndDate: '',
    status: 'Pending'
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/patient/bookservice`, formData, { withCredentials: true });
      if (response.status === 200) {
        setMessage('Service booked successfully');
        setError('');
      }
    } catch (err) {
      setError('Booking failed: ' + (err.response?.data || err.message));
      setMessage('');
    }
  };

  return (
    <div>
      <h3>Book Service</h3>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service ID:</label>
          <input type="text" id="serviceId" value={formData.serviceId} onChange={handleChange} required />
        </div>
        <div>
          <label>Customer ID:</label>
          <input type="text" id="customerId" value={formData.customerId} onChange={handleChange} required />
        </div>
        <div>
          <label>Service Start Date:</label>
          <input type="date" id="serviceStartDate" value={formData.serviceStartDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Service End Date:</label>
          <input type="date" id="serviceEndDate" value={formData.serviceEndDate} onChange={handleChange} required />
        </div>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
};

export default BookService;
