import React from 'react'
import './FindCare.css'

const FindCare = () => {
  return (
    <div className='findCareContainer'>
      <div className="findHeading">
        <h2 className="head1">find a healthcare facility</h2>
        <h1 className="head2">near you</h1>
      </div>
      <div className="locationButton">
        <button className="locButt">healthcare locations</button>
      </div>
    </div>
  )
}

export default FindCare