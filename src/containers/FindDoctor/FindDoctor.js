import React from 'react'
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from '../../components/index.js'
import { useForm } from "react-hook-form";
import './FindDoctor.css'
import doctor1 from '../../Assets/doctor1.jpg';

const FindDoctor = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }
  const isVisible = true;
  const doctors = [
    {id: 1, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 2, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
    {id: 3, src: doctor1, name: "Bernice Ray", Speciality: "Chief Surgeon"},
  ]
  const handleClick = () => {
      navigate("/experts", { replace: true});
  }
  const searchBy = [
    {id: 1, head: "search by name", desc: "enter the first letters of a doctor's last name", placeholder: "Name"},
    {id: 1, head: "search by keyword", desc: "Type a keyword, specialty or condition to find the right specialist", placeholder: "Keyword"},
  ]
  return (
    <div className='findHero'>
      <Navbar />
      {searchBy.map(search => {
      return(
      <div className="findDocFormContainer">
        <div className="findDocDetails">
          <h2 className="findDocHead">{search.head}</h2>
          <p className="findDocDescription">{search.desc}</p>
        </div>
        <div className="findDocForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={search.placeholder} {...register("input", { required: true, maxLength: 10 })} />
            {errors.input && <p>Please check the {search.placeholder}</p>}
            <button className='findDocButton'>Search</button>
          </form>
        </div>
      </div>)})}
      <div className="alldocButton">
        <div style={{ display: isVisible ? "block" : "none" }} className="allDoctors">
          <button className="seeAllDoctors" onClick={handleClick} doctors={doctors} isVisible={isVisible}>see all doctors</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FindDoctor