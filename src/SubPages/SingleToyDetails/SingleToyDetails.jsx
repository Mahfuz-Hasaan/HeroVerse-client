import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const SingleToyDetails = () => {
  useTitle("ToyDetails")
  const singletoy = useLoaderData();
  const {
    sellerName,
    toyName,
    subCategory,
    price,
    rating,
    quantity,
    details,
    toyImage,
  } = singletoy;

  return (
    <div class="py-20">
      <div class="w-fit mx-auto bg-white  py-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div class="relative">
          <img
            class="w-80 border-2 h-80 mx-auto rounded-xl"
            src={toyImage}
            alt="Colors"
          />
          <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {subCategory}
          </p>
        </div>
        <div className="px-8">
          <h1 class="mt-4 text-gray-800 text-3xl font-bold cursor-pointer">
            {toyName}
          </h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <span className="text-lg font-bold">Seller :</span>
              <p className="font-semibold text-sm">{sellerName}</p>
            </div>
            <div className="flex justify-between">
              <div class="flex space-x-1 items-center">
                <span className="text-lg font-bold">Quantity :</span>
                <p className="font-semibold text-sm">{quantity}</p>
              </div>
              <div class="flex space-x-1 items-center">
                <span className="text-lg font-bold">Price :</span>
                <p className="text-sm font-semibold">{price}$</p>
              </div>
            </div>
            <div className="font-bold text-sm pt-2">{rating}</div>
          </div>
          <div>
          <span className="font-bold text-lg">Product Details : </span>
          <span className="font-semibold text-sm">{details}</span>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleToyDetails;
