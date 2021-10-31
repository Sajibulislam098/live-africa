import React from "react";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

import Offers from "../Offers/Offers";

import FirstInfo from './FirstInfo/FirstInfo';
import LastInfo from './LastInfo/LastInfo';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  // Change Title
  useEffect(() => {
    document.title = "Travel Guru | Home";
    window.scrollTo(0, 0);
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home-container">
      {loading ? (
        <div className="spinner d-flex align-items-center justify-content-center">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span className="ms-2">Loading...</span>
          </button>
        </div>
      ) : (
        <>
          <Banner></Banner>
     
          <FirstInfo></FirstInfo>
          <Offers offers={offers}></Offers>
         
          <LastInfo></LastInfo>
        </>
      )}
    </div>
  );
};

export default Home;
