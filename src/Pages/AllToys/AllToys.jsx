import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyTable from "../../SubPages/SingleToyTable/SingleToyTable";

const AllToys = () => {
  const allToys = useLoaderData();
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
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
          <tbody>
            {
                allToys.map(alltoy => <SingleToyTable
                key={alltoy._id}
                alltoy={alltoy}
                ></SingleToyTable>)
            }
          </tbody>
          <tfoot>
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
