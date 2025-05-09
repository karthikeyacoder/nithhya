import { useState } from "react";
import axios from "axios";
import config from "../config";

export default function DisplayServices() {
  const [services, setServices] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [serviceDetails, setServiceDetails] = useState(null);
  const [error, setError] = useState('');

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${config.url}/service/viewallservices`);
      setServices(response.data);
    } catch (err) {
      setError('Failed to fetch services: ' + err.message);
    }
  };

  const fetchServiceDetails = async (id) => {
    try {
      const response = await axios.post(`${config.url}/service/displayservicebyid?sid=${id}`);
      setServiceDetails(response.data);
    } catch (err) {
      setError('Error fetching service: ' + err.message);
    }
  };

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    if (id) {
      fetchServiceDetails(id);
    } else {
      setServiceDetails(null);
    }
  };

  // Fetch services on component mount
  if (services.length === 0 && !error) {
    fetchServices();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Display Service</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <select value={selectedId} onChange={handleSelectChange}>
        <option value="">-- Select Service --</option>
        {services.map(service => (
          <option key={service.id} value={service.id}>
            {service.serviceName}
          </option>
        ))}
      </select>
      {serviceDetails && (
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{serviceDetails.serviceName}</h5>
            <p><strong>Category:</strong> {serviceDetails.category}</p>
            <p><strong>Description:</strong> {serviceDetails.description}</p>
            <p><strong>Duration:</strong> {serviceDetails.serviceDuration} minutes</p>
            <p><strong>Price:</strong> ₹{serviceDetails.servicePrice}</p>
            <p><strong>Status:</strong> {serviceDetails.serviceStatus}</p>
            <p><strong>Provider ID:</strong> {serviceDetails.serviceProvider_id}</p>
          </div>
        </div>
      )}
    </div>
  );
}
