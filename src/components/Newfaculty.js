import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RecNavbar from './RecNavbar'
import {Link} from 'react-router-dom';
const Newfaculty = () => {
    const [newlyJoinedFaculty, setNewlyJoinedFaculty] = useState([]);

    useEffect(() => {
        const fetchNewlyJoinedFaculty = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/newfaculty');
                setNewlyJoinedFaculty(response.data);
            } catch (error) {
                console.error('Error fetching newly joined faculty:', error);
            }
        };

        fetchNewlyJoinedFaculty();
    }, []);




  return (
    <>
    <RecNavbar/>
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
    <br />
      <table className="table text-light" style={{ width: '100%' }}>
        <thead id="tablebody">
          <tr id="tablerow">
            <th>NAME</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>POST</th>
            <th>MAIL_ID</th>
          </tr>
        </thead>
        <tbody>
          {newlyJoinedFaculty.map((applicant) => (
            <tr key={applicant._id}>
              <td>{applicant.name}</td>
              <td>{applicant.qualification}</td>
              <td>{applicant.experience}</td>
              <td>{applicant.postAvailable}</td>
              <td>{applicant.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Newfaculty
