import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { logo } from '../../assets';

import "./styles.scss"
import { MdCopyright } from 'react-icons/md';
const FooterSection = () => {
  return (
    <section className='footer-sec'>
    <div className="footer2">
      <div className="logo">
        <a href="/">

        <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className='footer-menu'>
        <li>About</li>
        <li>contact us</li>
        <li>privacy policy</li>
        <li>terms & conditions</li>
      </ul>
        <ul className='footer-icon'>
          <li><FaYoutube />
          </li>
          <li><PiInstagramLogoLight />
          </li>
          {/* <li><FaLinkedinIn />
          </li> */}
          <li><FaFacebookF />
          </li>
          <li><FaWhatsapp />
          </li>
        </ul>
    <div className="copywrite">
      <p><MdCopyright />
      2024 DESERT XTREME ADVENTURES</p>
    </div>
    </div>
    </section>
  )
}

export default FooterSection