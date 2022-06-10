import React from 'react'
import { useNavigate } from "react-router-dom";
import { Navbar, PageName, Doctors, Footer } from '../../components/index.js'
import './About.css'
import doctor1 from '../../Assets/doctor1.jpg';
import bed from '../../Assets/bedlogo.jpg'
import volun from '../../Assets/volulogo.jpg'
import doctor from '../../Assets/doctorlogo.jpg'
import id from '../../Assets/idlogo.jpg'
import surgeon from '../../Assets/surgeon.jpg'
import goal from '../../Assets/goal.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const About = () => {
  let navigate = useNavigate();
  const isVisible = true;
  const doctors = [
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 2, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 3, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
  ]
  const howMuch = [
    {id: 1, name: "Beds", amount: "800+", src: bed},
    {id: 2, name: "Team Members", amount: "1200+", src: id},
    {id: 3, name: "Doctors", amount: "550+", src: doctor},
    {id: 4, name: "Volunteers", amount: "600+", src: volun},
]
  const handleClick = () => {
      navigate("/experts", { replace: true});
  }
  const pageHeading = "About Us";
  return (
    <div className='aboutHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <section className="missionContainer">
        <div className="missionHead"><h2>mission for greatness</h2></div>
        <div className="missionDescription">Our, signs kind Moved were gathered. 
        Living over herb of tree fowl, first hath, god years rule it bearing bring creeping. 
        Bring light divided For morning give first saying every cattle place 
        above spirit winged third it over you're hath set to for sea. 
        Green likeness may fruit brought multiply divide together. 
        Were morning our divided likeness fifth.</div>
      </section>
      <section className="whoWeAreContainer">
        <div className="whoWeAreDescription">
          <h2 className="whoWeAreheading">who we are</h2>
          <p className="whoWeAre">Were. I stars years bearing. Two fruitful. 
          Good yielding and was doesn't waters blessed over so behold every midst living. 
          The the made subdue face beginning abundantly sea, saw don't. 
          Behold and his heaven together set multiply won't appear kind fourth the firmament he you're which herb. 
          Good there had may itself called heaven you night.</p>
          <p className="whoWeAre">
          Sea. That darkness spirit, him earth itself beast bring abundantly 
          there man night also waters light moving us heaven divided land meat 
          green have darkness life very very replenish won't above forth his 
          very rule own great.
          </p>
          <div className="howMuchWeAre">
            {howMuch.map(how => { 
              return (
                    <div id={how.id} className="stat">
                        <img src={how.src} alt={how.name} />
                        <p className='numbers'>{how.amount}</p>
                        <p className="subjects">{how.name}</p>
                    </div>    
                )})}
          </div>
        </div>
        <div className="bgImage">
          <img src={surgeon} alt="surgeon" />
        </div>
      </section>
      <section className="specialistAppointCointainer">
        <div className="specialistHeading">HIGH-CLASS SPECIALISTS ARE READY TO HELP YOU AT ANY TIME.</div>
        {/* <div className="specialistHeading"></div> */}
        <div className="specialistDescription">Contact us any suitable way and 
        make an appointment with the doctor whose help you need! 
        Visit us at the scheduled time and get your treatment.</div>
        <div className="appointmentButton"><button onClick={() => {navigate("appointment", {replace: true})}}>book an Appointment</button></div>
      </section>
      <section className="ourGoalContainer">
        <div className="bgImage">
          <img src={goal} alt="surgeon" />
        </div>
        <div className="ourGoalDescription">
          <h2 className="ourGoalheading">OUR GOAL</h2>
          <p className="ourGoal">Were. I stars years bearing. Two fruitful. 
          Good yielding and was doesn't waters blessed over so behold every midst living. 
          The the made subdue face beginning abundantly sea, saw don't. 
          Behold and his heaven together set multiply won't appear kind fourth the firmament he you're which herb. 
          Good there had may itself called heaven you night.</p>
          <p className="ourGoal">
          Sea. That darkness spirit, him earth itself beast bring abundantly 
          there man night also waters light moving us heaven divided land meat 
          green have darkness life very very replenish won't above forth his 
          very rule own great.
          </p>
          <div className="ourGoalQuote">
          <FontAwesomeIcon className='goalQuote' icon={faQuoteLeft} />
            <p><i>Bring called dry seed likeness moved so together 
              you days fruit evening wherein thing grass wherein 
              man, that appear fly said he can't called 
              gathered forth gathering she'd sea moved</i></p>
          </div>
        </div>
      </section>
      <Doctors handleClick={handleClick} doctors={doctors} isVisible={isVisible} />
      <Footer />
    </div>
  )
}

export default About