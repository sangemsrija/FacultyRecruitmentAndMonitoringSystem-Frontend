import React  from 'react'
import RecNavbar from './RecNavbar';
import Footer from './Footer'
import './cardsmove.css';
const About = () => {
  
  return (
    <>
   <RecNavbar/>
    <br />
    <br />
    <strong>
      <em>
        <p>
        Established in 2007, KMIT is affiliated to Jawaharlal Nehru Technological University Hyderabad, and is approved by the All India Council for Technical Education (AICTE), New Delhi.
        </p>
        <p>KMIT strongly believes in encouraging learner autonomy which the administration and Faculty facilitate by building a learner centric environment.</p>
        <p>
        Also, continuous efforts are made towards modernising and upgrading its resources and teaching-learning processes in tandem with the latest technological trends.
        </p>
        <p>KMIT has its branches to explore more in the field of computer science.</p>
        <p>
        KMIT has the distinctive advantage of being located in the heart of the city i.e. Narayanguda. This allows an ease of connectivity to every part of Hyderabad what with the metro station, bus stop situated very close to the college.
        </p>
      </em>
    </strong>
 <br/>
 <center>
  <h1><b> OUR FEEDBACKS </b></h1>
  </center>
  <br/>
 <div className="container">
      <div className="row">
        <div className="col">
          <div className="horizontal-cards-container">
            <div className="horizontal-card bg-light p-3 mb-2">
              
              <p>Navigating the competitive internship landscape was overwhelming until I discovered refer.me. Through it, I established a meaningful connection at Google. This platform truly bridges the gap between aspirants and industry leaders.</p>
              <h5>Naomi R.</h5>
            </div>
            <div className="horizontal-card bg-light p-3 mb-2">
              <p>Being relatively new to the tech world, the prospect of networking was daunting. Refer.me was a revelation, connecting me with invaluable insights and a direct contact at Microsoft. The community here is both supportive and knowledgeable.</p>
              <h5>Ricardo M.</h5>
            </div>
            <div className="horizontal-card bg-light p-3 mb-2">
              
              <p>In my pursuit of a progressive marketing role, refer.me proved instrumental. With its help, I secured a referral at Nike, bypassing traditional bottlenecks. This platform is an innovative approach to professional networking.</p>
              <h5>Ethan K.</h5>
            </div>

            <div className="horizontal-card bg-light p-3 mb-2">
             
              <p>The finance sector is fiercely competitive. But with refer.me, I had an edge—receiving a timely referral at Goldman Sachs. This platform offers more than connections; it offers opportunities.</p>
              <h5>Etan</h5>
            </div>
            <div className="horizontal-card bg-light p-3 mb-2">
             
              <p>After several years in tech, I sought a fresh perspective. Refer.me facilitated a connection with a seasoned professional at Amazon. The platform is a testament to the power of quality networking.</p>
              <h5>Romeo</h5>
            </div>
            <div className="horizontal-card bg-light p-3 mb-2">
             
              <p>Transitioning from MBA studies to real-world roles is challenging. Yet, through refer.me, I was fortunate to connect with an industry insider at Apple. It’s a platform that understands the nuanced needs of job seekers</p>
              <h5>David</h5>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    <section>
    <Footer/>
    </section>
   </>
  )
}

export default About
