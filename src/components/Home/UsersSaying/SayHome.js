import React from 'react'
import Review from './review/Review'
import "../UsersSaying/sayhome.css"
import Group3 from "../../Images/Group3.png";
import Group11 from "../../Images/Group11.png";

function SayHome() {
  return (
    <div className="say-main">
      <div className="say-col-text">
        <h3>What Users are Saying About Wallet</h3>
      </div>
      <div className="say-col">
        <div className="say-col1">
          <div className="say-col1-1">
            <h3>What Users are Saying About Wallet</h3>
          </div>
          <div className="say-col1-2">
            <div className="im1">
              <h3>5.0</h3>
              <img src={Group3} alt="" />
            </div>
            <div className="im1">
              <h3>5.0</h3>
              <img src={Group11} alt="" />
            </div>
          </div>
        </div>
        <div className="say-col2">
          <Review />
        </div>
      </div>
    </div>
  );
}

export default SayHome