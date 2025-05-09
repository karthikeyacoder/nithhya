import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewAllServices() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState("");

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

  return (
    <div className="service-table-container" style={{ padding: "20px" }}>
      <h3 className="service-heading">All Services</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="table-responsive">
        <table className="service-table" style={{ textAlign: "center", width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Provider ID</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.category}</td>
                <td>{service.serviceName}</td>
                <td>{service.description}</td>
                <td>{service.serviceDuration}</td>
                <td>₹{service.servicePrice}</td>
                <td>{service.serviceProvider_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
