import React from 'react'
import "./gallery.scss"
import { galleryImg, sliderImg } from '../../assets'
import { CiHeart } from "react-icons/ci";

const Gallerycard = () => {
  return (
    <div className='card-container'>
      
      <img src={galleryImg} alt="gallery" />
    </div>
  )
}

export default Gallerycard