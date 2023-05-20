import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateToys = () => {
    const { user } = useContext(AuthContext);
  const updatedToy = useLoaderData();
  const {
    _id,
    sellerName,
    toyName,
    subCategory,
    price,
    rating,
    quantity,
    details,
    toyImage,
  } = updatedToy;
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.sellername.value;
    const email = form.email.value;
    const toyName = form.toyname.value;
    const toyImage = form.toyimage.value;
    const subCategory = form.subcatagory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const submittedToys = {
      sellerName: name,
      email: email,
      toyName: toyName,
      toyImage: toyImage,
      subCategory: subCategory,
      price: price,
      rating: rating,
      quantity: quantity,
      details: details,
    };
    console.log(submittedToys);

    fetch(`http://localhost:5000/addedToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submittedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.modifiedCount>0){
          Swal.fire({
            title: 'Success',
            text: 'Toy updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };
  return (
    <div className="my-14">
      <form onSubmit={handleUpdateToy} >
        <div className="flex lg items-center lg:w-6/12  mx-auto bg-white">
          <div className="container">
            <div className="w-full p-8 my-4  rounded-2xl shadow-2xl">
              <div className="flex justify-center">
                <h1 className="font-bold uppercase lg:text-5xl text-2xl text-center">
                  UPDATE TOY
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="text"
                  placeholder="Seller Name*"
                  name="sellername"
                  defaultValue={sellerName}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="email"
                  placeholder="Email*"
                  defaultValue={user.email}
                  name="email"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="text"
                  placeholder="Toy Name*"
                  name="toyname"
                  defaultValue={toyName}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="text"
                  placeholder="Toy Image URL*"
                  name="toyimage"
                  defaultValue={toyImage}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="text"
                  placeholder="Sub-Category*"
                  name="subcatagory"
                  defaultValue={subCategory}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="number"
                  placeholder="Price*"
                  name="price"
                  defaultValue={price}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="text"
                  pattern="[0-9]+([.,][0-9]+)?"
                  placeholder="Rating*"
                  name="rating"
                  defaultValue={rating}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                  type="number"
                  placeholder="Available Quantity*"
                  name="quantity"
                  defaultValue={quantity}
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Detail Description*"
                  name="details"
                  defaultValue={details}
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline font-semibold text-lg"
                ></textarea>
              </div>
              <div className="my-2">
                <button
                  className="add uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full 
                  hover:scale-110 transition duration-500"
                >
                  UPDATE TOY
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;