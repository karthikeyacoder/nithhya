import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import './style.css';
import PatientLogin from './../patient/PatientLogin';
import PatientRegistration from './../patient/PatientRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import DoctorLogin from './../doctor/DoctorLogin';
import DoctorRegistration from './../doctor/DoctorRegistration';
import NotFound from './NotFound';

export default function MainNavBar() 
{
  return (
    <div>
      <nav className="navbar">
        <div className="logo">MediFlow</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/patientsignup">Patient Signup</Link></li>
          <li><Link to="/doctorsignup">Doctor Signup</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/patientlogin">Patient</Link></li>
              <li><Link to="/doctorlogin">Doctor</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/patientsignup" element={<PatientRegistration />} exact />
        <Route path="/patientlogin" element={<PatientLogin />} exact />
        <Route path="/doctorsignup" element={<DoctorRegistration />} exact />
        <Route path="/doctorlogin" element={<DoctorLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}
