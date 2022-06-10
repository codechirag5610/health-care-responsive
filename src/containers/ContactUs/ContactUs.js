import React from 'react'
import { Navbar, PageName, Footer } from '../../components/index.js'
import './ContactUs.css'
import { useForm } from "react-hook-form";
import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const pageHeading = "Contact Us"
  return (
    <div>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <div className="contactFormHero">
        <div className="contactForm">
          <h1 className="formHead">How Can we Help you today?</h1>
          <p className="contactFormDetails">Egestas suspendisse morbi quis pulvinar nam condimentum risus etiam blandit aptent curae rutrum feugiat.</p>
          <form className='contactUsNowForm' onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder='Your Name*' {...register("fullName", { required: true, maxLength: 10 })} />
            {errors.fullName && <p>Please check the Name</p>}
            <input type="number" placeholder='Phone*' {...register("phone", {required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/})} />
            {errors.phone && <p>Please check the Phone Number</p>}
            <input type="email" placeholder='Email*' {...register("email", {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })} />
            {errors.email && <p>Please check the Email</p>}
            <input type="text" placeholder='How May We Help You?' {...register("help", { required: true, maxLength: 100 })} />
            {errors.help && <p>Please check the query</p>}
            <button type='submit'>Submit Now</button>
          </form>
        </div>
        <div className="differentContactsHero">
          <div className="callUs">
            {/* <FontAwesomeIcon icon={FaPhoneAlt} /> */}
            <p className="callUsToday">call us today!</p>
            <a href="tel:(561)223-1234">(561) 223-1234</a>
          </div>
          <div className="emailUs">
            {/* <FontAwesomeIcon icon={FaEnvelope} /> */}
            <p className="emailUsToday">mail us today!</p>
            <a href="#">info@healthcare.com</a>
          </div>
          <div className="contactConnection">
            <p className="connectText">stay connected with us</p>
            <div className="connectedLogos">
              <Link to="#"><FaFacebookF className='connectLogo' alt="" /></Link>
              <Link to="#"><FaTwitter className='connectLogo' alt="" /></Link>
              <Link to="#"><FaYoutube className='connectLogo' alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs