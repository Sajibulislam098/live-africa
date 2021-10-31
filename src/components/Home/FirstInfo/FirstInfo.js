import React from "react";
import "./FirstInfo.css";
const FirstInfo = () => {
  return (
    <div className="first-info pb-4 pt-5 ">
      <div className="container ">
        {" "}
        <h1 className=" text-center">
          EXPERIENCE THE <span className="nameColor">HIGHLIGHTS</span> OF THIS WILD AND SPECTACULAR DESTINATION.
        </h1>
       <div className="pt-5">
       <div className="row">
            <img  className="me-5 col-md-3"  src="https://www.liveafrica.com/sites/default/files/highlights/highlights-madikwe-new.jpg" alt="" />
       <p className="col-md-8"><b>Madikwe</b> - A top destination for Wild dog sightings as well as luxury accommodations such as Molori Safari Lodge.</p>
        </div>
       <div className="row mt-3">
            <img  className="me-5 col-md-3"  src="https://www.liveafrica.com/sites/default/files/highlights/highlights-madikwe-new3.jpg" alt="" />
       <p className="col-md-8"><b>Timbavati</b> -An exclusive reserve located in the northern tip of the Kruger National park where the elusive white lions are seen on occasion. These beautiful cats reappeared in the Timbavati reserve in 2006 and have been closely watched ever since.</p>
        </div>
       <div className="row mt-3">
            <img  className="me-5 col-md-3"   src="https://www.liveafrica.com/sites/default/files/highlights/highlights-madikwe-new4.jpg" alt="" />
       <p className="col-md-8"><b>Sabi Sands</b> - A smaller more exclusive reserve with all the benefits of being in the Kruger national park. The big 5 are a common sighting over a few days spent here. There are many beautifully appointed accommodation choices such as Earth Lodge.</p>
        </div>
        
        
        
       </div>
       
      </div>
    </div>
  );
};

export default FirstInfo;
