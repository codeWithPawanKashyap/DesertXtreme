import React from "react";
import "./style.scss";

import { FaStar } from "react-icons/fa";
import { user } from "../../assets";

const Greatcard = () => {
  return (
    <div className="card">
      <div className="star">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>4.5/5</span>
      </div>
      <div className="content">
        <h1>Well Organized Trip</h1>
        <p>
        The Dubai buggy ride with "Dubai xtreme Adventures" was an exhilarating experience, 
        offering top-notch service and breathtaking desert views. Highly recommend for adventure 
        seekers looking for a thrilling and unforgettable ride!
        </p>
      </div>
      <div className="user">
        <div className="user-img">
          <img src={user} alt="client" />
        </div>
        <div className="user-name">
          <h4>Alok Mehta</h4>
          <p>Real Estate Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Greatcard;
