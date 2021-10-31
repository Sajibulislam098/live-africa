import React, { useEffect } from "react";
import { useState } from "react";
import OfferTableRow from "../OfferTableRow/OfferTableRow";

const ManageAllOffers = () => {
  const [allOffers, setAllOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "Admin Panel | Manage All Offers";
    window.scrollTo(0, 0);
    fetch("https://floating-sierra-05085.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => {
        setAllOffers(data);
        setLoading(false);
      });
  }, []);
  const deleteOffer = (id) => {
    const x = window.confirm("Do you want to delete this offer?");
    if (x) {
      fetch(`https://floating-sierra-05085.herokuapp.com/offers/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          update(id);
        });
    }
  };
  const update = (id) => {
    const newOffers = allOffers.filter((offer) => offer._id !== id);
    setAllOffers(newOffers);
  };
  return (
    <div className="my-bookings-container container">
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
          <h1 className="booking-header">Manage All Offers</h1>
          <hr />
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Offer ID</th>
                  <th scope="col">Destination Name</th>
               
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {allOffers.map((offer) => (
                  <OfferTableRow
                    key={offer._id}
                    data={offer}
                    edit={true}
                    deleteOffer={deleteOffer}
                  ></OfferTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageAllOffers;
