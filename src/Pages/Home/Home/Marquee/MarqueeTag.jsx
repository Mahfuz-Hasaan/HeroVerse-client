import React from "react";
import Marquee from "react-fast-marquee";
const MarqueeTag = () => {
  return (
    <div className="w-10/12 mx-auto mt-10 mb-32">
      <p className="text-3xl font-bold text-center my-10">HOTSELL</p>
      <Marquee pauseOnHover="boolean cursor-pointer" className="cursor-pointer bg-teal-50 py-10">
        <div className="max-w-sm w-8/12 rounded overflow-hidden shadow-lg">
          <img
            className="w-10/12 h-10/12 mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/products/AAAK2AABY157-5_5000x.jpg?v=1679381149"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="font-bold text-3xl mb-2">Batman</div>
              <p className="font-bold">Seller: Rohit</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              200TK
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              DC
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              20% off
            </span>
          </div>
        </div>
        <div className="max-w-sm w-8/12 rounded overflow-hidden shadow-lg">
          <img
            className="w-10/12 h-10/12 mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/products/AAAK347AABY156-4_5000x.jpg?v=1679380741"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="font-bold text-3xl mb-2">Joker</div>
              <p className="font-bold">Seller: Papon</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              220TK
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              DC
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              10% off
            </span>
          </div>
        </div>
        <div className="max-w-sm w-8/12 rounded overflow-hidden shadow-lg">
          <img
            className="w-10/12 h-10/12 mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/products/AAAK0081AABY0100-1_5000x.jpg?v=1634530854"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="font-bold text-3xl mb-2">Catgirl</div>
              <p className="font-bold">Seller: Chowa</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              150TK
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              DC
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              10% off
            </span>
          </div>
        </div>
        <div className="max-w-sm w-8/12 rounded overflow-hidden shadow-lg">
          <img
            className="w-10/12 h-10/12 mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/products/AAII49AABY98-1_5000x.webp?v=1658735174"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="font-bold text-3xl mb-2">Hawkman</div>
              <p className="font-bold">Seller: Razib</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              190TK
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              DC
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              10% off
            </span>
          </div>
        </div>
        <div className="max-w-sm w-8/12 rounded overflow-hidden shadow-lg">
          <img
            className="w-10/12 h-10/12 mx-auto"
            src="https://www.superherotoystore.com/cdn/shop/products/AquamanDCSixthScaleMaquettebyTweeterhead-1_5000x.jpg?v=1663404591"
            alt="Card"
          />
          <div className="px-6 py-4">
            <div className="animate-pulse">
              <div className="font-bold text-3xl mb-2">Aquaman</div>
              <p className="font-bold">Seller: Razib</p>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              220TK
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              DC
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              20% off
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeTag;
