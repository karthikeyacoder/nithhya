import { useState } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddService() {
  const [service, setService] = useState({
    category: '',
    serviceName: '',
    description: '',
    serviceDuration: 0,
    servicePrice: 0,
    serviceStatus: 'PENDING',
    serviceProviderId: 0
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/service/addservice`, service);
      if (response.status === 200) {
        toast.success("Service added successfully");
        navigate("/viewallservices");
      } else {
        setMessage("Failed to add service");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Add Service</h3>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={service.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Service Name:</label>
          <input type="text" name="serviceName" value={service.serviceName} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={service.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input type="number" name="serviceDuration" value={service.serviceDuration} onChange={handleChange} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" name="servicePrice" value={service.servicePrice} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <select name="serviceStatus" value={service.serviceStatus} onChange={handleChange} required>
            <option value="PENDING">PENDING</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <div>
          <label>Service Provider ID:</label>
          <input type="number" name="serviceProviderId" value={service.serviceProviderId} onChange={handleChange} required />
        </div>
        <button type="submit">Add Service</button>
      </form>
      <ToastContainer position="top-center" autoClose={4000} />
    </div>
  );
}
