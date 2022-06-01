import React from 'react'
import { Navbar, PageName, Footer } from '../../components/index.js'
import './Blogs.css'

const Blogs = () => {
  const pageHeading = "Our Blogs"
  return (
    <div className='blogHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <Footer />
    </div>
  )
}

export default Blogs