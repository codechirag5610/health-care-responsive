import React from 'react'
import './PageName.css'

const PageName = ({ pageHeading }) => {
  return (
    <div className='pageNameContainer'>
        <div className="pageName">
            {/* <p className="pageRoute"></p> */}
            <h1 className="pageHeading">{pageHeading}</h1>
        </div>
    </div>
  )
}

export default PageName