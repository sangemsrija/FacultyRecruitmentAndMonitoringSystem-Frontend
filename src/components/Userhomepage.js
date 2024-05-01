import React from 'react';
import './Homepage.css';
import Footer from './Footer';
import Navbar from './Navbar';
const Userhomepage = () => (
  <>
   <Navbar/>

    <div className="w3-content" style={{ maxWidth: '1400px' }}>
      <header className="w3-container w3-center w3-padding-32"> 
        <h1><b>OUR INSTITUTES</b></h1>
        <p>Welcome to the page of <span className="w3-tag">KMIT</span></p>
      </header>
      <div className="w3-row">
        <div className="w3-col l8 s12">
          {/* Blog entries */}
          <div className="w3-card-4 w3-margin w3-white">
            <div className="w3-container">
              <h3><b>OUR INFRASTRUCTURE</b></h3>
              <h5>Well equiped labs and classrooms</h5>
            </div>
            <div className="w3-container">
              <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w3-card-4 w3-margin w3-white">
            <div className="w3-container">
              <h3><b>OUR SPECIALITIES</b></h3>
              <h5>Working through PS,FS,IS</h5>
            </div>
            <div className="w3-container">
              <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">2</span></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section>
        <Footer/>
    </section>
  </>
);

export default Userhomepage;
