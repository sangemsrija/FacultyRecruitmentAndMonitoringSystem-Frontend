import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './RecNavbar.css';

const RecNavbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Perform logout logic (if any)
    // Redirect the user to the homepage
    navigate('/');
  };

  return (
    <nav className="nav1">
      <ul>
        <li className='links'>
          <Link to="/Homepage">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/postjob">Post Job</Link>
        </li>
        <li>
          <Link to="/Applications">View Application</Link>
        </li>
        <li>
          <Link to="/Home" onClick={handleLogout}>Logout</Link> {/* Add onClick event to trigger handleLogout */}
        </li>
      </ul>
    </nav>
  );
};

export default RecNavbar;
