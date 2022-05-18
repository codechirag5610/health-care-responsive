import React, { useState } from 'react'
import './Appointment.css'

const Appointment = ({ addAppointment }) => {
    const [input, setInput] = useState({name: null, email: null, service: null, date: null});

    const handleChange = (e) => {
        setInput(e.target.id = e.target.value)
    }
    const handleSubmit = (e) => {
        addAppointment(input);
    }
  return (
    <div className='formContainer'>
        <div className="formText">
            <h2 className="title">MAKE AN APPOINTMENT</h2>
            <div className="hrline"></div>
            <p className="info">A Specialist Will Contact You Shortly</p>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input">
                <input className='formItem' type="text" name="name" id="name" onChange={handleChange} placeholder="Your Name" />
                <input className='formItem' type="email" name="email" id="email" onChange={handleChange} placeholder="Your Email" />
                </div>
                <div className="input">
                <select className='formItem' name='service' id='service' onChange={handleChange}>
                <option className='formItem'>Select Service</option>
                <option className='formItem' value="care">Emergency Care</option>
                <option className='formItem' value="neuro">Neurology</option>
                <option className='formItem' value="pedia">Pediatry</option>
                <option className='formItem' value="cardio">Cardiology</option>
                <option className='formItem' value="dental">Dentistry</option>
                <option className='formItem' value="ortho">Orthopedics</option>
                <option className='formItem' value="other">Other</option>
                </select>
                <input className='formItem' type="date" name="date" id="date" onChange={handleChange} />
                </div>
                <div className="button"><button type="submit">Make an Appointment</button></div>
            </form>
        </div>
    </div>
  )
}

export default Appointment