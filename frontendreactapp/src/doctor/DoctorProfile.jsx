import { useState, useEffect } from 'react';

export default function DoctorProfile() {
  const [doctor, setDoctor] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedDoctor = sessionStorage.getItem('doctor');
    if (storedDoctor) {
      setDoctor(JSON.parse(storedDoctor));
    } else {
      setMessage('Please login to view profile.');
    }
  }, []);

  if (!doctor) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Doctor Profile</h2>
      <p><strong>Full Name:</strong> {doctor.fullName}</p>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Email:</strong> {doctor.email}</p>
      <p><strong>Contact Number:</strong> {doctor.contactNumber}</p>
      <p><strong>Address:</strong> {doctor.address}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
