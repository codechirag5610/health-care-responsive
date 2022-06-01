import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
    const navs = [
        {id:1, name: 'SERVICES', src: '/services'},
        {id:2, name: 'OUR DOCTORS', src: '/experts'},
        {id:3, name: 'FIND A DOCTOR', src: '/finddoctor'},
        {id:4, name: 'ABOUT', src: '/about'},
        {id:5, name: 'LOCATION', src: '/locations'},
        {id:6, name: 'ONLINE BILL PAY', src: '/payment'},
        {id:7, name: 'TESTIMONIALS', src: '/testimonials'},
        {id:8, name: 'BLOG', src: '/blogs'},
    ]
  return (
    <div className='footerContainer'>
        <div className="locationFooter">
            <div className="aboutCare">
                <h2 className="careLogo">healthcare</h2>
                <p className="careInfo">
                Evening over without above be won't yielding days man, there. 
                She'd man you female stars life darkness.
                </p>
            </div>
            <div className="vrLine" />
            <div className="careFind">
                <a href="#location">27th Avenue, New York, W2 3XE, US</a>
                <a href="#phone">(561) 223-1234</a>
                <a href="#email">contact@healthcare.com</a>
            </div>
            <div className="vrLine" />
            <div className="handles">
                <a href="#facebook">Facebook</a>
                <a href="#twitter">Twitter</a>
                <a href="#youtube">Youtube</a>
            </div>
        </div>
        <div className="navFooterContainer">
            <div className="navFooter">
                {navs.map(nav => {
                    return(
                        <Link key={nav.id} to={nav.src}>{nav.name}</Link>
                    )
                })}
            </div>
            <p className="rights">© ALL RIGHTS RESERVED | PRIVACY POLICY</p>
        </div>
    </div>
  )
}

export default Footer