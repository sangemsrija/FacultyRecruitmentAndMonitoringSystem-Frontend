import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './institute.css';
import Footer from './Footer';
const institute = () => {
  return (
   <>
    <Navbar/>
   <br />
    <center> <h2><u> OUR INSTITUTES </u></h2> </center>
    <br/>
    <div className="container">
  <p>
    Our institutes often have a clear mission and vision statement outlining their purpose and goals in providing quality education.
  </p>
  <p>
    They offer a variety of academic programs and courses catering to different disciplines and levels of study.
  </p>
  <p>
    The physical infrastructure includes classrooms, laboratories, libraries, sports facilities, and other amenities to support the learning environment.
  </p>
  <p>
    Our institutes have a diverse group of qualified faculty and staff responsible for teaching, research, and administration.
  </p>
</div>
<br />

    <div className="row">
      <div className="card" style={{ width: '18rem' }}>
        <img src="data:image/png;base64,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" alt="..." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">KMIT</h5>
          <p className="card-text">To be a part of our excellence institute, click on the below button and view the available job roles.</p>
         <Link to="/vacancies" className="btn btn-primary">Click here</Link>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="data:image/png;base64,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" alt=".." className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">NGIT</h5>
          <p className="card-text">To be a part of our excellence institute, click on the below button and view the available job roles.</p>
         <Link to="/vacancies" className="btn btn-primary">Click here</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">KMEC</h5>
          <p className="card-text">To be a part of our excellence institute, click on the below button and view the available job roles.</p>
         <Link to="/vacancies" className="btn btn-primary">Click here</Link>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgLCAgICA0JCggJCBYICAkKCBsICQcKIB0iIiAdHx8kKDQsJCYxJx8fLTshMT0rLjcwIx8zODMtNygtLisBCgoKDg0OGhAQGisdHR0tKy0tKysrKy0tNy0tLS0tLSstLSstLS0tKystNysrNysrLSsrKystKysrKysrKy0rK//AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEAQAAEDAwIDBQQECwkAAAAAAAEAAgMEBREGIQcSEzFBUmGSIjJRcRQjM4EIFSQ0Q3JzgpGhwRYXNmJjdJOx8P/EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAAmEQEAAgIBAwQDAQEBAAAAAAAAAQIDEQQSITETMkFRBSJhFFIV/9oADAMBAAIRAxEAPwC8UBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQfPUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pA6jPE31IHUZ4m+pBooCD5e8NGXHAzgfNIY8PpGRAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQce8VP5XQUQ96aTrHB7AFvFXG9u7sLSXaPAgICAgICAgICAgICAgICAgICAgICAgIwh7qnraxhhG7KekcR8A4hd5j9ELq3lTBcJTYEZEBAQEBAQEBAQEBAQEBAQEBAQEBAQYJwCfLKMT4VzpmfqavrXE53kaN+5Srx+isxTvKsdRVoICAgICAgICAgICAgICAgICAgICAgIfDxrX8tNO/wwl38lmvlpk9qq9Cz82pnSH9I17vmVMvH6qnj23lW0oULkQEBBrz1tLF9tJGw5wOZ+DlB7Me1wDmkFpGQQcghB9ICAgICAgICAgICAgICAgICHw1Lr+Y1n+2f/ANLejnl9qndIT9K90zvE/p/PKmXj9VLx51lXaoEr2J2IyICCi+N9kiopKe4U8tR1auYmRvVIY0+SCw+E08sumKJ8znPfkt5nHmOEExQEBAQEBAQEBAQEBAQEBAQEGvcW81JUt8UDgP4Lajnk8KLpZPo9xief0NUCfkCp896qKs9OTa8HV8bKJlY/3HRB4xvlVee/px1PRcanqahHIdSTSV0ZOGUxdy8vfyqorzpnJqV1bgxGPaXNOQCO8ZCuazFo2prVms6ZWWqoPwhPzS1/tHf0QdXQk9XFoOKaikggmjLn9SdnPG1vegj+gtT6tut+5OpHJQwSEVT2xlsRb5boJnxMq9Q0lBJX2qWnjpaeHmna+Iulc7PccoInw615f62nq6bomurGe1C7m6bW/PKDk3XiHq+1XsRXVkLWlwc+AMy0xZ7t0Ey1BqjU9TazW2GjEdN0Os6eY8znNx3BBzOFPEG5XG4SWi6hjpBGZI5Wt5HNx3FBJeJGuGWOCKGBoluFUMQRndrG/EoIRdp+IUFBDe+qHskb1ZKaOM/UN+Wd0E40VqqtqbDJcr3F9GMDSXyEdNswHkgjFBqHU2p6yqbZZY7fbad2GzujL3v/AJoNO3631BZb8yzahLKiB8gj6/Lyua09hQXLG9r2Mkbu17Q5p+IQfSAgICAgw9uWkHsIwVmrW8dlEX+Ix3SuZ2YqXEfLKsKd6vP5v1vpaulp2V9ija/c9PouHaW4VdysXVHSvvx+bp1KK1kD4J5IXbFjtvkvK5azS+nsMV4yU2mWmbkJ6cQvP1sQ5Tvu5quuFni8dMqPnceaT1Q7asFeqD8IT80tf7R39EEKrrlfm6MooGRmG0mfllnY/wBuZ3wQW7wjNpOn4TbAA8bVe+ZOr5oN3if/AIVu37D+qCA/g+Da4/wQc/j01v43oHYAcWAE43IQW3YgDpuiHaPxYAdtiOVBS/CrA11VgbDEoA7u0IPTjNI8aqozPkwtA5AezlyEF7UBhloqct5XxPhGNuZrhhBEOMAMWkq1sA5G5a3DRyhoygr7hTp+vr7dUOori+iLZMSQsbzEefaglbuEz56+Gtudwmq+m4Oc1zS1z2jzygs2GJscccTPcjYGN3yeUIPtAQEBAQEFQ8RqLo3YytGI52ZHm7vU7DO1JzKatt0uF105J57e87SDqR5OwIWmerrwsmko1ZbOdoq4h7TBiQAbuavP87jx7oes4HJiP1lGKCrkp52TMOCD7Q8QVVhyzitta5scZa6WDb62KphbNEc5HtDO7CvSYM0ZK7h5vPhnHOpVhxVs1/vUsNNR0cn0eleeWYg/WrrE7cNadPRena9+nKnT17phFG0EQyEZL3Hv+5ZEZ0jpXWNku1T9Aja+jc/BEhIimb8UE54gR3irsz7bR0xlmq4cTPacsgKCJ8LLBqSzVr4qml/JanaSU7GJB48UNM6gvN0bJR0rxBT+wyQj7XzQTSwzXuLTpp6ukIrKenFNDG3czDGMoK50xpbVlsvz7yyj5+q5wfGcgBpKCccSNDuvtJT1UOIrpBHhoJw1w7cIIrpibiJbAy1Cjlnp2HpxTSM+qib80FjUtor6y0VFHqF0cslSDlkbcNgHcgqpmj9Y6duElRYmvqYHO2bEzqc7PMIJ1Yn64rpIJa8R22ma7mljMYdPIPggnrQcAHc4wT8SgygIy+Xvaxpe7YAZK1taIZrWZfEDy8dTsB3YPiFivdm/Z6rdoIIZxMtvWt7KpgzJTuxt4Su+G2kDm03Tas7bWPpqqCqZ70cgf24yFLtHVCrx26ZXlbKyKtooqhmHMlj379+9VuakTOnoMGWNbhENQ2p1NMZGDNPIcgge4V53l8eaW3D03D5MXrpr2i5yUkoc3eMnD2Z2IXPjci2K38deTx65a/1PKGshqYmywnII3Gd2legxZoyRuHnc2Ccc6lsLs4iAgICAgICAgICAgICD5ke1jS95AaBkknsC1teKxuW1azadOTFK+umJbltFE7Ynb6Q5RK2nLP8AEu1YxQ64GNhsMYHkplY0h2nbKywIPGsp2TwTQP3ZJGWHyW1Z1LTJXqrpRl8tz6KumpnjAa7LNveb3KfSdwoM1Oi2ko4d6h6Ept1S76mU5hcTsx3wXLNj33S+Hn6f1lZdVTxTxOikAcxw271X5cUW7LzFl6O8IHeLVJSSntdCTlj/ACXnuTxpxzt6HjcqMjxt1wnpZA+I7Zw5hOzgueHPbHPZ0z8euTymtqvNPVNAB5Jce0xx3yr3By63UWfiWo6amR38oU9vAm4Y7ibZ0ICAgICAgICeTehYZeFXVwwMMkzg0Dz3K55c0Uju6YsM3nsjvXqbpP048x0TDl573qu67Z7fxY9FcFf6ktPCyKNscYw1owNlZY6dMahW5L9U7l6Lo5iAgIaQ7iFp/wCl0wrYG5qIBlwA3exd8V9IHLwb7qpBcxwIy17Tn4FpU2e8KjvErV0NqllXCyiqnAVcbeVpJ+2Ch5Meu624vJ3HTKWVVNFNG6OUBzSMdm4UPJii9e61xZZpO4Qm82Kamc58eXwZyDjJYFQ8niWp3hfcfmVvGpcmN7muDmEtcNwQcEKJW008JdqRfykNr1PJHiOrHO3sDxs5oVhg58x7ldyOBFvak9HcKacAwvaSRnlz7QVrj5FLKnJxr0bSkbj4cJiY8iAgICAgICD5kkYxpc8hrQMkk4AWlrxV0rSbOFc9SwRBzKb6yTGA7PstUDPz6xGo8p+DgWmdz4cejpa25zdWdzhDnJPY0DyUPHjyZ53PhMyZMeCNR5TCkpYoImxRDDQPvcVc48UUjUKXJlm87l7rrty0ICAgIyw5oILTuCMEEZBCNZjarNd6XfTSvr6RpNNIeaRoH2LlMxZNqjl8ea94Q6GWSN7ZInOY9h5muacFpUiY2hVt0rR0hrOKqaylr3NZVAcoeTytmKh5MWlrx+XE9pTJzWuaWuALSNwRkFRrUifKxpbXdHLvppj+aWj9l+cmM+65VXJ4HzVa8bnz4si1TTTQv6czXMd3AjGQqm+K1fK3x5q3fEcj2Hmjc5p+LXcpWtb2r4bTStvLrUepK6IBryJGDYBwwVNx829ULLwaWdmn1XTEDrNc13YcDICm0/I0lCv+OvDoxXu3vAPVjafg52CFKjl0lFnh3hsNr6R3uyxn95bxyKfbnOC/0+zV047Xx+pZ9en2x6N/p5PudE33poh++tZ5FI+WY415+GlUajt8ewd1P1PaC4352OEinAyS5VXqx5yKdmB3Od2hQ7/kf+Uun43v+ziVNfWVL8Pe9xccBjThrvuUK2bLklPrhxY4diz6ae8tlrAWs7RH2FwUzj8OZndkLk82IjVUthijjYGRgNaBgADCuaY4pHZTXyTady+1s0EBAQEBAQfE0TJGOikAcxww4EZBCzE9LW1YnyqvWOj5qR76yiaX0jnczmAZdCpmPJtU8ji9M9UIeCQcgkOByMHBBXae6DvpnaYaa1zU0vTp63M1OByh+cyMC45MO/Cdh5kx2lZFru9DWRiSllY/I3bnDmlRbU15WePPFo7NiqpIJ2FkzWuBGOzdRsmCt/KXjz2p4lHa7SgJLqV+O/kd2BVuX8fM+1ZYvyMR7nBqrVWw56kT+UHHMBkFV9+Lkp5WNOXjv4aZaR2gj5jC5TEx8O0TE/LH/u1a922oZ5ndxd/HCzFp+2JrH0zzu8TvUs9c/bHRH0xknvJ+/KxG5Z1D0hp5pCGxse4nsAHatq47W+Gk5K1+XZodM1UmHT4ib3g+8QpuLgWt7kLLz619qTW6z0lMMsaHP73uGSVaYeLXGqs3LtkdBS+yJqZ7iG4nyICAgICAgICD5e1rmlrgC0jBBGQQs7azXaC6p0KyYvqrbhkvvOhx7L/kpGPMr+RxP+VdVdHUU8hiqWOjeDghwwMqTW0WVt8dq+WKSrqKeQS073xvHYWnCzNayRe1Z7JdaeIVbCGsrGCeMbFzfZlK4WwxKZTmzXyl1u1vZ6jlD3mGR23I8ZIK4zhTKcyku5HXUcuOSSF+RsOcErjbGk0z79ssTW+jl3fHG7btwuF+NSfhJry7R8tGXTdA47Bzf1ThcJ4FJSa8+0fLy/srQ+KX1Ln/AOdVv/6VmW6WoB3yH5u2W0fjqMT+Ts9m2q0w7vEY85HYXanBpCPb8jafMt2jfRuDhSmJwZseQ83Ku8YYr8OHrzf5bS3aiAgICAgICAgICAgICMeHPulmoa1hZVRtcSMB4HK9v3ret5hzyYK38oDe+Hs8ZdJbndRnaInbOaPmpFcsK3Lwpjwh9ZbqymcRUxSR4OMubhpXeL1Q747V8w1VlpG48vSKeaM80b3tPcWuwQnTDMXtHiW/FqC7Mxy1M+3ZmQkLX06ukZ7/AG2mavvbdhNn5jKx6cNo5Fvtk6xvePth6cJ6VWf9N/t4S6nvD+2okHx5XFqenVr/AKL/AG0ai41s3280z/1pMhbdENJyXsmnCqd/0isiOS0xgjfIBXDPGvCfwt/Ky1EWggICAgICAgICAgICAgICbPLxqKWnmHLNHHIP88YfhbdTS2OJcC4aJs1QS/pmN572O5APuXSM0o9+JSXCquGzNzBO4fBrm5wukZ0aeD9OZLw6uYP1b4nDzdhbetDlPCu8f7vbz/o/8iz60Mf4rvtnDy7E+26EDyflJzQz/hs6FLw2kODPPy/ENbzLWeQ614Eu3QaBtMRDpQ+Z4ORl5a0/cuc5navCrCSUdBS04xTRRx7YJawNLguM3mUquOtWysOggICAgICDoICAgICAgICAgIMIdmUGFgFkZQYQEBBlAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBB//Z" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">KMCE</h5>
          <p className="card-text">To be a part of our excellence institute, click on the below button and view the available job roles.</p>
         <Link to="/vacancies" className="btn btn-primary">Click here</Link>
        </div>
      </div>
    </div>
    <section>
      <Footer/>
    </section>
   </>
  )
}

export default institute