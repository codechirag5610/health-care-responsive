import React from 'react'
import './Doctors.css'
import doctor1 from '../Assets/doctor1.jpg';

const Doctors = () => {
  const doctors = [
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
  ]
  return (
    <div className='doctorContainer'>
      <div className="info">
        <h1 className='doctorHeading'>Meet our experts</h1>
        <p className="doctorDescription">Together own seas said fowl herb saw also that had saying darkness may After together</p>
      </div>
      <div className="doctors">
        {doctors.map(doctor => {
          return(
            <div className="doctor">
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
      <div className="allDoctors">
        <button className="seeAllDoctors">see all doctors</button>
      </div>
    </div>
  )
}

export default Doctors