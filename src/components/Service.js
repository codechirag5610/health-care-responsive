import React from 'react'
import { useParams } from 'react-router-dom';
import { Navbar, Footer } from './index';
import { FaQuoteLeft } from 'react-icons/fa'
import './Service.css'

const Service = ({ allServices, allInfos }) => {

    const id = useParams();
    const service = allServices ? allServices.find((doc) => String(doc.id) === id.id) : allInfos.find((doc) => String(doc.id) === id.id)
    console.log(service)
  return (
    <div className='soloServiceHero'>
        <Navbar />
        <div className="soloServiceContainer">
            <div className="soloServiceHeadingContainer">
                <h1>{service.name}</h1>
            </div>
            <div className="soloServiceImage">
                <img src={service.src} alt="service cover" />
            </div>
            <div className="soloServiceDescription">
                <p className="soloServiceDes">{service.descr}</p>
                <p className="soloServiceDes">{service.descr2}</p>
            </div>
            <div className="soloServiceQuote">
                <FaQuoteLeft size={40} style={{paddingRight: 5, marginRight: 3}} color="white" />
                <p className="soloQuote">This is a simple styled quote. I didn't knew what to wirte so i wrote this. You can do whatever you want with this.</p>
            </div>
            <div className="soloServiceDescription">
                <p className="soloServiceDes">{service.descr3}</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Service