import { Routes, Route, Link } from 'react-router-dom';
import './doctor.css';
import DoctorHome from './DoctorHome';
import DoctorProfile from './DoctorProfile';
import DoctorLogin from './DoctorLogin';
import { useAuth } from '../contextapi/AuthContext';
import UpdateProfile from '../patient/UpdateProfile';

export default function DoctorNavBar() 
{
  const { setIsDoctorLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
    setIsDoctorLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Doctor</div>
        <ul className="nav-links">
          <li><Link to="/doctorhome">Home</Link></li>
          <li><Link to="/doctorprofile">Doctor Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/doctorlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/doctorhome" element={<DoctorHome />} exact />
        <Route path="/doctorprofile" element={<DoctorProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/doctorlogin" element={<DoctorLogin />} exact />
      </Routes>
    </div>
  );
}
