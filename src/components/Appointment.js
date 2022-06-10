import React, { useState } from 'react'
import './Appointment.css'
import { useForm } from "react-hook-form";

const Appointment = ({ addAppointment }) => {
    const [input, setInput] = useState({name: null, email: null, service: null, date: null});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      }

    const handleChange = (e) => {
        setInput(e.target.id = e.target.value)
    }
  return (
    <div className='formContainer'>
        <div className="formText">
            <h2 className="title">MAKE AN APPOINTMENT</h2>
            <div className="hrline"></div>
            <p className="info">A Specialist Will Contact You Shortly</p>
        </div>
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                <input className='formItem' type="text" name="name" id="name" onChange={handleChange} placeholder="Your Name" {...register("fullName", { required: true, maxLength: 10 })} />
                {errors.fullName && <p>Please check the Name</p>}
                <input className='formItem' type="email" name="email" id="email" onChange={handleChange} placeholder="Your Email" {...register("email", {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} />
                {errors.email && <p>Please check the Email</p>}

                </div>
                <div className="input">
                <select className='formItem' name='service' id='service' onChange={handleChange} {...register("service", { required: true})}>
                <option className='formItem'>Select Service</option>
                <option className='formItem' value="care">Emergency Care</option>
                <option className='formItem' value="neuro">Neurology</option>
                <option className='formItem' value="pedia">Pediatry</option>
                <option className='formItem' value="cardio">Cardiology</option>
                <option className='formItem' value="dental">Dentistry</option>
                <option className='formItem' value="ortho">Orthopedics</option>
                <option className='formItem' value="other">Other</option>
                </select>
                {errors.service && <p>Please select the service</p>}
                <input className='formItem' type="date" name="date" id="date" onChange={handleChange} {...register("date", { required: true })} />
                {errors.date && <p>Please select the date</p>}
                </div>
                <div className="button"><button type="submit">Make an Appointment</button></div>
            </form>
        </div>
    </div>
  )
}

export default Appointment