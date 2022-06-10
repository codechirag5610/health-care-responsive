import React from 'react'
import './FindCare.css'
import { Link, useNavigate } from 'react-router-dom';

const FindCare = () => {
  let navigate = useNavigate();
  return (
    <div className='findCareContainer'>
      <div className="findHeading">
        <h2 className="head1">find a healthcare facility</h2>
        <h1 className="head2">near you</h1>
      </div>
      <div className="locationButton">
        <button className="locButt" onClick={() => {navigate("locations", {replace: true})}}>healthcare locations</button>
      </div>
    </div>
  )
}

export default FindCare