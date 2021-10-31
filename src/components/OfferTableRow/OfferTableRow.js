import React from "react";

const OfferTableRow = (props) => {
  const { _id, name, price, days, nights } = props.data;
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{name}</td>
     
      <td>${price}</td>
      <td>
        <button onClick={()=> props.deleteOffer(_id)}>
          <i className="fas fa-times-circle"></i>
        </button>
      </td>
    </tr>
  );
};

export default OfferTableRow;
