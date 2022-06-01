import React from 'react'
import './Testimonials.css'
import { Navbar, PageName, Footer} from '../../components/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import testi1 from '../../Assets/testi1.jpg'
import testi2 from '../../Assets/testi2.jpg'
import testi3 from '../../Assets/testi3.jpg'

const Testimonials = () => {
  const videos = [
    {id:1, src: testi2, title: "mathew browny"},
    {id:2, src: testi1, title: "johnson doe"},
    {id:3, src: testi3, title: "garima anand"},
  ]
    const pageHeading = "Our Testimonials"
  return (
    <div className='testimonialsHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <section className="bestTestiContainer">
        <div className="quoteIcon"><FontAwesomeIcon className='testiQuote' icon={faQuoteLeft} /></div>
        <div className="testi">
          <p className='testiText'><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</i></p>
          <div className="testiBy">
              <p className="byName">GARIMA ANAND</p>
              <p className="byWho">-Satisfied patient</p>
          </div>
        </div>
      </section>
      <section className="videoContainer">
      {videos.map(video => {
          return(
            <div className="videoHero">
            <div className="video">
              <img src={video.src} alt="" />
              <FontAwesomeIcon className='playIcon' icon={faCirclePlay} />
            </div>
            <div className="videoText">
              <div className='videoTitle'>
                <h2>{video.title}</h2>
                <p>-Satisfied Patient</p>
              </div>
            </div>
            </div>
          )
        })}
      </section>
      <Footer />
    </div>
  )
}

export default Testimonials
