import React from 'react'
import './Regular.css'

const Regular = ({ blog }) => {
  return (
    <div className='singleBlogHero'>
      {blog.src && <div className="singleImageContainer">
          <img src={blog.src} alt="" />
      </div>}
      <div className="singleBlogContainer">
          <div className="blogDate">{blog.date}</div>
          <div className="blogTitle">{blog.title}</div>
          <div className="blogText">{blog.text}</div>
      </div>
    </div>
  )
}

export default Regular
