
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/LoginForm';

import Homepage from './components/Homepage';
import About from './components/About';
import Postjob from './components/postjob';
import Applications from './components/applications';

import Userhomepage from './components/Userhomepage';
import Userabout from './components/Userabout';
import Vacancies from './components/vacancies';
import Institute from './components/institute';
import Services from './components/Services';

import Jobsavai from './components/vacancies';
import APPLY from './components/APPLY';
import Hired from './components/Hired';
import Newfaculty from './components/Newfaculty';
import Retired from './components/Retired';
import WorkingFaculty from './components/WorkingFaculty';
import Notification from './components/Notification';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/LoginForm" element={<Login />} />

        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Postjob" element={<Postjob/>} /> 
        <Route path="/Applications" element={<Applications/>} /> 
       
        <Route path="/Userhomepage" element={<Userhomepage />} />
        <Route path="/Userabout" element={<Userabout />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/institute" element={<Institute />} />
        <Route path="/Services" element={<Services/>} />

        <Route path="/jobsavai" element={<Jobsavai/>} /> 
        <Route path="/APPLY" element={<APPLY/>} /> 
        <Route path="/Hired" element={<Hired/>} /> 
        <Route path="/Newfaculty" element={<Newfaculty/>} /> 
        <Route path="/Retired" element={<Retired/>} /> 
        <Route path="/WorkingFaculty" element={<WorkingFaculty/>} /> 
        <Route path="/Notification" element={<Notification/>} />
       
       

      </Routes>
    </Router>
  );
};

export default App;
