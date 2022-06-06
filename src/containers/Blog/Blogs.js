import React from 'react'
import { Navbar, PageName, Footer } from '../../components/index.js'
import './Blogs.css'
import {allBlogs} from './allBlogs.js'
import Regular from './Regular.js'
import Irregular from './Irregular.js'

var cols = []

for(var i=0; i<allBlogs.length; i+=3){
  var sliced = allBlogs.slice(i, i+3)
  cols.push(sliced)
}

const Blogs = () => {

  const pageHeading = "Our Blogs"
  return (
    <div className='blogsHero'>
      <Navbar />
      <PageName pageHeading={pageHeading} />
      <section className="allBlogsHero">
        {cols.map((col, index) => {return (
          <>
          <div key={index} className="column">
            {col.map((blog) => (
              <div key={blog.id} className="mainBlog">
                {blog.type === "regular" ? <Regular blog={blog} /> : <Irregular blog={blog} />}
              </div>
            ))}
          </div>
          </>
          )})}
      </section>
      <Footer />
    </div>
  )
}

export default Blogs
