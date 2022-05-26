import React from 'react'
import { Navbar, PageName, Footer } from '../../components/index.js'
import './Locations.css'


const Locations = () => {
  const locations = [
    {id: 1, name: "healthcare medical center", location: "3947 terry lane, winter park, florida, 32789", phone: "(561) 223-1234", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28023.905328312827!2d-81.37475907937092!3d28.600131825544608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7655760ff3823%3A0x908f4ff6df22a0ea!2sWinter%20Park%2C%20FL%2032789%2C%20USA!5e0!3m2!1sen!2sin!4v1573100708998!5m2!1sen!2sin"},
    {id: 2, name: "alego health co.", location: "3007 cotter lake, missouri city, tx, 77459", phone: "(912) 523-5983", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.0614335741343!2d-95.57895198439566!3d29.5728157820564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e5e410135fbb%3A0x22f88f179471f996!2s3007%20Cotter%20Lake%20Cir%2C%20Missouri%20City%2C%20TX%2077459%2C%20USA!5e0!3m2!1sen!2sin!4v1573100849686!5m2!1sen!2sin"},
    {id: 3, name: "echo health center", location: "1950 lacrosse st., pittsburgh, pa, 15218", phone: "(561) 223-1234", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1995710869924!2d-79.88535288416595!3d40.426579579363946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ee7a55e71d0d%3A0x977e71d384f36343!2s1950%20Lacrosse%20St%2C%20Pittsburgh%2C%20PA%2015218%2C%20USA!5e0!3m2!1sen!2sin!4v1573100945374!5m2!1sen!2sin"},
    {id: 4, name: "hawthrone health corp", location: "1069 forest creek, garland, tx, 75043", phone: "(660) 213-3338", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.576012413861!2d-96.61806568433278!3d32.85647598094807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea65320475d27%3A0xf4509d7db92083b4!2sDuck%20Creek%20Dr%2C%20Garland%2C%20TX%2075043%2C%20USA!5e0!3m2!1sen!2sin!4v1573101022078!5m2!1sen!2sin"},
  ]
  const pageHeading = "Locations"
  return (
    <div className='locationHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <div className="locationsContainer">
        <div className="locationHeading">
          <h1>healthcare locations</h1>
        </div>
        <div className="locationsHrLine"></div>
        <div className="locations">
          {locations.map(location => { return(
            <div key={location.id} className="location">
              <div className="locationText">
                <h2 className="locationName">{location.name}</h2>
                <h4 className="locationAddress">{location.location}</h4>
                <h4 className="locationPhone">{location.phone}</h4>
                <button className="locationDirection">get directions</button>
              </div>
              <div className="locationMap">
                <iframe className="healthCareMap" src={location.src} allowFullScreen=""></iframe>
              </div>             
            </div>)})}
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Locations