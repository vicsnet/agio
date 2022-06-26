import React from 'react'
import "./sub.css"
import Frame82 from "../Images/Frame82.png";
import Frame71 from "../Images/Frame71.png";

function Subfooter() {
  return (
      <div className="main-main-subfooter">
      
      <div className="main-subFooter">
        <div className="sub">
          
          <div className="text">
            <h3>What are you waiting for?</h3>
          </div>
          <div className="more-text">
            <h3>Download the Wallet app & get started now!</h3>
          </div>
          <div className="store">
            <img src={Frame71} alt="" />
            <img src={Frame82} alt="" className="im1" />
          </div>
          
        </div>
      </div>
      </div>
    );
}

export default Subfooter