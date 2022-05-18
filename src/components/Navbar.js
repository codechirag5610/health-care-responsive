import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navItems = [
        {id: 1, name: "Services", ref:"#services"},
        {id: 2, name: "Our Doctors",  ref:"#doctors"},
        {id: 3, name: "Find A Doctor",  ref:"#finddoc"},
        {id: 4, name: "About", ref:"#about"},
        {id: 5, name: "Locations", ref:"#location"},
        {id: 6, name: "Blog", ref:"#blog"},
        {id: 7, name: "Career", ref:"#career"},
    ]
    const infoItems = [
        {id: 1, name: "Online Bill Pay", ref:"#payment"},
        {id: 2, name: "Patient Info", ref:"#patient"},
        {id: 3, name: "Contact", ref:"#contact"},
    ]
  return (
        <header className='headerContainer'>
            <img className='logo' src={logo} alt="" />
            <div className="navContainer">
                <nav className='navItems'>
                    {navItems.map(navItem => {
                        return(
                            <a className='navItem' key={navItem.id} href={navItem.ref}>{navItem.name}</a>
                        )
                    })}
                </nav>
            
                <div className="infoContainer">
                    <div className="patientInfo">
                        <nav>
                            {infoItems.map(infoItem => {
                                return(
                                    <a className='infoItem' key={infoItem.id} href={infoItem.ref}>{infoItem.name}</a>
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
                    {toggleMenu && (<><div className="navbarSmallScreenOverlay">
                        <IoIosClose fontSize={27} className="overlayClose" onClick={() => setToggleMenu(false)} />
                    </div>
                    <nav className='navItemsSmallScreen'>
                        {navItems.map(navItem => {
                            return(
                                
                                <a className='navItemSmallScreen' key={navItem.id} href={navItem.ref}>{navItem.name}</a>
                                
                            )
                        })}
                    </nav></>)}
                </div>
            </div>
        </header>
  )
}

export default Navbar