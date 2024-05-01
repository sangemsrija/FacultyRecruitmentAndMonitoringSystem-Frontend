// Login.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const UserLogin = () =>{
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add your logic to submit the login credentials
    try{
        const response = await fetch('http://localhost:5002/api/userlogin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    if(response.status=== 200){
        navigate('/Userhomepage');
    } else if(response.status ===401){
        console.error('unauthorised - invalid credentials');
    } else{
        console.error(`login failed with status: ${response.status}`);
    }
    }catch(error){
        console.error('error during login', error);
    }
   // console.log(formData);
  };

  return (
    <>
    <br />
    <div className='container login-container'>
      <h2 className='text-center mb-4'>User Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input 
            type="username" 
            className='form-control'
            id="username" 
            placeholder='enter your name'
            name="username" 
            value={formData.username} 
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
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default UserLogin;
