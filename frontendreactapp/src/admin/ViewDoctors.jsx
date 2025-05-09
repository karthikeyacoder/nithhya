import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function ViewDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${config.url}/doctor/alldoctors`);
        setDoctors(response.data);
      } catch (err) {
        setError("Failed to fetch doctors: " + err.message);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Doctors List</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>No doctors found</td>
            </tr>
          ) : (
            doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.username}</td>
                <td>{doctor.fullName}</td>
                <td>{doctor.email}</td>
                <td>{doctor.contactNumber}</td>
                <td>{doctor.address}</td>
                <td>{doctor.specialization}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
