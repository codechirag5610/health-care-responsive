import React, { useState } from 'react'
import { Navbar, Doctors, Footer } from '../../components/index.js'
import './Expert.css'
import doctor1 from '../../Assets/doctor1.jpg';

const Experts = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [doctors, setDoctors] = useState([
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 2, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 3, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
  ]);
  const handleClick = () => {
    setDoctors(
      [
        {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 2, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 3, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 4, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 5, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 6, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 7, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 8, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
        {id: 9, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
      ]   
    );
    setIsVisible(false);
  }
  return (
    <div className='expertsHero'>
      <Navbar />
      <Doctors handleClick={handleClick} doctors={doctors} isVisible={isVisible} />
      <Footer />
    </div>
  )
}

export default Experts