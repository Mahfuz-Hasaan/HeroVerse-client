import React from "react";
import { FaTimes} from 'react-icons/fa';
const AllMyToysTable = ({ alltoy }) => {
  const {
    _id,
    sellerName,
    toyName,
    subCategory,
    quantity,
    details,
    price,
    toyImage,
  } = alltoy;
  return (
    <>
      <tr >
        <th><img src={toyImage} className="w-[70px] mx-auto rounded-lg" alt="" /></th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button className="button rounded-lg text-black font-bold font-serif hover:scale-110 transition duration-500 p-2">Update</button>
        </td>
        <td>
          <button className="button rounded-full text-black font-bold font-serif hover:scale-110 transition duration-500 p-3"><FaTimes></FaTimes></button>
        </td>
      </tr>
    </>
  );
};

export default AllMyToysTable;
