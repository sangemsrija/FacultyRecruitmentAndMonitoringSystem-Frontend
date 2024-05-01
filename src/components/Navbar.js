import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Perform logout logic (if any)
    // Redirect the user to the homepage
    navigate('/');
  };

  return (
    <nav className="nav2">
      <ul>
        <li className='links1'>
          <Link to="/Userhomepage">Home</Link>
        </li>
        <li>
          <Link to="/Userabout">About</Link>
        </li>
        <li>
          <Link to="/institute">Institutes</Link>
        </li>
        <li>
          <Link to="/vacancies">Vacancies</Link>
        </li>
        <li>
          <Link to="/Notification">Notification</Link>
        </li>
        <li>
          <Link to="/Services">Services</Link>
        </li>

        <li>
          <Link to="/Home" onClick={handleLogout}>Logout</Link> {/* Add onClick event to trigger handleLogout */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
