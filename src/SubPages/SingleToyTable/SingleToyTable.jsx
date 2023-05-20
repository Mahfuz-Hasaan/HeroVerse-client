import React from "react";

const SingleToyTable = ({alltoy}) => {
  const {_id,sellerName,toyName,subCategory,quantity,details,price} = alltoy
  return (
    <>
      <tr>
        <th>1</th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td><button>View Details</button></td>
      </tr>
    </>
  );
};

export default SingleToyTable;
