import React from 'react'
import './Blog.css'
import blog1 from '../Assets/blog1.jpg'
import blog2 from '../Assets/blog2.jpg'
import blog3 from '../Assets/blog3.jpg'

const Blog = () => {
  const blogs = [
    {id: 1, src: blog1, name: "from fowl moving night our wherein herb seed", date: "Sept 03, 2019"},
    {id: 1, src: blog2, name: "from fowl moving night our wherein herb seed", date: "Sept 03, 2019"},
    {id: 1, src: blog3, name: "from fowl moving night our wherein herb seed", date: "Sept 03, 2019"},
  ]
  return (
    <div className='blogContainer'>
      <div className="header">
        <div className="blogHeading">a healthcare blog</div>
        <div className="blogDescription">Together own seas said fowl third herb saw also that had saying darkness may after together.</div>
      </div>
      <div className="blogSection">
        <div className="blogs">
          {blogs.map(blog => {
            return(
              <div className="blog">
                <img src={blog.src} alt="" className="blogImage" />
                <div className="blogInfo">
                  <h2 className="blogTitle">{blog.name}</h2>
                  <p className="blogDate">{blog.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="allBlogs">
        <a type='button' className="allBlogsButton">see all healthcare blogs</a>
      </div>
    </div>
  )
}

export default Blog
