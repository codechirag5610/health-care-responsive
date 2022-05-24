import React from 'react'
import { Navbar, Doctors, Footer } from '../../components/index.js'
import './Expert.css'

const Experts = () => {
  return (
    <div className='expertsHero'>
      <Navbar />
      <Doctors />
      <Footer />
    </div>
  )
}

export default Experts