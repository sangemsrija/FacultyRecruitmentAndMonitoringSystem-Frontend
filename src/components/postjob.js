import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './RecNavbar';

const Postjob = () => {
  const navigate=useNavigate();
  const[formData, setFormData] =useState({
    institute: '',
    postAvailable: '',
    qualification: '',
    experience: '',
  });
   const handleChange= (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
   };


    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await fetch('http://localhost:5002/api/postjob',{

                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                navigate('/Homepage');
            }
            else if(response.status===422){
                console.error('post/job already exists');
            }
            else{
                console.error('job posting failed');
            }
        }catch(error){
            console.error('error occured:',error);
        }
    }
  return (
   <>
    <Navbar />
   <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="institute">Institute:</label>
            <input
              type="text"
              className="form-control"
              id="institute"
              placeholder="Enter the institute name"
              name="institute"
               value={formData.institute}  onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="postAvailable">Post Available:</label>
            <input
              type="text"
              className="form-control"
              id="postAvailable"
              placeholder="Enter the available post"
              name='postAvailable'
              value={formData.postAvailable} onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="qualification">Qualification:</label>
            <input
              type="text"
              className="form-control"
              id="qualification"
              placeholder="Enter the required qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <input
              type="text"
              className="form-control"
              id="experience"
              placeholder="Enter the required experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>

    { /*    <div className="form-group">
            <label htmlFor="postingDate">Posting Date:</label>
            <input
              type="date"
              className="form-control"
              id="postingDate"
              placeholder="Enter the required experience"
              name="postingDate"
              value={formData.postingDate}
              onChange={handleChange}
            />
          </div> */}

          <button type="submit" className="btn btn-primary">
            Post Job
          </button>
        </form>
      </div>

   
   
   </>
  )
}

export default Postjob
