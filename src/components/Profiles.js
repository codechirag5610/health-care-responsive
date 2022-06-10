import React from 'react'
import { useParams } from 'react-router-dom'
import './Profiles.css'
import { Navbar, Footer } from './index'
import {FaFacebookF, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaQuoteLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Profiles = ({ doctors }) => {
    const id = useParams();
    const doctor = doctors.find((doc) => String(doc.id) === id.id);
      
      // console.log("docid", String(doc.id))
    
    // console.log(doctor)
    // console.log("id", id)
    return (
      <>
      <Navbar />
    {doctor ? <div className='profileContainer'>
      <div className="sideBarDoctors">
        <h1>our experts</h1>
          {doctors.map(doc => {return(
              <div key={doc.id} className="sideBarDoctor">
                  <p className="sideBarDocName">{">>"} {doc.name}</p>
                  <p className="sideBarDocSpeciality">{doc.Speciality}</p>
                  <div className="hrLineProfiles"></div>
              </div>
          )})}
      </div>
      <div className="mainDoctorProfile">
          <div className="profilePic">
              <img className='profilePicture' src={doctor.src} alt="" />
              <div className="nameAndInfo">
                  <div className="profileName">
                      <p className='docName'>{doctor.name}</p>
                      <p className='docSpec'>{doctor.Speciality}</p>
                  </div>
                  <div className="profileHrLine"></div>
                  <div className="profileContactInfo">
                    <div className="profileCallUs">
                        <FaPhoneAlt className='profileConnectLogo' alt="" />
                        <a href="tel:(561)223-1234">(561) 223-1234</a>
                    </div>
                    <div className="profileEmailUs">
                        <FaEnvelope className='profileConnectLogo' alt="" />
                        <a href="#">info@healthcare.com</a>
                    </div>
                    <div className="profileContactConnection">
                        <div className="profileConnectedLogos">
                        <Link to="#"><FaFacebookF size={25} style={{margin: 15, color: 'white'}} className='profileConnectLogo' alt="" /></Link>
                        <Link to="#"><FaTwitter size={25} style={{margin: 15, color: 'white'}} className='profileConnectLogo' alt="" /></Link>
                        <Link to="#"><FaYoutube size={25} style={{margin: 15, color: 'white'}} className='profileConnectLogo' alt="" /></Link>
                    </div>
                    </div>
                  </div>
                  <div className="profileHrLine"></div>
                  <div className="profileDoctorQuote">
                    <FaQuoteLeft className='profileQuoteLogo' alt=""/>
                    <p>You're day midst of brought. Winged together which forth itself in you air dominion good darkness seed upon be made upon i moved.</p>
                  </div>
              </div>
          </div>
          <div className="profileDoctorBiography">
              <h3>biography</h3>
              <div className="profileBiography">
              Bearing called a fruit greater created hath fourth two. Also. Light day greater wherein made. Days, stars fruit she'd after male fowl lesser divided. Firmament one whales called of, firmament god you're waters years upon abundantly brought image, void above he, saw. Doesn't rule, god, unto greater and fish, spirit forth There. Deep face upon greater you, seasons one. Day spirit so dry he called.
              </div>
              <div className="profileEducation">
                <h3>education</h3>
                <div className="profileAllEducation">
                    <div className="titleTime">
                      <p className='eduTitle'>Abc university of los angeles</p>
                      <p className='eduTime'>(2006-2008)</p>
                    </div>
                    <div className="edudescription">Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building steepest. Agreement distrusts mrs six affection satisfied.</div>
                </div>
              </div>
          </div>
          <div className="contactDoctor">
            <h3>CONTACT ME</h3>
            <form action="">
              <input type="text" name='firstName' placeholder='first name' />
              <input type="text" name='lastName' placeholder='last name' />
              <input type="text" name='email' placeholder='email' />
              <input type="text" name='contact' placeholder='contact' />
              <input className='case' type="" name='case' placeholder='case description' />
              <button type="submit">submit now</button>
            </form>
          </div>
      </div>
    </div>: <div style={{alignItems: "center", color: "#184f68"}}><h1>Page Not found</h1></div>}
    <Footer />
    </>
  )
}

export default Profiles;

// : return(<div>Page Not Found</div>)