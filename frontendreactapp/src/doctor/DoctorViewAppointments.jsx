import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function DoctorViewAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const doctor = JSON.parse(sessionStorage.getItem('doctor'));
    if (doctor) {
      axios.get(`${config.url}/doctor/viewappointments/${doctor.id}`)
        .then(response => setAppointments(response.data))
        .catch(() => setMessage('Failed to fetch appointments.'));
    } else {
      setMessage('Please login first.');
    }
  }, []);

  const handleAccept = (appointmentId) => {
    axios.post(`${config.url}/doctor/acceptappointment/${appointmentId}`)
      .then(() => {
        setAppointments(appointments.filter(a => a.id !== appointmentId));
        setMessage('Appointment accepted.');
      })
      .catch(() => setMessage('Failed to accept appointment.'));
  };

  const handleCancel = (appointmentId) => {
    axios.post(`${config.url}/doctor/cancelappointment/${appointmentId}`)
      .then(() => {
        setAppointments(appointments.filter(a => a.id !== appointmentId));
        setMessage('Appointment cancelled.');
      })
      .catch(() => setMessage('Failed to cancel appointment.'));
  };

  const handleComplete = (appointmentId) => {
    axios.post(`${config.url}/doctor/completeappointment/${appointmentId}`)
      .then(() => {
        setAppointments(appointments.filter(a => a.id !== appointmentId));
        setMessage('Appointment marked as completed.');
      })
      .catch(() => setMessage('Failed to complete appointment.'));
  };

  return (
    <div>
      <h2>Doctor Appointments</h2>
      {message && <p>{message}</p>}
      <ul>
        {appointments.length === 0 && <li>No appointments found.</li>}
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.date} {appointment.time}
            <button onClick={() => handleAccept(appointment.id)}>Accept</button>
            <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
            <button onClick={() => handleComplete(appointment.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
