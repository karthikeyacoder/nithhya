import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function PatientHome() {
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${config.url}/patient/viewallservices`)
      .then(response => setServices(response.data))
      .catch(() => {});
  }, []);

  const handleBooking = () => {
    const patient = JSON.parse(sessionStorage.getItem('patient'));
    if (!patient) {
      setMessage('Please login first.');
      return;
    }
    if (!selectedServiceId) {
      setMessage('Please select a service.');
      return;
    }
    const booking = {
      patient: { id: patient.id },
      service: { id: parseInt(selectedServiceId) }
    };
    axios.post(`${config.url}/patient/bookservice`, booking)
      .then(response => setMessage(response.data))
      .catch(() => setMessage('Failed to book service.'));
  };

  return (
    <div>
      <h2>Welcome to Patient Home</h2>
      <div>
        <label>Select Service:</label>
        <select value={selectedServiceId} onChange={e => setSelectedServiceId(e.target.value)}>
          <option value="">--Select--</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>{service.serviceName}</option>
          ))}
        </select>
        <button onClick={handleBooking}>Book Appointment</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
