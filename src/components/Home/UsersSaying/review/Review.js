import React from "react";
import "../review/review.css";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import Vector from "../../../Images/Vector.png";
import Group from "../../../Images/Group _12.png";

function Review() {
  return (
    <div className="review">
      <div className="test-details">
        <p>
          This is innovative, I have not come across any platform that
          integrates shopping and issuing virtual card on a mobile app. I am
          very impressed with the features and functionalities if I can give
          more than 5 stars I will
        </p>
        <div className="vect">
          <img src={Vector} alt="" className="im" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
          <img src={Vector} alt="" />
        </div>
        <div className="goog">
          <img src={Group} alt="" />
        </div>
      </div>
      <div className="button">
        
          <FaArrowAltCircleLeft className="arrow" />
       
 
          <FaArrowAltCircleRight className="arrow arrow1" />
        
      </div>
    </div>
  );
}

export default Review;
