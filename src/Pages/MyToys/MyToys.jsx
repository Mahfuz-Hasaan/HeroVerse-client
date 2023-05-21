import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AllMyToysTable from "../../SubPages/AllMyToysTable/AllMyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
  useTitle("Mytoys")
  const [usertoy, setUsertoy] = useState([]);
  const { user } = useContext(AuthContext);
  const url = `https://toy-marketplace-server-side-mahfuzhasan584-gmailcom.vercel.app/addedToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsertoy(data));
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-side-mahfuzhasan584-gmailcom.vercel.app/addedToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              // Update the state after successful deletion
              setUsertoy((prevUsertoy) =>
                prevUsertoy.filter((singleUserToy) => singleUserToy._id !== id)
              );
            }
          });
      }
    });
  };

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
                  handleDelete={handleDelete}
                  
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
