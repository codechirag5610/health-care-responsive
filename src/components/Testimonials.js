import React, { useState } from 'react'
import './Testimonials.css'
import { Carousel } from 'react-bootstrap';
import doctor from '../Assets/doctor1.jpg';
import color from '../Assets/color.jpg';
import play from '../Assets/play-button.png';

const Testimonials = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='testimonialsContainer'>
      <div className="photoVideo">
        <img className='doctorPhoto' src={doctor} alt="" />
        {/* <div className="doctorVideo">
          <p className="watch">watch healthcare video</p>
          <a type='button' className="videoButton"><img src={play} alt="" /></a>
        </div> */}
      </div>
      <div className="testimonials">
        <div className="testimonialsHeading"><h1>WHY OUR PATIENTS CHOOSE
          HEALTHCARE</h1></div>
        <div className="testimonialSliderContainer">
        <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100 h-75"
      src={color}
      alt="First slide"
    />
    <Carousel.Caption>
    <div className="outline">
      {/* <p className="uqoutes">"</p> */}
      <p className='sliderCaption'>"Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
      {/* <p className="lqoutes">"</p> */}
    </div>
    <div className="testimony">
      <p className="by">by</p>
      <p className="testimonyName">John Doe</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100 h-75"
      src={color}
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className="outline">
        {/* <p className="uqoutes">"</p> */}
        <p className='sliderCaption'>"Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
        {/* <p className="lqoutes">"</p> */}
      </div>
      <div className="testimony">
        <p className="by">by</p>
        <p className="testimonyName">John Doe</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100 h-75"
      src={color}
      alt="Third slide"
    />
    <Carousel.Caption>
      <div className="outline">
        {/* <p className="uqoutes">"</p> */}
        <p className='sliderCaption'>"Praesent commodo cursus magna, vel scelerisque nisl consectetur."</p>
        {/* <p className="lqoutes">"</p> */}
      </div>
      <div className="testimony">
        <p className="by">by</p>
        <p className="testimonyName">John Doe</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="allTestimonials">
          <button className="seeAllTestimonials">see all testimonials</button>
        </div>
      </div>
    </div>
    // <div className="row">
    //   <div className="left-video col-lg-6 p-0 position-relative" data-bs-aos="fade-right">
    //     <img src="images/video-img.jpg" className="img-fluid w-100 video-img" alt="" />
    //     <div className="position-absolute text-white video-txt-sec"><span>Watch healthcare video</span>
    //         <span className="position-absolute">
    //           <a type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    //               <img src="images/video-icon.png" alt="play" className="img-fluid" />
    //           </a></span>
    //     </div>
    //   </div>
    //   <div className="right-testimonials client-reviews col-lg-6 bg-light-green px-5 py-md-4 pt-2" data-bs-aos="fade-left">
    //     <h2 className="text-white w-100 mt-lg-5 mt-3">Why Our Patients choose <br className="hide-mobile" />healthcare</h2>
    //     <div id="carouselhome-testimonial" className="carousel slide w-100 align-self-center" data-bs-ride="carousel">
    //         <ol className="carousel-indicators">
    //           <li data-bs-target="#carouselhome-testimonial" data-bs-slide-to="0" className="active" aria-current="true"></li>
    //           <li data-bs-target="#carouselhome-testimonial" data-bs-slide-to="1" className=""></li>
    //           <li data-bs-target="#carouselhome-testimonial" data-bs-slide-to="2" className=""></li>
    //         </ol>
    //         <div className="carousel-inner">
    //           <div className="carousel-item active">
    //               <p className="rounded text-white position-relative"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</em></p>
    //               <div className="client text-white"><span>John Doe</span> - Satisfied Patient</div>
    //           </div>
    //           <div className="carousel-item">
    //               <p className="rounded text-white position-relative"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</em></p>
    //               <div className="client text-white"><span>John Doe</span> - Satisfied Patient</div>
    //           </div>
    //           <div className="carousel-item">
    //               <p className="rounded text-white position-relative"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</em></p>
    //               <div className="client text-white"><span>John Doe</span> - Satisfied Patient</div>
    //           </div>
    //         </div>
    //     </div>
    //     <a href="#testimonial.html" className="text-link">View All Testimonials</a>
    //   </div>
    // </div>
  )
}

export default Testimonials