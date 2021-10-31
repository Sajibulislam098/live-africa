import React from "react";
import { useState } from "react";

const TableRow = (props) => {
  const {
    _id,
    userName,
    userEmail,
    destinationName,
    price,
   
    status,
    phone
  } = props.data;
  const [nowStatus, setNowStatus] = useState(status);
  const handleDelete = () => {
    const x = window.confirm("Do you want to cancel your booking?");
    if (x) {
      fetch(`https://floating-sierra-05085.herokuapp.com/booked`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          deleteId: _id,
        }),
      })
        .then((res) => res.json())
        .then(() => props.deleteOrder(_id));
    }
  };
  const handleStatus = (status) => {
    if (status === nowStatus) return;
    const x = window.confirm("Do you want to change the status?");
    if (x) {
      fetch(`https://floating-sierra-05085.herokuapp.com/booked`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          updateId: _id,
          status: status,
        }),
      })
        .then((res) => res.json())
        .then(() => setNowStatus(status));
    }
  };
  return (
    <tr>
      <th scope="row">{_id}</th>
      <td>{userName}</td>
      <td>{userEmail}</td>
      <td>{phone}</td>
      <td>{destinationName}</td>
     
      <td>${price}</td>
      {props.edit ? (
        <td>
          <div className="dropdown">
            <button
              className={`btn dropdown-toggle ${nowStatus}`}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {nowStatus}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  onClick={() => handleStatus("PENDING")}
                  className="dropdown-item"
                >
                  PENDING
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleStatus("APPROVED")}
                  className="dropdown-item"
                >
                  APPROVED
                </button>
              </li>
            </ul>
          </div>
        </td>
      ) : (
        <td className={status}>{status}</td>
      )}
      <td>
        <button onClick={handleDelete}>
          <i className="fas fa-times-circle"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
