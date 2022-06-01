import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Navbar, PageName, Footer } from '../../components/index.js'
import './Career.css'
import { faCirclePlay, faTree, faShieldHeart, faMoneyBills, faBriefcaseMedical, faBuildingFlag, faMasksTheater } from '@fortawesome/free-solid-svg-icons'
import doctor4 from '../../Assets/doctor4.jpg'
import doctor5 from '../../Assets/doctor5.jpg'
import doctor6 from '../../Assets/doctor6.jpg'
import activity1 from '../../Assets/activity1.jpg'
import activity2 from '../../Assets/activity2.jpg'
import activity3 from '../../Assets/activity3.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Career = () => {
  const vacantPositions = [
    {id: 1, name: "technical ambassador", location: 'full time - san francisco'},
    {id: 1, name: "account executive", location: 'full time - san francisco'},
    {id: 1, name: "infection control officer", location: 'full time - san francisco'},
    {id: 1, name: "research associate", location: 'full time - san francisco'},
    {id: 1, name: "AR analyst", location: 'full time - san francisco'},
    {id: 1, name: "HCC Medical Coding", location: 'full time - san francisco'},
    {id: 1, name: "Head - human reasource", location: 'full time - san francisco'},
    {id: 1, name: "medical transcriptionist", location: 'full time - san francisco'},
    {id: 1, name: "medical representative", location: 'full time - san francisco'},
    {id: 1, name: "Orthopaedic Surgeon", location: 'full time - san francisco'},
  ]
  const allItems = [
    {id: 1, src: activity1},
    {id: 2, src: activity2},
    {id: 3, src: activity3},
    {id: 4, src: activity1},
    {id: 5, src: activity2},
    {id: 6, src: activity3},
  ]
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
  const videos = [
    {id:1, src: doctor4, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "the work"},
    {id:2, src: doctor5, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "the work"},
    {id:3, src: doctor6, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "the environment"},
  ]
  const lifeAtHc = [
      {id:1, src: faTree, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "PAID PARENTAL LEAVE"},
      {id:2, src: faShieldHeart, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "HEALTHCARE COVERAGE"},
      {id:3, src: faMoneyBills, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "COMPETITIVE COMPENSATION"},
      {id:4, src: faBriefcaseMedical, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "WORK/LIFE BALANCE"},
      {id:5, src: faBuildingFlag, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "LEARNING AND DEVELOPMENT"},
      {id:6, src: faMasksTheater, text:"Under make after own them night ssea dominion fowl lights third bring creping darkness first you're was midst", title: "CULINARY PROGRAMS"},
  ]
  const pageHeading = "we're hiring"
  return (
    <div className='careerHero'>
        <Navbar />
        <PageName pageHeading={pageHeading} />
        <section className="missionContainer">
          <div className="missionHead"><h2>IT’S WORK THAT MATTERS.</h2></div>
          <div className="missionDescription">Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidata-bst non proident.</div>
          <div className="currentVacancy">
            <button>view current openings</button>
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
              </div>
              <div className="videoDescription">
                <p>{video.text}</p>
              </div>
            </div>
            </div>
          )
        })}
        
        </section>
        <section className="lifeAtHealthcareContainer">
          <div className="lifeHeading"><h1>life at healthcare</h1></div>
          <div className="lifeDetailsHero">
            {lifeAtHc.map(life => {
              return(
                <div className="lifeHero">
              <div className="lifeLogos"><FontAwesomeIcon className='lifeLogo' icon={life.src} /></div>
              <div className="lifeTitle"><h4>{life.title}</h4></div>
              <div className="lifeDescription">{life.text}</div>
            </div>
              )
            })}
          </div>
        </section>
        <section className="activitiesSlider">
        <Carousel responsive={responsive}>
          {allItems.map(allItem => {return(<div key={allItem.id} className='carouselItems'>
            <img src={allItem.src} alt="image" />
          </div>)})}
        </Carousel>
        </section>
        <section className="vacantPositionsHero">
          <div className="vacancyHead">current positions</div>
          <div className="vacantPositions">
            {vacantPositions.map(position => {
              return(
                <div className="position" key={position.id}>
                  <div className="positionDetails">
                    <div className="positionHead"><h2>{position.name}</h2></div>
                    <div className="positionText"><p>{position.location}</p></div>
                  </div>
                  <div className="positionButton"><button type='submit'>apply now</button></div>
                </div>
              )
            })}
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default Career
