// ClgSignup.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const RecruiterSignup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    institutename: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can add your logic to submit the form data

    try{
        const response = await fetch('http://localhost:5002/api/recruitersignup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if(response.ok){
            navigate('/LoginForm');
        }else if(response.status===422){
            console.error('recruiter already exists');
        } else{
            console.error('signup failed');
        }
    } catch(error){
        console.error('error', error);
    }
    //console.log(formData);
  };

  return (
    <>
    <br />
    <div className='container signup-container'>
      <h2 className='text-center'>Recruiter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'> 
          <label htmlFor="collegeName">Institute Name:</label>
          <input 
            type="text" 
            className='form-control'
            id="institutename" 
            placeholder='enter your institute'
            name="institutename" 
            value={formData.institutename} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className='form-control'
            id="email" 
            placeholder='enter you email'
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            className='form-control'
            id="password" 
            placeholder='enter your password'
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit" id="signupbtn" className='btn btn-primary btn-block' >Signup</button>
      </form>
    </div>
    </>
  );
}

export default RecruiterSignup;
