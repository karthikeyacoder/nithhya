import './customer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';
import React, { useState } from 'react';

export default function PatientLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setIsPatientLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/patient/checkpatientlogin`, formData);

      if (response.status === 200) {
        setIsPatientLoggedIn(true);
        sessionStorage.setItem('patient', JSON.stringify(response.data));
        navigate('/patienthome');
      } else {
        setMessage(response.data);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Patient Login</h3>
      {
        message
          ? <p style={{ textAlign: 'center', color: 'green', fontWeight: 'bolder' }}>{message}</p>
          : <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bolder' }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
       
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
