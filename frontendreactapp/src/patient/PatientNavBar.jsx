import { Routes, Route, Link } from 'react-router-dom';
import PatientHome from './PatientHome';
import PatientProfile from './PatientProfile';
import PatientLogin from './PatientLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from './UpdateProfile';
import BookedEvents from './BookedEvents';
import ViewAllServices from './ViewAllServices';
import BookService from './BookService';

export default function PatientNavBar() 
{
  const { setIsPatientLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
    setIsPatientLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Patient</div>
        <ul className="nav-links">
          <li><Link to="/patienthome">Home</Link></li>
          <li><Link to="/patientprofile">Patient Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewallservices">Book a new appointment</Link></li>
          <li><Link to="/bookservice">Book Service</Link></li>
          <li><Link to="/bookedevents">Booked appointment</Link></li>
          <li><Link to="/patientlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/patienthome" element={<PatientHome />} exact />
        <Route path="/patientprofile" element={<PatientProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/viewallservices" element={<ViewAllServices/>} exact />
        <Route path="/bookservice" element={<BookService/>} />
        <Route path="/bookedevents" element={<BookedEvents/>} exact />
        <Route path="/patientlogin" element={<PatientLogin />} exact />
      </Routes>
    </div>
  );
}
