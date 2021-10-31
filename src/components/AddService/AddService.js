import React, { useEffect, useRef } from "react";

import "./AddService.css";

const AddService = () => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);


  const imgRef = useRef(null);
 
  // Change Title
  useEffect(() => {
    document.title = "Admin Panel | Add Offer";
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    
    };
    fetch("http://localhost:5000/offers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("This Place Is Added to My Order ");
        } else {
          alert("Not Added Yet");
        }
      });
      
  };
  
  return (
    <div className="container add-service-container">
     
      <h1 className="booking-header">Add Offer</h1>
      <hr />
      <div className="limiter book-limiter">
        <div className="container-login100 align-items-start py-0">
          <div className="wrap-login100">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit}
            >
              {/* Input Destination Name  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 p-0">Name</span>
                <input
                  required
                  ref={nameRef}
                  className="input100 book-input"
                  type="text"
                  name="name"
                  placeholder="Enter destination name"
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Price  */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 p-0">Price</span>
                <input
                  required
                  ref={priceRef}
                  className="input100 book-input"
                  type="number"
                  name="price"
                  placeholder="Enter offer price"
                />
                <span className="focus-input100 fa"></span>
              </div>
              {/* Input Image Url  */}
              <div className="wrap-input100 validate-input w-100">
                <span className="label-input100 p-0">Image url</span>
                <input
                  required
                  ref={imgRef}
                  className="input100 book-input "
                  type="text"
                  name="imageUrl"
                  placeholder="Enter image url"
                />
                {/* <span className="focus-input100 fa"></span> */}
              </div>
              
              {/* Input Description */}
              <div className="wrap-input100 validate-input">
                <span className="label-input100 p-0">Description</span>
                <textarea
                  required
                  ref={descriptionRef}
                  className="input100 book-address book-input"
                  type="text"
                  name="description"
                  placeholder="Enter place description"
                />
                <span className="focus-input100 fa"></span>
              </div>
            
             

              <div className="container-login100-form-btn mt-4">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <input
                    type="submit"
                    value="ADD OFFER"
                    className="login100-form-btn book-btn"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
