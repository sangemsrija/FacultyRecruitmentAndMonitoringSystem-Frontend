import React, {useEffect, useState} from 'react'
import RecNavbar from './RecNavbar';
import { Link } from 'react-router-dom';
const Retired = () => {
  const [retired, setRetired] = useState([]); // State to store retired faculty data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch retired faculty from the backend
    fetch('http://localhost:5002/api/retired', {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`); // Error handling
        }
        return res.json();
      })
      .then((data) => {
        setRetired(data); // Set the fetched data
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred while fetching retired faculty data.'); // Set the error state
        setLoading(false); // Stop loading
      });
  }, []);


  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div>Loading retired faculty...</div>; // Loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }


  return (

    <>
    <RecNavbar/>
<div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <strong>
            <ul>
              <li>
                <Link className="text-dark" to="/Hired">Hired applicants</Link>
              </li>
              <li>
                <Link className="text-dark" to="/Newfaculty">Newfaculty</Link>
              </li>
              <li>
                <Link className="text-dark" to="/WorkingFaculty">Workingfaculty</Link>
              </li>
              <li>
                <Link className="text-dark" to="/Retired">Retiredfaculty</Link>
              </li>
            </ul>
          </strong>

        </div>
      </div>
      <div className="container-fluid mt-3">
      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
        <u> Click here </u>
      </button>
    </div>
    <br/>
      <table className="table text-light" style={{ width: '100%' }}>
        <thead id="tablebody">
          <tr id="tablerow">
            <th>NAME</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>MAIL_ID</th>
            <th>POST</th>
          </tr>
        </thead>
        <tbody>
          {retired.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.name}</td>
              <td>{applicant.qualification}</td>
              <td>{applicant.experience}</td>
              <td>{applicant.email}</td>
              <td>{applicant.postAvailable}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <center>
        <button type="button" onClick={handlePrint}>
          PRINT
        </button>
      </center>

    </>
  )
}

export default Retired
