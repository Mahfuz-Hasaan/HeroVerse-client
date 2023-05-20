import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleToyTable from "../../SubPages/SingleToyTable/SingleToyTable";

const AllToys = () => {
  const allToys = useLoaderData();
  const limitedToys = allToys.slice(0, 20);
  return (
    <div className="my-20">
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
            {
                limitedToys.map(alltoy => <SingleToyTable
                key={alltoy._id}
                alltoy={alltoy}
                ></SingleToyTable>)
            }
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
