import React from 'react'
import "./gallery.css"
import { data } from './dummy'
const Gallery = () => {
  return (
    <div className='gallery_wrapper'>
    <div className='gallery'>
    {
      data.map((item)=>(

        <div className='gallery_container' key={item.id}>
      <img src={item.url} alt="" className='gallery_image' />
      <h1 className='absolute_text'>
        Couple goals
      </h1>
    </div>
      ))
    }
    </div>
    </div>
  )
}

export default Gallery
