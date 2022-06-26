import React from "react";
import Navmenu from "../../../Header/Navmenu";
import TypeAnimation from "react-type-animation";
import "../Main_body/main.css";
import Mobile from "../../../Images/Mobile-dark-3.png";
import Frame from "../../../Images/Frame2.png";
import Frame71 from "../../../Images/Frame71.png";
import Frame82 from "../../../Images/Frame82.png";
import HeroImage from "../../../Images/HeroImage.png";

function Main() {
  return (
    <div className="main-body">
      <Navmenu />
      <div className="col">
        <div className="col1">
          <div>
            <h1>Beyond</h1>
            <h2>
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Payment Gateway",
                  1000,
                  "Borderless transactions",
                  1000,
                  "Card Issuing",
                ]}
                wrapper="a"
                repeat={3}
              />
            </h2>
          </div>

          <p>
            The power of easy, transparent, and secure transactions is in the
            palms of your hand. We bring you closer to a payment system that
            puts you in control of where, when, and how you choose to transact.
          </p>
          <div className="store-show">
            <img src={Frame71} alt="" />
            <img src={Frame82} alt="" className="play" />
          </div>
        </div>

        <div className="col2">
          {/* <img src={Mobile} alt="" className="mobile" />
          <img src={Frame} alt="" className="frame" /> */}
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
