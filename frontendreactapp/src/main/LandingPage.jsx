import { useNavigate } from 'react-router-dom';
import './style.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container" style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '3rem', color: '#2c3e50' }}>MediFlow</h1>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '40px' }}>
        "Your Health, Our Priority"
      </p>
      <div>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem' }}
          onClick={() => navigate('/patientlogin')}
        >
          Patient Login
        </button>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem' }}
          onClick={() => navigate('/patientsignup')}
        >
          Patient Signup
        </button>
      </div>
      <div>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem' }}
          onClick={() => navigate('/doctorlogin')}
        >
          Doctor Login
        </button>
        <button
          style={{ margin: '10px', padding: '10px 20px', fontSize: '1rem' }}
          onClick={() => navigate('/doctorsignup')}
        >
          Doctor Signup
        </button>
      </div>
    </div>
  );
}
