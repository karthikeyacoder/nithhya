import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './doctor.css';

export default function DoctorRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    company_name: '',
    company_location: '',
    specialty: '',
    availability: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/serviceprovider/registration`, formData);

      if (response.status === 200) {
        setMessage('Registration successful. Please login.');
        setError('');
        setTimeout(() => navigate('/doctorlogin'), 2000);
      } else {
        setMessage('');
        setError(response.data);
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
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Doctor Registration</h3>
      {
        message
          ? <p style={{ textAlign: 'center', color: 'green', fontWeight: 'bolder' }}>{message}</p>
          : <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bolder' }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" id="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Mobile No</label>
          <input type="text" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>
        <div>
          <label>Company Name</label>
          <input type="text" id="company_name" value={formData.company_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Company Location</label>
          <input type="text" id="company_location" value={formData.company_location} onChange={handleChange} required />
        </div>
        <div>
          <label>Specialty</label>
          <input type="text" id="specialty" value={formData.specialty} onChange={handleChange} required />
        </div>
        <div>
          <label>Availability</label>
          <input type="text" id="availability" value={formData.availability} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}
