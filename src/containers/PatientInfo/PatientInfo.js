import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar, PageName } from '../../components'
import './PatientInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faHospital } from '@fortawesome/free-solid-svg-icons'

const PatientInfo = ({ allInfos }) => {
  const patientInfoFeatures = [
    {id:1, src: faUserDoctor, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "Qualified Doctors"},
    {id:2, src: faAmbulance, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "EMERGENCY CARE"},
    {id:3, src: faHospital, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "24/7 Service"},
]

  const pageHeading = "Patient Info"
  return (
    <div className='patientInfoHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <section className="beforeAppointment">
        <div className="infoDetailsHero">
          <h2 className="infoDetailsHead">MAKE THE MOST OF YOUR HOSPITAL STAY</h2>
          <p className="infoDetailsPara">Gathered whales, appear moved he deep set signs Bearing greater third. After day fly said whales make may likeness moveth behold fruit she'd image blessed. So in you're, set bring female creeping under. Us two fourth subdue divided our green and female waters itself beast shall form upon Evening cattle void saw.</p>
          <p className="infoDetailsPara">Forth him Fly fifth saw. Green seas winged fruitful fish female brought wherein greater. Very. Life morning days of. Meat third the called life them. It you male good. Tree image. Be which it creature in i over seas, also won't them darkness be have subdue set. Isn't fish firmament days is.</p>
        </div>
        <div className="infosPage">
              {allInfos.map(info =>  { return(
                <p><Link className='allService' id={info.id} to={`info/${info.id}`}>{info.name}</Link></p> 
                )})}
        </div>
        <p className="infoDetailsPara">Forth him Fly fifth saw. Green seas winged fruitful fish female brought wherein greater. Very. Life morning days of. Meat third the called life them. It you male good. Tree image. Be which it creature in i over seas, also won't them darkness be have subdue set. Isn't fish firmament days is.</p>
        <p className="infoDetailsPara">Forth him Fly fifth saw. Green seas winged fruitful fish female brought wherein greater. Very. Life morning days of. Meat third the called life them. It you male good. Tree image. Be which it creature in i over seas, also won't them darkness be have subdue set. Isn't fish firmament days is.</p>
      </section>
      <section className="appointmentHero">
        <div className="appointmentDetails">
          <div className="appointmentDeatailsHead">
            <h1>HIGH-CLASS SPECIALISTS ARE READY TO</h1>
            <h1>HELP YOU AT ANY TIME.</h1></div>
          <div className="appointmentDetailsText">
            <p>Contact us any suitable way and make an appointment with the doctor whose help you need!</p>
            <p>Visit us at the scheduled time and get your treatment.</p></div>
        </div>
        <div className="appointmentButtonHero">
          <div className="appointmentButton"><button type="submit">Book an Appointment</button></div>
        </div>
        </section>
        <section className="patientInfoFeatures">
        <div className="lifeDetailsHero">
            {patientInfoFeatures.map(feature => {
              return(
                <div className="lifeHero">
              <div className="lifeLogos"><FontAwesomeIcon className='lifeLogo' icon={feature.src} /></div>
              <div className="lifeTitle"><h4>{feature.title}</h4></div>
              <div className="lifeDescription">{feature.text}</div>
            </div>
              )
            })}
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default PatientInfo