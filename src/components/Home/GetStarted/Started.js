import React from "react";
import "../GetStarted/started.css";
import MobileDark from "../../Images/Mobile-dark.png";
import MobileDark1 from "../../Images/Mobile-dark1.png";
import MobileDark2 from "../../Images/Mobile-dark2.png";

function Started() {
  return (
    <div className="main-start">
      <h2>Here's How To Get Started...</h2>
      <div className="curved-line"></div>
      <div className="coll">
        <div className="col1">
          <div className="col1-1">
            <img src={MobileDark} alt="" />
          </div>
          <div className="col1-2">
            <div className="text">
              <span><p>1</p></span>
              <h3>Download the App & Create your Account</h3>
            </div>
            <p>
              You can download the Wallet app on the GooglePlay store and
              AppStore and create an account.
            </p>
          </div>
        </div>

        <div className="col2">
          <div className="col1-2">
            <div className="text">
              <h3>Complete your KYC Verification</h3>
              <span>2</span>
            </div>
            <p>
              In order to get access to all our feautures, you will be required
              to complete your KYC verification.
            </p>
          </div>
          <div className="col1-1">
            <img src={MobileDark1} alt="" />
          </div>
        </div>
        <div className="col3">
          <div className="col1-1">
            <img src={MobileDark2} alt="" />
          </div>
          <div className="col1-2">
            <div className="text">
              <span>3</span>
              <h3>Fund your Wallet</h3>
            </div>
            <p>
              Fund your wallet, create a card , perform international
              transactions, pay bills, receive money, shop and perform other
              amazing transactions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Started;
