import React from "react";
import Offer from "../Offer/Offer";
import "./Offers.css";

const Offers = (props) => {
  const { offers } = props;
  return (
    <div className="serviceBg">
      <div className="container " id="offers">
      <h2 className=" mt-5 d-flex justify-content-center mb-5 nameColor">
        SOUTHERN AFRICA
      </h2>
      <h2 className="mb-5">
        If you are Looking for most <span className="nameColor">Beautiful</span>{" "}
        place on Africa here are some..... Please Book here{" "}
      </h2>

      <div className="container">
        <div className="row g-4 px-2">
          {offers.map((offer) => (
            <Offer key={offer._id} data={offer}></Offer>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Offers;
