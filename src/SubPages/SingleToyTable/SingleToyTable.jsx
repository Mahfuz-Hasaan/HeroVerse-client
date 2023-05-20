import React from "react";
import { Link } from "react-router-dom";
import './SingleToyTable.css'
const SingleToyTable = ({alltoy}) => {
  const {_id,sellerName,toyName,subCategory,quantity,details,price} = alltoy
  return (
    <>
      <tr >
        <th></th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
            <Link to={`/alltoys/${_id}`}>
                <button className="button p-2 rounded-lg">View Details</button>
            </Link>
        </td>
      </tr>
    </>
  );
};

export default SingleToyTable;
