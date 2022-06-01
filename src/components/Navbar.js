import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navItems = [
        {id: 1, name: "Services", ref:"/services"},
        {id: 2, name: "Our Doctors",  ref:"/experts"},
        {id: 3, name: "Find A Doctor",  ref:"/finddoctor"},
        {id: 4, name: "About", ref:"/about"},
        {id: 5, name: "Locations", ref:"/locations"},
        {id: 6, name: "Blog", ref:"/blogs"},
        {id: 7, name: "Career", ref:"/career"},
    ]
    const infoItems = [
        {id: 1, name: "Online Bill Pay", ref:"/payment"},
        {id: 2, name: "Patient Info", ref:"/patient"},
        {id: 3, name: "Contact", ref:"/contact"},
    ]
  return (
        <header className='headerContainer'>
            <Link to="/"><img className='logo' src={logo} alt="" /></Link>
            <div className="navContainer">
                <nav className='navItems'>
                    {navItems.map(navItem => {
                        return(
                            <Link className='navItem' key={navItem.id} to={navItem.ref}>{navItem.name}</Link>
                        )
                    })}
                </nav>
            
                <div className="infoContainer">
                    <div className="patientInfo">
                        <nav>
                            {infoItems.map(infoItem => {
                                return(
                                    <Link className='infoItem' key={infoItem.id} to={infoItem.ref}>{infoItem.name}</Link>
                                )
                            })}
                        </nav>
                    </div>
                    <div className="contactUs">
                        <a className="contactUs" href="#call">Call Us on: (561) 223-1234</a>
                    </div>
                </div>
                <div className="navbarSmallScreen">
                    <GiHamburgerMenu  color='white' fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && 
                    (<>
                    <div className="navbarSmallScreenOverlay">
                        <IoIosClose fontSize={27} className="overlayClose" onClick={() => setToggleMenu(false)} />
                        <nav className='navItemsSmallScreen'>
                    {navItems.map(navItem => {
                        return(
                            <Link className='navItemSmallScreen' key={navItem.id} to={navItem.ref}>{navItem.name}</Link>
                        )
                        })}
                    </nav>
                
                    <div className="infoContainerSmallScreen">
                        <div className="patientInfoSmallScreen">
                            <nav>
                                {infoItems.map(infoItem => {
                                    return(
                                        <Link className='infoItemSmallScreen' key={infoItem.id} to={infoItem.ref}>{infoItem.name}</Link>
                                    )
                                })}
                            </nav>
                        </div>
                        <div className="contactUsSmallScreen">
                            <a className="contactUsSmallScreen" href="#call">Call Us on: (561) 223-1234</a>
                        </div>
                    </div>
                    </div>
                    
                </>)}
                </div>
            </div>
        </header>
  )
}

export default Navbar