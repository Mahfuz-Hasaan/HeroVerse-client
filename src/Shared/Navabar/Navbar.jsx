import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/superhero.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="lg:px-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <div className="logo flex lg:flex-row flex-col bg-yellow-300 p-5 gap-3 rounded-full items-center cursor-pointer">
            <Link>
              <img src={logo} className="lg:w-12 w-8" alt="" />
            </Link>
            <div className="lg:text-xl text-black font-bold flex font-serif">
              <p>
                HERO<span className="lg:text-4xl text-xl">V</span>ERSE
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 font-serif">
            <li className="font-bold text-cyan-900 focus:bg-transparent">
              <Link style={{ backgroundColor: "transparent" }} to="/">
                Home
              </Link>
            </li>
            <li className="font-bold text-cyan-900">
              <Link style={{ backgroundColor: "transparent" }} to="/alltoys">
                All Toys
              </Link>
            </li>
            <li className="font-bold text-cyan-900">
              <Link style={{ backgroundColor: "transparent" }} to="/blog">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="login-btn px-4 py-2 rounded-lg text-black font-bold font-serif hover:scale-110 transition duration-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
