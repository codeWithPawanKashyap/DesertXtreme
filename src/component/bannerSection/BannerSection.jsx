import React from "react";
import { banner1, logo, tickIcon } from "../../assets";
import { IoIosStar } from "react-icons/io";
import { SiNike } from "react-icons/si";
import banner from "../../assets/banner.png";
import whatsApp from "../../assets/whtaup.png";

import "./styles.scss";
import { Link } from "react-router-dom";
const BannerSection = () => {
  const pathName = window.location.pathname;
  const pathNameSplit = pathName.split("/")[1];
  return (
    <section className="banenrSecttop">
      <div className="banner">
        <div className="manuWapper">
          <div className="whatupbox">
            <span>
              <a href="https://api.whatsapp.com/send?phone=+971567877222&amp;text=Hi,%20I%20would%20like%20to%20know%20more%20details">
                <img src={whatsApp} alt="" />
                <p>+971 567877222</p>
              </a>
            </span>
          </div>
          <nav className="navbart" id="">
            
          <ul className="navbar-nav mx-auto centermanu">
          {pathNameSplit != "tour-detail"?
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
         :"" }
   
   {pathNameSplit != "tour-detail"?
          <li className="nav-item">
            <a className="nav-link" href="#quad">
              QUAD BIKE
            </a>
          </li>
        :""}
        <li>
          <Link className="navbar-brand" to="/">
            <img src={logo} className="img-fluid" alt="" />
          </Link>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button> */}
        </li>
        {pathNameSplit != "tour-detail"?
          <li className="nav-item">
            <a className="nav-link" href="#dune">
              Dune Buggy{" "}
            </a>
          </li>
     :""}
      {pathNameSplit != "tour-detail"?
          <li className="nav-item">
            <a className="nav-link" href="#Gallery">
              Gallery
            </a>
          </li>
          :""}
      </ul>
       
            
          </nav>
        </div>
        <img src={pathNameSplit == "tour-detail" ?  banner1:banner} className="img-fluid" alt="" />
        <div className="top-banner-bottom-rectangle">
          <ul>
            <li>
              <span>
                <IoIosStar />
              </span>
              4.6 Rated
            </li>
            <li>
              <span>
                <img src={tickIcon} alt="" />
              </span>
              Luxury Travel Services
            </li>
            <li>
              <span>
                <img src={tickIcon} alt="" />
              </span>
              Local Travel Expert
            </li>
            <li>
              <span>
                <img src={tickIcon} alt="" />
              </span>
              24x7 concierge
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
