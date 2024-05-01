import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Header.css'; // Import CSS file for styling

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="primary">
      <span className="institute-name" style={{ fontSize: '20px' }}>
        Faculty Recruitment and Monitoring System
      </span>
      <Navbar.Toggle aria-controls="menubar" />
      <Navbar.Collapse id="menubar">
        <Nav className="ml-auto">
         
          <NavLink to="/LoginForm" className="nav-link">
            <Button variant="outline-light">Login</Button>
          </NavLink>
          <NavLink to="/signup" className="nav-link">
            <Button variant="outline-light">Sign Up</Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
