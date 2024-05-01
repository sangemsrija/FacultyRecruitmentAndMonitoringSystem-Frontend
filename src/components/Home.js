import React from 'react'
import { useNavigate } from 'react-router-dom';


import Footer from './Footer'

import './sectionpage.css';
import Header from './Header';
const Home = () => {
  const navigate = useNavigate();


  const redirectToSignup = () => {
    navigate('/signup');

  };
  return (
  <>

  <Header/>

    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/09/10045333/Job-Searching-Online-11-Best-Practices-You-Need-to-Know-2-2.jpg" className="d-block w-100" style={{ height: '300px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to job searching</h5>
            <p>KMIT- keshav memorial institute of technology</p>
            <button className="btn btn-danger">search jobs</button>
            <button className="btn btn-primary">explore</button>
            <button className="btn btn-success">settle</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.aarp.net/content/dam/aarp/work/job-search/2020/08/1140-new-job-keyboard.jpg" className="d-block w-100" style={{ height: '300px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Explore yourself</h5>
            <p>search for the job Vacancies at KMIT and its institutes</p>
            <button className="btn btn-danger">search jobs</button>
            <button className="btn btn-primary">explore</button>
            <button className="btn btn-success">settle</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw=" className="d-block w-100" style={{ height: '300px' }} alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Find good jobs</h5>
            <p>Some representative placeholder for vacancies</p>
            <button className="btn btn-danger">search jobs</button>
            <button className="btn btn-primary">explore</button>
            <button className="btn btn-success">settle</button>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br />
   <center> <h2> SEE OUR NUMBERS IN ACTION </h2> </center>
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h6><b> Job seekers connected</b> </h6>
              <h3 className="card-title">10,000+</h3>
              <p className="card-text">We've connected over 100,000 job seekers with employees. Helping them land their dream role.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h6><b> Resume improvements </b></h6>
              <h3 className="card-title">15,000+</h3>
              <p className="card-text">We've improved and created over 15,000 resumes with our AI resume feedback and resume builder tools.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h6><b> Our institutes </b></h6>
              <h3 className="card-title"> 3+</h3>
              <p className="card-text">We were building and improving our institutions with well verced faculties.We have all the good infrastructure. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div className="container section-page">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1><b> WE ARE MAKING JOBS AVAILABLE FOR EVERYONE</b></h1>
                <h5><b> HURRY UP!! </b></h5>
          <button className="btn btn-primary" onClick={redirectToSignup}>Go to Signup</button>
        </div>
      </div>
    </div>
  <br/>
 
    <Footer/>
    </>
  )
}

export default Home
