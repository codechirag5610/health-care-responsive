import React, { useState } from 'react'
import { Navbar, Doctors, Footer } from '../../components/index.js'
import './Expert.css'

const Experts = ({ doctors }) => {
  return (
    <div className='expertsHero'>
      <Navbar />
      <Doctors doctors={doctors} />
      <Footer />
    </div>
  )
}

export default Experts