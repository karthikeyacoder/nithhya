import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function BookedEvents() {
  const [bookedServices, setBookedServices] = useState([]);
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const fetchBookedServices = async () => {
      const storedPatient = sessionStorage.getItem('patient');
      if (storedPatient) {
        const patientData = JSON.parse(storedPatient);
        setPatient(patientData);
        try {
          const response = await axios.get(`${config.url}/patient/bookedservices/${patientData.id}`);
          setBookedServices(response.data);
        } catch (error) {
          console.error('Error fetching booked services:', error);
        }
      } else {
        alert('Please log in to view your booked appointments.');
      }
    };

    fetchBookedServices();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Booked Appointments</h3>
      {patient ? (
        <div>
          <table style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th>Booking ID</th>
                <th>Service Category</th>
                <th>Service Name</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Cause</th>
                <th>Status</th>
                <th>Booking Time</th>
              </tr>
            </thead>
            <tbody>
              {
                bookedServices.length > 0 ? bookedServices.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.id}</td>
                    <td>{booking.service.category}</td>
                    <td>{booking.service.serviceName}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.appointmentTime}</td>
                    <td>{booking.cause}</td>
                    <td>{booking.status}</td>
                    <td>{new Date(booking.bookingTime).toLocaleString()}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="8">No booked appointments found.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading your patient details...</p>
      )}
    </div>
  );
}
