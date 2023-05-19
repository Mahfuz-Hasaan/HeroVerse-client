import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import "./Banner.css";
import cover_1 from "../../../../assets/cover/batman.jpg";
import cover_2 from "../../../../assets/cover/captain-america.jpg";
import cover_3 from "../../../../assets/cover/dc.jpg";
import cover_4 from "../../../../assets/cover/dc_2.jpg";
import cover_5 from "../../../../assets/cover/ironman.jpg";
import cover_6 from "../../../../assets/cover/ironmanr.jpg";
import cover_7 from "../../../../assets/cover/marvel.jpg";
import cover_8 from "../../../../assets/cover/robot.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="flex w-10/12 mx-auto my-10 items-center">
      <div className="flex-1 rounded-lg pr-10 pl-2 space-y-5">
        <p className="text-5xl font-bold text-indigo-500 font-serif">WELCOME HERO VERSE</p>
        <p className="w-10/12 font-serif">
          the premier online shop for ADC and Marvel toy enthusiasts. We are
          dedicated to bringing you the ultimate collection of action figures,
          merchandise, and collectibles, allowing you to embark on epic
          adventures alongside your favorite .the premier online shop for ADC
          and Marvel toy enthusiasts. We are dedicated to bringing you the
          ultimate collection of action figures, merchandise, and collectibles,
          allowing you to embark on epic adventures alongside your favorite
          heroes
        </p>
        <div className="blur" style={{ backgroundColor: "rgb(238 210 255)" }}>
        </div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-10%",
          }}
        ></div>
        <div className="right-blur" style={{ backgroundColor: "rgb(238 210 255)" }}>
        </div>
        <div
          className="right-blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            right: "-10%",
          }}
        ></div>
        <div>
        <Link to="/about">
          <button className="login-btn px-4 py-2 rounded-lg text-black font-bold font-serif hover:scale-110 transition duration-500">
            About Us
          </button>
        </Link>
      </div>
      </div>
      
      <div></div>
      <div className="flex-1">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={3000}
          cssModule={AutoplaySlider}
        >
          <div data-src={cover_1} />
          <div data-src={cover_2} />
          <div data-src={cover_3} />
          <div data-src={cover_4} />
          <div data-src={cover_5} />
          <div data-src={cover_6} />
          <div data-src={cover_7} />
          <div data-src={cover_8} />
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Banner;
