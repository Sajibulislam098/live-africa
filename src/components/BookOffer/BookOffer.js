import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import "./BookOffer.css";

const BookOffer = () => {
  const id = useParams().id;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Travel Guru | Book Offer";
    window.scrollTo(0, 0);
    fetch(`http://localhost:5000/offers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  const added = () => {
    document.getElementById("modal-btn").click();
    setTimeout(() => {
      document.getElementById("modal-close").click();
    }, 2000);
  };
  return (
    <div className="container book-container">
      <Modal text={"Booked Successfully"}></Modal>
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
          <div className="tour-details">
            <h1 className="name">{data.name}</h1>
            <hr />
            <div className="d-flex justify-content-between">
              
              <p className="price">${data.price}</p>
            </div>
          </div>
          <div className="row gy-5">
            <div className="col-md-7">
              <img src={data.img} className="w-100 book-img" alt="" />
              <div className="details-div mt-3">
                <p className="details">Details</p>
                <hr />
                <p className="book-details">{data.description}</p>
              </div>
            </div>
            <div className="col-md-5 form-container">
              <Form data={data} added={added}></Form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookOffer;
