import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
const LocalTIme = () => {
  let time = new Date().toLocaleTimeString();
  const [currtime, setCurrtime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className=" text-3xl lg:text-7xl flex items-center justify-center lg:gap-10 gap-5  lg:w-4/12 w-8/12 mx-auto px-6 py-4 rounded-2xl button font-semibold my-20">
     <FaClock></FaClock>
      <div className="">{currtime}</div>
    </div>
  );
};

export default LocalTIme;
