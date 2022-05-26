import React from 'react'
import { Navbar, Appointment, PageName, Footer } from '../../components/index.js'
import './Career.css'

const Career = () => {
  const pageHeading = "we're hiring"
  return (
    <div className='careerHero'>
        <Navbar />
        <PageName pageHeading={pageHeading} />
        <Appointment />
        <Footer />
    </div>
  )
}

export default Career
