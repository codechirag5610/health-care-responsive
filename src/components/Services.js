import React from 'react'
import './Services.css'
import { Link, useNavigate } from 'react-router-dom';
import healthCare from "../Assets/healthcare.png"
import brain from "../Assets/brain.png"
import pediatry from "../Assets/pediatry.png"
import heartbeat from "../Assets/heartbeat.png"
import dental from "../Assets/dental-care.png"
import bone from "../Assets/bone.png"

const Services = () => {
    let navigate = useNavigate();
    const services = [
        {id: 1, src: healthCare, name: "Emergency Care"},
        {id: 2, src: brain, name: "Neurology"},
        {id: 3, src: pediatry, name: "Pediatry"},
        {id: 4, src: heartbeat, name: "Cardiology"},
        {id: 5, src: dental, name: "Dentistry"},
        {id: 6, src: bone, name: "Orthonpedics"},
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
            <button className='allServices' onClick={() => {navigate("services", {replace: true})}}>SEE ALL SERVICES</button>
        </div>
        <div className="services">
                {services.map(service => {
                    return(
                        <div className="service" key={service.id}>
                            <Link className="serviceName" to={`service/${service.id}`}>
                            <img className='serviceIcon' src={service.src} alt={service.name} />
                            <p className='serviceTitle'>{service.name}</p></Link>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Services