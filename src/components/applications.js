import React, { useEffect, useState } from 'react';
import Navbar from './RecNavbar';
import { Link } from 'react-router-dom';
const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5002/api/application', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userdata");
        setApplications(data);
      });

  }, []);

  const handleHire = (id) => {
    const hiringDate = new Date(); // Get the current date as the hiring date
    fetch(`http://localhost:5002/api/hire/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hiringDate }), // Pass hiring date in the request body
    })
      .then((res) => res.json())
      .then((data) => {
        // Remove the hired applicant from the list
        setApplications(applications.filter(applicant => applicant._id !== id));
        console.log(data); // Log success message
      })
      .catch((error) => console.error(error));
  };
  
  

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Navbar />
      <br />
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
            <th>RESUME LINK</th>
            <th>ACTION</th> {/* Added column for action */}
          </tr>
        </thead>
        <tbody>
  {applications.map((applicant) => (
    applicant.status !== 'hired' && (
      <tr key={applicant._id}>
        <td>{applicant.name}</td>
        <td>{applicant.qualification}</td>
        <td>{applicant.experience}</td>
        <td>{applicant.email}</td>
        <td>{applicant.postAvailable}</td>
        <td>{applicant.resume}</td>
        <td>
          <button type="button" onClick={() => handleHire(applicant._id)}>
            Hire
          </button>
        </td>
      </tr>
    )
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
  );
};

export default Applications;
