import React from 'react'
import { Navbar, Appointment, Info, Footer } from '../../components/index.js'
import './About.css'

const About = () => {
  return (
    <div className='aboutHero'>
      <Navbar />
      <Appointment />
      <Info />
      <Footer />
    </div>
  )
}

export default About