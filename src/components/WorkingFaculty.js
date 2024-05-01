import React, { useEffect, useState } from 'react'
import RecNavbar from './RecNavbar'
import { Link } from 'react-router-dom'
const WorkingFaculty = () => {
    const [working, setWorking] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5002/api/workingfaculty', {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "hired applicants");
            // Handle the retrieved data
            setWorking(data);
          })
          .catch((error) => console.error(error));
      }, []);
    
      const handleRetire = (id) => {
        fetch(`http://localhost:5002/api/retire/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(), 
        })
          .then((res) => res.json())
          .then((data) => {
            // Remove the retired applicant from the list
            setWorking(working.filter(applicant => applicant._id !== id));
            console.log(data); // Log success message
          })
          .catch((error) => console.error(error));
      };


      const handlePrint = () => {
        window.print();
      };

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
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {working.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.name}</td>
              <td>{applicant.qualification}</td>
              <td>{applicant.experience}</td>
              <td>{applicant.email}</td>
              <td>{applicant.postAvailable}</td>
              <td>
          <button type="button" onClick={() => handleRetire(applicant._id)}>
            Retire
          </button>
        </td>
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

export default WorkingFaculty
