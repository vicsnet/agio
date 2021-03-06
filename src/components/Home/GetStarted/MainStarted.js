import React from "react";
import "./get.css";

function MainStarted() {
  return (
    <div className="main-start">
      <div className="start-head">
        <h2>Here's How To Get Started...</h2>
      </div>

      <div className="getstarted">
        <div className="get-text">
          <div className="span-col span-col-1">
            <span>
              <h4>1</h4>
            </span>
            <div className="text-details">
              <h3>Download the App & Create your Account</h3>
              <p>
                You can download the Wallet app on the GooglePlay store and
                AppStore and create an account.
              </p>
            </div>
          </div>
          <div className="span-col span-col-2">
            <div className="text-details">
              <h3>Complete your KYC Verification</h3>
              <p id="start-tem">
                In order to get access to all our feautures, you will be
                required to complete your KYC verification.{" "}
              </p>
            </div>
            <span>
              <h4>2</h4>
            </span>
          </div>

          <div className="span-col span-col-3">
            <span>
              <h4>3</h4>
            </span>
            <div className="text-details">
              <h3>Fund your Wallet</h3>

              <p id="start-tem">
                Fund your wallet, create a card , perform international
                transactions, pay bills, receive money, shop and perform other
                amazing transactions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainStarted;
