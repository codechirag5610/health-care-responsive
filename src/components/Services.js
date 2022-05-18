import React from 'react'
import './Services.css'

const Services = () => {
    const services = [
        {id: 1, src: "../Assets/healthcare.png", name: "Emergency Care"},
        {id: 2, src: "../Assets/brain.png", name: "Neurology"},
        {id: 3, src: "../Assets/pediatry.png", name: "Pediatry"},
        {id: 4, src: "../Assets/heartbeat.png", name: "Cardiology"},
        {id: 5, src: "../Assets/dental-care.png", name: "Dentistry"},
        {id: 6, src: "../Assets/bone.png", name: "Orthonpedics"},
    ]
  return (
    <div className='serviceContainer'>
        <div className="serviceInfo">
            <h1 className="serviceHeading">HEALTHCARE</h1>
            <h1 className="serviceHeading">YOU CAN TRUST</h1>
            <p className='serviceDescription'>
            Behold divided behold. In fly. 
            Doesn't you'll heaven subdue creepeth air 
            him divide give days image over called. 
            Without him, night above subdue you'll let 
            under multiply let firmament void that had 
            don't called living it signs it, god. 
            Gathered years multiply that that days signs 
            void creepeth Together in face for he can't us. 
            Seas air beast behold creature itself herb place, days.
            </p>
            <button className='allServices'>SEE ALL SERVICES</button>
        </div>
        <div className="services">
                {services.map(service => {
                    return(
                        <div className="service" id={service.id}>
                            <img className='serviceIcon' src={service.src} alt={service.name} />
                            <p className="serviceName">{service.name}</p>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Services