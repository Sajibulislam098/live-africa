import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from"../../../../Images/logo.png"
import {
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container ">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
               <img src="https://www.liveafrica.com/sites/all/themes/snowman/logo.png" className="w-100" alt="" />
                
                <p className="mt-4 ">
                  <small>

                  </small>
                </p>


              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                
                
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5  className="text-light">Office: 09678008487 </h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p className="text-light">
                      Holding 190, Road 5, Block J, Baridhara,
                      <br /> Maddha Nayanagar, Vatara, Dhaka-1212
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <h6 className="mt-5">
          <small className=" text-light d-flex justify-content-center align-items-center">LIVE AFRICA © . All rights reserved.</small>
        </h6>
      </div>
    </div>
  );
};

export default Footer;
