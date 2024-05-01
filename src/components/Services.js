import React from 'react';
import Footer from './Footer';
import './services.css';
import Navbar from './Navbar';
const Services = () => {

  return (
    <>
    <Navbar />
    <div className="container mt-5">
    <center><h1>OUR SERVICES</h1></center>
    <br />
      <div className="card-deck mt-3">
        <div className="card1">
          <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png" className="card-img-top" alt="Web Development Service"
           width="150px"
           height="300px" />
          <div className="card-body1">
            <h5 className="card-title1">Web Development</h5>
            <p className="card-text1">We provide custom web development solutions tailored to your business needs.</p>
          </div>
        </div>
        <br /> <br />
        <div className="card1">
          <img src="https://www.ideatick.com/wp-content/uploads/2022/04/ideatck-Blog-img-1.jpg" className="card-img-top" alt="Graphic Design Service" 
          width="150px"
          height="200px"/>
          <div className="card-body1">
            <h5 className="card-title1">Graphic Design</h5>
            <p className="card-text1">Our expert designers create visually appealing graphics for your branding and marketing.</p>
          </div>
        </div>
     <br /> <br />
        <div className="card1">
          <img src="https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg" className="card-img-top" alt="Digital Marketing Service"
          width="150px"
          height="200px" />
          <div className="card-body1">
            <h5 className="card-title1">Digital Marketing</h5>
            <p className="card-text1">Boost your online presence with our digital marketing strategies and services.</p>
          </div>
        </div>
      </div>

      {/* Add more service cards as needed */}
    </div>
    <Footer />
    </>
  );
};

export default Services;
