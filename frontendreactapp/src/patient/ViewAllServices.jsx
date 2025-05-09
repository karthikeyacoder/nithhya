import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { useNavigate } from "react-router-dom";

export default function ViewAllServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${config.url}/service/viewallservices`);
        setServices(response.data);
      } catch (err) {
        setError("Failed to fetch services: " + err.message);
      }
    };
    fetchServices();
  }, []);

  const handleBookClick = (serviceId) => {
    navigate(`/bookservice?serviceid=${serviceId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Available Services</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Duration (min)</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.serviceName}</td>
              <td>{service.category}</td>
              <td>{service.description}</td>
              <td>{service.serviceDuration}</td>
              <td>₹{service.servicePrice}</td>
              <td>
                <button onClick={() => handleBookClick(service.id)}>Book</button>
              </td>
            </tr>
          ))}
          {services.length === 0 && (
            <tr>
              <td colSpan="6">No services available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
