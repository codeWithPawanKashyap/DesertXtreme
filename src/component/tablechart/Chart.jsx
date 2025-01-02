import React from 'react';
import './style.scss'

const Chart = ({data}) => {
  return (
    <div className="col-xs-12 col-md-5" style={{borderRadius:"5px",overflow:"hidden",padding:"5px",background:"white",    filter: "drop-shadow(0px 6px 24.5px rgba(22, 19, 22, 0.09))"}}>
      <div className="maintainancecpm">
        <div className="safari-section">
          <div className="safari-header">{data?.name}</div>
         
          <div className="safari-row">
            <div className="safari-label"><strong>Tour Service :</strong></div>
            <div className="safari-value">{data?.name} - *Inclusive of VAT</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Pick Time / Drop Time</strong></div>
            <div className="safari-value">05:00 PM / 06:00 PM</div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Tour Duration :</strong></div>
            <div className="safari-value">30 MINUTES / 1 HOUR</div>
          </div>
          {/* <div className="safari-row">
            <div className="safari-label"><strong>Drop off Time :</strong></div>
            <div className="safari-value">06:00 PM</div>
          </div> */}
          <div className="safari-row">
            <div className="safari-label"><strong>Price 30 MINUTES :</strong></div>
            <div className="safari-value"><strong>{data?.minPrice} AED /-</strong></div>
          </div>
          <div className="safari-row">
            <div className="safari-label"><strong>Price 1 HOUR:</strong></div>
            <div className="safari-value"><strong>{data?.maxPrice} AED /-</strong></div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Chart;
