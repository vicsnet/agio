import React from "react";
import "../services/service.css";
import Frame4572 from "../../Images/Frame4572.png";
import Frame4573 from "../../Images/Frame4573.png";
import Group68 from "../../Images/Group68.png";

function Services() {
  return (
    <div className="services">
      <header className="head">Our Services</header>

      <div className="service-col">
        <div className="main-col">
          <div className="service-col1">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="im">
              <img src={Frame4572} alt="" />
            </div>

            <div className="circle3"></div>
          </div>

          <div className="service-col2">
            <div className="details">
              <h3>Unparalleled International Shopping Experience</h3>
              <p>
                Understanding the limits placed on your international shopping
                experience, We decided to go a step further, bringing your
                favorite international vendors closer to you. Go through our
                powerful AI-assisted shopping features on our app, You are just
                one decision away from a seamless experience.
              </p>
            </div>
          </div>
        </div>

        <div className="main-col">
          <div className="service-col2">
            <div className=" details2">
              <h3>Take charge with our virtual card</h3>
              <p>
                Pay utility bills directly from your wallet, Recharge Airtime,
                Pay your DStv subscription packages, Pay your IKEDC bill
                directly and so much more easily, all you have to do is locate
                your biller and make your payment. Also, we encourage you with
                rewards for consistently using our platform for bill payment.
              </p>
            </div>
          </div>
          <div className="service-col1">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="im im2">
              <img src={Frame4573} alt="" />
            </div>
            <div className="circle6"></div>
          </div>
        </div>

        <div className="main-col">
          <div className="service-col1">
            <div className="im im3">
              <img src={Group68} alt="" />
            </div>
          </div>
          <div className="service-col2">
            <div className="details2">
              <h3>Relax let us handle your logistics</h3>
              <p>
                With us shopping does not end there, We take care of your
                package(s) and we make sure it gets to your doorstep. We have
                envisioned your shopping experience and we aim to remove the
                obstacles that is “delivery” giving you a better, seamless,
                hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
