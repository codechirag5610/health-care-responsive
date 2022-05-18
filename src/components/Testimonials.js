import React, { useState } from 'react'
import './Testimonials.css'
import { Carousel } from 'react-bootstrap';
import surgery1 from '../Assets/surgery1.jpg';
import surgery2 from '../Assets/surgery2.jpg';
import surgery3 from '../Assets/surgery3.jpg';

const Testimonials = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='testimonialsContainer'>
      <div className="photoVideo">{surgery1}</div>
      <div className="testimonials">
        <div className="testimonialsHeading"><h1>WHY OUR PATIENTS CHOOSE
          HEALTHCARE</h1></div>
        <div className="testimonialSliderContainer">
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 h-75"
      src={surgery1}
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="outline"><p className='sliderCaption'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 h-75"
      src={surgery2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className="outline"><p className='sliderCaption'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={surgery3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <div className="outline"><p className='sliderCaption'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p></div>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="allTestimonials">
          <button className="seeAllTestimonials">see all testimonials</button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials