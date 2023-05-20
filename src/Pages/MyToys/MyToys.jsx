import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AllMyToysTable from "../../SubPages/AllMyToysTable/AllMyToysTable";


const MyToys = () => {
  const [usertoy, setUsertoy] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/addedToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsertoy(data));
  }, []);
  return (
    <div>
      <div className="my-20">
        <div className="">
          <table className="table table-compact w-10/12 mx-auto">
            <thead className="text-center">
              <tr>
                <th>Product Image</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Available Quantity</th>
                <th>Price(TK)</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {usertoy.map((alltoy) => (
                <AllMyToysTable
                  key={alltoy._id}
                  alltoy={alltoy}
                ></AllMyToysTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
