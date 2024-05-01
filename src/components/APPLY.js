import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

const APPLY = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    address: '',
    qualification: '',
    experience: '',
    institute: '',
    postAvailable: '',
    resume: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const institute = searchParams.get('institute') || '';
    const postAvailable = searchParams.get('postAvailable') || '';
    const qualification = searchParams.get('qualification') || '';
    const experience = searchParams.get('experience') || '';


    setFormData((prevFormData) => ({
      ...prevFormData,
      institute,
      postAvailable,
      qualification,
      experience,
    }));
  }, [location.search]);

  

 /*  const [lastDate, setLastDate] = useState('');

  useEffect(() => {
    const fetchLastDateToApply = async () => {
      try {
        const response = await fetch(`http://localhost:5002/api/postjob/lastdate/${job}`);
        if (response.ok) {
          const data = await response.json();
          setLastDate(data.lastDateToApply);
        } else {
          console.error('Failed to fetch last date');
        }
      } catch (error) {
        console.error('Error fetching last date:', error);
      }
    };

    fetchLastDateToApply();
  }, [job]); // Dependency array is empty to ensure it runs only once when component mounts
 */
 

   const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value });
   }
const handleSubmit=async (e) =>{
  e.preventDefault();

try{
  const response=await fetch('http://localhost:5002/api/apply',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if(response.ok){
    navigate('/Home');
  }
  else if(response.status===422){
    console.error('you have already applied');
  }
  else{
    console.error('applying failed');
  }
}catch (error){
  console.error('error', error);
}

};

  return (
    <>
    <Navbar/>
     <div className='container apply-container'>
     <center>
        <u>
          <h1>APPLY FOR FACULTY POST</h1>
        </u>
      </center>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name" className="form-label">
            ENTER YOUR NAME:
          </label>
          <input type="text" 
          className="form-control" 
          id="name" 
          placeholder="e.g. Srija"
          name="name"
          value={formData.name} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob" className="form-label">
            DATE OF BIRTH
          </label>
          <input type="date" 
          className="form-control" 
          id="dob" 
          name="dob"
          value={formData.dob} onChange={handleChange}
          />
        </div>
          
        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            GENDER:
          </label>
          <input type="text" 
          className="form-control" 
          id="gender" 
          placeholder="e.g. male/female"
          name="gender"
          value={formData.gender} onChange={handleChange}
          />
        </div>
           
        <div className="form-group">
          <label htmlFor="mobile" className="form-label">
            ENTER YOUR MOBILE NUMBER:
          </label>
          <input type="text" 
          className="form-control" 
          id="mobile" 
          placeholder="e.g. 987654365"
          name="mobile"
          value={formData.mobile} onChange={handleChange}
          />
        </div>
           
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            ENTER YOUR EMAIL-ID:
          </label>
          <input type="text" 
          className="form-control" 
          id="email" 
          placeholder="e.g. abc@gmail.com"
          name="email"
          value={formData.email} onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            ENTER YOUR ADDRESS:
          </label>
          <input type="text" 
          className="form-control" 
          id="address" 
          placeholder="e.g. Hyderabed"
          name="address"
          value={formData.address} onChange={handleChange}
          />
        </div>
         
        <div className="form-group">
          <label htmlFor="qualification" className="form-label">
           QUALIFICATION:
          </label>
          <input type="text" 
          className="form-control" 
          id="qualification" 
          placeholder="e.g. btech"
          name="qualification"
          value={formData.qualification} // Set value from URL parameter
          readOnly={true}
          />
        </div>
            
        <div className="form-group">
          <label htmlFor="experience" className="form-label">
            EXPERIENCE
          </label>
          <input type="text" 
          className="form-control" 
          id="experience" 
          placeholder="e.g. 3 years"
          name="experience"
          value={formData.experience} // Set value from URL parameter
          readOnly={true}
          />
        </div>

        <div className="form-group">
            <label htmlFor="institute" className="form-label">
              INSTITUTE
            </label>
            <input type="text"
              className="form-control"
              id="institute"
              placeholder="e.g. kmit"
              name="institute"
            value={formData.institute} // Set value from URL parameter
              readOnly={true} // Make it read-only to prevent user modification
            />
          </div>
           
        <div className="form-group">
          <label htmlFor="post" className="form-label">
            POST:
          </label>
          <input type="text" 
          className="form-control" 
          id="post" 
          placeholder="e.g. pps lecturer"
          name="post"
          value={formData.postAvailable}
          readOnly={true}
         
          />
        </div>
         
        <div className="form-group">
          <label htmlFor="resume" className="form-label">
            RESUME:
          </label>
          <input type="url" 
          className="form-control" 
          id="resume" 
          placeholder="e.g.http://google.com"
          name="resume"
          value={formData.resume} onChange={handleChange}
          />
        </div>

  {/*  <div className="form-group">
          <label htmlFor="lastDate" className="form-label">
          LAST DATE:
          </label>
          <input type="date" 
          className="form-control" 
          id="lastDate" 
          name="lastDate"
          value={lastDate} // Display the fetched last date
            readOnly ={ true}// Make it read-only to prevent user modification
          />
  </div> */ }

        <button type="submit" id="applyButton" className="btn btn-success btn-block">
          apply
        </button>
        </form>
     </div>




    </>
  )
}

export default APPLY
