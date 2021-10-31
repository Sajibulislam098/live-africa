import React from "react";

const LastInfo = () => {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
          className="w-100"
            src="https://www.hotelscombined.com/news/wp-content/uploads/sites/314/2020/01/Nkuringo-Bwindi-Gorilla-Lodge-3.jpg"
            alt=""
          />
          {/* <img className="w-100" src="https://www.hotelscombined.com/news/wp-content/uploads/sites/314/2020/01/Sarova-Mara-Game-Camp-3.jpg" alt="" /> */}
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center mt-2">
          <h2>Fill the form for Booking a Hotel Near Your trip</h2>
          <form action="">
            <input type="text" placeholder="name" className="mt-2 mb-2"/>
            <br />
            <input type="number" placeholder="Your Contact number" className="mt-2 mb-2"/>
            <br />
            <input type="text" placeholder="Address" className="mt-2 mb-2" />
            <br />
            <input type="email" name="" id="" placeholder="Email"className="mt-2 mb-2" />
            <br />
           <button className="btn btn-success m-2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LastInfo;
