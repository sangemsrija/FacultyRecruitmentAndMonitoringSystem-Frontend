import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './vacancies.css';
const Vacancies = () => {
  const navigate = useNavigate();
 // const location = useLocation();
  const [posts, setPosts] = useState([]);
  const [retiredJobs, setRetiredJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5002/api/jobs")
       .then((res) => res.json())
       .then((data) => {
          if (Array.isArray(data)) {
             setPosts(data);
          } else {
             console.error("Expected an array, got:", data);
          }
       })
       .catch((error) => {
          console.error("Error fetching jobs:", error);
          setPosts([]);
       });
 
    fetch("http://localhost:5002/api/jobs-retired")
       .then((res) => res.json())
       .then((data) => {
          if (Array.isArray(data)) {
             setRetiredJobs(data);
          } else {
             console.error("Expected an array, got:", data);
          }
       })
       .catch((error) => {
          console.error("Error fetching retired jobs:", error);
          setRetiredJobs([]);
       });
 }, []);
 

  const handleApplyClick = (post) => {
    navigate(`/APPLY?institute=${post.institute}&postAvailable=${post.postAvailable}&qualification=${post.qualification}&experience=${post.experience}`);
  };
   const handleApplyClicks = (job) => {
    navigate(`/APPLY?postAvailable=${job.postAvailable}&qualification=${job.qualification}&experience=${job.experience}`);
  };

  return (
    <>
      <Navbar />
      <br />
      <center><h3>JOBS AVAILABLE</h3></center>
      <div>
        <form className="d-flex">
          <input className="form-control me-2" type="text" placeholder="ENTER POST YOU ARE INTERESTED IN" />
          <button className="btn btn-primary bi bi-search" type="button" style={{ height: '55px' }}>Search</button>
        </form>
        <br />
        <div className="posts-container">
          {posts.map(post => (
            <div className="post-box" key={post._id}>
              <p><strong>Institute:</strong> {post.institute}</p>
              <p><strong>Post Available:</strong> {post.postAvailable}</p>
              <p><strong>Qualification:</strong> {post.qualification}</p>
              <p><strong>Experience:</strong> {post.experience}</p>
              <p><strong>Last Date:</strong>{post.endDate}</p>
              <Button className="logbtn" variant='success' onClick={() => handleApplyClick(post)}>
                APPLY
              </Button>
              <br/>
            </div>
          ))}
        </div>
      <br/>
      <div className="posts-container">

            {retiredJobs.map(job => (
               <div className="post-box" key={job._id}>
                   <p><strong>Institute:</strong> {job.institute}</p>
                  <p><strong>Post Available:</strong> {job.postAvailable}</p>
                  <p><strong>Qualification:</strong> {job.qualification}</p>
                  <p><strong>Experience:</strong> {job.experience}</p>
                  <p><strong>Last Date:</strong> {job.endDate}</p>
                  <Button variant='success' onClick={() => handleApplyClicks(job)}>
                     APPLY
                  </Button>
               </div>
            ))}
         </div>
       
      </div>
    </>
  );
};

export default Vacancies;
