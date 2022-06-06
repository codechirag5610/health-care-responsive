import React from 'react'
import './Irregular.css'

const Irregular = ({ blog }) => {
  return (
    <div className='irregularBlogHero'>
      <div className="irregularBlogContainer">
          <div className="irregularBlogIcon">{blog.src}</div>
          <div className="irregularBlogText">{blog.text}</div>
          <div className="irregularBlogSource">{blog.source}</div>
      </div>
    </div>
  )
}

export default Irregular