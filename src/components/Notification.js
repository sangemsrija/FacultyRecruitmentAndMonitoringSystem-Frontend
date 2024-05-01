import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Notification = () => {
  const [notify, setNotify] = useState([]);
  const [notifyHired, setNotifyHired] = useState([]);
  const [notifyRetired, setNotifyRetired] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [newJobsResponse, hiredResponse, retiredResponse] = await Promise.all([
          axios.get('http://localhost:5002/api/notify'),  
          axios.get('http://localhost:5002/api/notify-hired'),
          axios.get('http://localhost:5002/api/notify-retired'),
        ]);

        setNotify(newJobsResponse.data);
        setNotifyHired(hiredResponse.data);
        setNotifyRetired(retiredResponse.data);
      } catch (error) {
        if (error.response) {
          console.error('Server error:', error.response.data); // Server-side errors
          setError(`Error ${error.response.status}: ${error.response.data.message}`);
        } else if (error.request) {
          console.error('Network error:', error); // Network or server not responding
          setError('No response from server. Please try again later.');
        } else {
          console.error('Unexpected error:', error.message); // Other errors
          setError('An unexpected error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications(); // Call the async function
  }, []); // Empty array ensures it runs once on mount

  return (
    <>
      <Navbar />
      <br />
      <center>
        <h3>NOTIFICATIONS</h3>
      </center>

      {isLoading ? (
        <center>Loading...</center> // Display while loading
      ) : error ? (
        <center>{error}</center> // Display error if any
      ) : (
        <>
          <div className="posts-container">
            {notify.map((post) => (
              <div className="post-box" key={post._id}>
                <p>
                  <strong>A new job is posted on</strong> {`${post.postAvailable}, ${post.institute}`}. Click here to apply.
                </p>
                <Link to="/vacancies"> Click here to view</Link>
              </div>
            ))}
          </div>

          <div className="posts-container">
            {notifyHired.map((post) => (
              <div className="post-box" key={post._id}>
                <p>
                  <strong>Congratulations! You've been hired for the post</strong> {`${post.postAvailable}`}.
                </p>
                <Link to="/vacancies"> Click here to view</Link>
              </div>
            ))}
          </div>

          <div className="posts-container">
            {notifyRetired.map((post) => (
              <div className="post-box" key={post._id}>
                <p>
                  <strong>Retired post:</strong> {`${post.postAvailable}, ${post.institute}`}.
                  <Link to="/vacancies"> Click here to view</Link>
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Notification;
