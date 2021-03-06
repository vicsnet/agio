import React from "react";
import Navmenu from '../Header/Navmenu'
import "./privacy.css";
import Footer from "../Footer/Footer";

function Privacy() {
  return (
    <div className="priv-main">
      <div className="priv-head">
        <Navmenu />
        <h3>Support</h3>
        <input type="text" placeholder="Search Questions" />
      </div>
      <div className="sub-priv">
        <h3>
          Frequently Asked Questions <span>(FAQ’S)</span>
        </h3>

        <div className="main-text">
          <div className="text-priv">
            <div className="head-priv">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="text-priv">
            <div className="head-priv">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="text-priv">
            <div className="head-priv">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="text-priv">
            <div className="head-priv">
              <span>Q</span>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="head-priv head-details">
              <span>A</span>
              <p>
                onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
