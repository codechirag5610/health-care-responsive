// import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Appointment, Doctors, Footer, PageName } from '../../components/index.js'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Services.css'
import { doctors } from '../../api/data';

const Services = ({ allServices }) => {
  const isVisible = true;
  let navigate = useNavigate();
  const initialDoctors = doctors.slice(0, 3)
  const handleClick = () => {
      navigate("/experts", { replace: true});
  }
  const pageHeading = "Our Services";
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const allItems = [
    {id: 1, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {id: 2, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {id: 3, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {id: 4, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {id: 5, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
    {id: 6, name: "John Doe", text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."},
  ]
  return (
    <div className='servicesHero'>
        <Navbar />
        <PageName pageHeading={pageHeading} />
        <div className="servicesPageContainer">
          <div className="servicesPageTitle">
            <h2 className="servicesPageHeading">wide range of medical service</h2>
            <p className="servicesPagedescription">
            You're day midst of brought. Winged together which forth itself in you air dominion good darkness seed upon be made upon i moved 
            itself had divided lights. Had fifth, a fifth Cattle earth. 
            Fruit dry isn't dominion cattle fourth thing upon darkness midst the give herb you're there heaven the.
            </p>
          </div>
          <div className="servicesPage">
            {allServices.map(allService =>  { return(
              <p id={allService.id}><Link className='allService' id={allService.id} to={`service/${allService.id}`}>{allService.name}</Link></p> 
              )})}
          </div>
        </div>
        <Appointment />
        <div className='serviceTestimony'>
        <Carousel responsive={responsive}>
          {allItems.map(allItem => {return(<div className='carouselItems'>
            <div className="outline">
              {/* <p className="uqoutes">"</p> */}
              <p className='sliderCaption'>{allItem.text}</p>
              {/* <p className="lqoutes">"</p> */}
            </div>
            <div className="testimony">
              <p className="by">by</p>
              <p className="testimonyName">{allItem.name}</p>
            </div>
          </div>)})}
        </Carousel>
        </div>
        <Doctors handleClick={handleClick} doctors={initialDoctors} isVisible={isVisible} />
        <Footer />
    </div>
  )
}

export default Services