import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyTable from "../../SubPages/SingleToyTable/SingleToyTable";
import "./AllToys.css";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData();
  useTitle("AllToys")
  const limitedToys = allToys.slice(0, 20);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredToys = limitedToys.filter(
    (alltoy) =>
      alltoy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-20">
      <div>
        <div className=" m-5 w-10/12 mx-auto h-fit flex flex-col justify-center">
          <div className="relative m-5 w-full sm:max-w-2xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-3">
              <form
                role="form"
                className="relative flex z-50 bg-white rounded-full"
              >
                <input
                  type="text"
                  placeholder="enter your search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                />
              </form>
              <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
              <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
              <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
              <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <table className="table table-compact w-10/12 mx-auto">
          <thead className="text-center">
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Price(TK)</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {filteredToys.map((alltoy) => (
              <SingleToyTable key={alltoy._id} alltoy={alltoy} />
            ))}
          </tbody>
          <tfoot className="text-center">
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Available Quantity</th>
              <th>Price(TK)</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
