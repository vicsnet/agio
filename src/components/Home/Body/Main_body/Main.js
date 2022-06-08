import React from "react";
import TypeAnimation from "react-type-animation";
import "../Main_body/main.css";
import Mobile from "../../../Images/Mobile-dark-3.png";
import Frame from "../../../Images/Frame2.png";
function Main() {
  return (
    <div className="main-body">
      <div className="col">
        <div className="col1">
          <h1>Beyond</h1>
          <h2>
            <TypeAnimation
              cursor={true}
              sequence={[
                "Payment Gateway",
                2000,
                "Borderless transactions",
                2000,
                "Card Issuing",
              ]}
              wrapper="a"
              repeat={3}
            />
          </h2>
          <p>
            The power of easy, transparent, and secure transactions is in the
            palms of your hand. We bring you closer to a payment system that
            puts you in control of where, when, and how you choose to transact.
          </p>
        </div>

        <div className="col2">
          <img src={Mobile} alt="" className="mobile" />
          <img src={Frame} alt="" className="frame" />
        </div>
      </div>
    </div>
  );
}

export default Main;
