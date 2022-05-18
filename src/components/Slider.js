import React, { useState } from 'react'
import './Slider.css';
import { Carousel } from 'react-bootstrap';
import surgery1 from '../Assets/surgery1.jpg';
import surgery2 from '../Assets/surgery2.jpg';
import surgery3 from '../Assets/surgery3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='sliderContainer'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={surgery1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>GETTING YOU BACK TO BETTER.</h3>
          <p>Have saw replenish saw made bring creature whales darkness evening</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={surgery2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>GETTING YOU BACK TO BETTER.</h3>
          <p>Have saw replenish saw made bring creature whales darkness evening</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={surgery3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>GETTING YOU BACK TO BETTER.</h3>
          <p>
          Have saw replenish saw made bring creature whales darkness evening
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;