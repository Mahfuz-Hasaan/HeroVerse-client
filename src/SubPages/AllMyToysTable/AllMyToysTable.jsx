import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const AllMyToysTable = ({ alltoy,handleDelete }) => {
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
      <tr>
        <th>
          <img
            src={toyImage}
            className="w-[70px] h-[70px] mx-auto rounded-lg"
            alt=""
          />
        </th>
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/updatetoys/${_id}`}>
          <button className="button rounded-lg text-black font-bold font-serif hover:scale-110 transition duration-500 p-2">
            Update
          </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="button rounded-full text-black font-bold font-serif hover:scale-110 transition duration-500 p-3"
          >
            <FaTimes></FaTimes>
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllMyToysTable;
