import React from 'react'
import './Doctors.css'


const Doctors = ({ handleClick, doctors, isVisible }) => {
  
  return (
    <div className='doctorContainer'>
      <div className="info">
        <h1 className='doctorHeading'>Meet our experts</h1>
        <p className="doctorDescription">Together own seas said fowl herb saw also that had saying darkness may After together</p>
      </div>
      <div className="doctors">
        {doctors.map(doctor => {
          return(
            <div key={doctor.id} className="doctor">
              <img src={doctor.src} alt="benice" />
              <div className="doctorProfile">
                <h3 className="doctorName">{doctor.name}</h3>
                <p className="doctorSpecialty">{doctor.Speciality}</p>
                <button className='doctorView'>View Profile</button>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{ display: isVisible ? "block" : "none" }} className="allDoctors">
        <button className="seeAllDoctors" onClick={handleClick}>see all doctors</button>
      </div>
    </div>
  )
}

export default Doctors