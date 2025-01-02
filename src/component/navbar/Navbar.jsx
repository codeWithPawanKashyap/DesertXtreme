import React from 'react'
import "./navbar.scss";
// import logo from "../../assets/logo_images.png"
import { FiAlignLeft } from "react-icons/fi";
import { logo,WhatsApp } from '../../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className="nav-logo">
        <Link to={"/"}>
        <img src={logo} alt="logo" className='logo'/>
        </Link>
        <a className='whts-app' href="https://api.whatsapp.com/send?phone=+971567877222&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details">
     <img src={WhatsApp} alt="logo" className='whts-icon'/>
        </a>
        {/* <FiAlignLeft /> */}

      </div>
   
    </div>
  )
}

export default Navbar
