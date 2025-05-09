import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import AddDoctor from './AddDoctor';
import ViewDoctors from './ViewDoctors';
import ViewCustomers from './ViewCustomers';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddService from './AddService';
import DisplayServices from './DisplayServices';
import ViewAllServices from './ViewAllServices';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/adddoctor">Add Doctor</Link></li>
          <li><Link to="/viewdoctors">View Doctors</Link></li>
          <li><Link to="/viewallcustomers">View All Customers</Link></li>

          <li className="dropdown">
            <span>Services▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/addservice">Add</Link></li>
              <li><Link to="/viewallservices">View All</Link></li>
              <li><Link to="/displayservices">Display</Link></li>
            </ul>
          </li>

          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/adddoctor" element={<AddDoctor />} exact />
        <Route path="/viewdoctors" element={<ViewDoctors />} exact />
        <Route path="/viewallcustomers" element={<ViewCustomers />} exact />

        <Route path="/addservice" element={<AddService />} exact />
        <Route path="/viewallservices" element={<ViewAllServices />} exact />
        <Route path="/displayservices" element={<DisplayServices />} exact />

        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}
