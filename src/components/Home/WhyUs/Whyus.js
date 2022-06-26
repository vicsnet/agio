import React from "react";
import "../WhyUs/why.css";
import {
  FaCheck,
  FaCcMastercard,
  FaShoppingCart,
  FaHome,
  FaLock,
} from "react-icons/fa";
import Frame8 from "../../Images/whyusimage.png";

function Whyus() {
  return (
    <div className="all">
      <h1 className="visible"> Why Us?</h1>
      <div className="main-why">
        <div className="why-col">
          <div className="why-col1">
            <h1 className="dis-show">Why Us? </h1>
            <p>
              We are geared towards making sure our users get all the most done
              on our platform. We are providing our users with:
            </p>
            <div className="check">
              <div className="check-col">
                <span>
                  <div className="facheck">
                    <FaCheck />
                  </div>
                  <div id="spancol">
                    <h3>Security </h3>
                    <h6>Safe, secure, and transparent transaction</h6>
                  </div>
                </span>
                <span>
                  <div className="facheck">
                    <FaCheck />
                  </div>
                  <div id="spancol">
                    <h3>Flexibility </h3>
                    <h6>Easy to use, Get started in minutes</h6>
                  </div>
                </span>
                <span>
                  <div className="facheck">
                    <FaCheck />
                  </div>

                  <div id="spancol">
                    <h3>Borderless Shopping </h3>
                    <h6>
                      Shop, Pay and get your packages delivered to you all
                      inside{" "}
                    </h6>
                  </div>
                </span>
                <span>
                  <div className="facheck">
                    <FaCheck />
                  </div>
                  <div id="spancol">
                    <h3 id="rel">Reliable </h3>
                    <h6>Zero restraints on your payment transactions</h6>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="why-col2">
            <img src={Frame8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
