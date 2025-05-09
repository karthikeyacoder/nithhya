import { useState, useEffect } from 'react';

export default function PatientProfile() {
  const [patient, setPatient] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedPatient = sessionStorage.getItem('patient');
    if (storedPatient) {
      setPatient(JSON.parse(storedPatient));
    } else {
      setMessage('Please login to view profile.');
    }
  }, []);

  if (!patient) {
    return <div>{message}</div>;
  }

  return (
    <div>
      <h2>Patient Profile</h2>
      <p><strong>Full Name:</strong> {patient.fullName}</p>
      <p><strong>Email:</strong> {patient.email}</p>
      <p><strong>Contact Number:</strong> {patient.contactNumber}</p>
      <p><strong>Address:</strong> {patient.address}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
