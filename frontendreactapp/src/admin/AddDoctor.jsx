import { useState } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddDoctor() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
    contactNumber: "",
    address: "",
    specialization: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/doctor/add`, formData);
      if (response.status === 201) {
        toast.success("Doctor added successfully");
        navigate("/viewdoctors");
      } else {
        setError("Failed to add doctor");
      }
    } catch (err) {
      setError("Error occurred: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add Doctor</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Full Name:</label>
          <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" id="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Specialization:</label>
          <input type="text" id="specialization" value={formData.specialization} onChange={handleChange} required />
        </div>
        <button type="submit">Add Doctor</button>
      </form>
      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
}
