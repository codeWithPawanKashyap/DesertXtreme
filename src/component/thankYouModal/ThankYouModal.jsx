import React from 'react'
import "./styles.scss"
const ThankYouModal = () => {
  return (

        <div className="thanks">
          <h2>Thankyou</h2>
          <div className="card-thank">
            <p>We appreciate your interest in our services. One of our representatives
              will get back to you shortly with the information you requested. If
              you have any urgent questions, please feel free to contact us directly.</p>
            <hr style={{ width: "40%", marginBottom: "5px", marginTop: "10px" }} />
            <p className="phone-number">+971 567877222</p>
          </div>
        </div>

   
  )
}

export default ThankYouModal