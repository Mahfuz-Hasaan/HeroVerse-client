import React, { useEffect, useState } from "react";
import "./ReactTabs.css";
import { Link } from "react-router-dom";

const ReactTabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("DCU");
  const [displayedCards, setDisplayedCards] = useState(3);

  useEffect(() => {
    fetch("http://localhost:5000/addedToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredToys = toys.filter((toy) => toy.subCategory === activeTab);
  const visibleToys = filteredToys.slice(0, displayedCards);

  const handleSeeMore = () => {
    setDisplayedCards(filteredToys.length);
  };

  return (
    <div className="react-tabs">
      <div className="tab-buttons flex justify-center mb-4 border">
        <button
          className={`tab-button ${
            activeTab === "DCU" ? "active" : ""
          } mr-2 border-2 rounded-lg`}
          onClick={() => handleTabClick("DCU")}
        >
          DCU
        </button>
        <button
          className={`tab-button ${
            activeTab === "MCU" ? "active" : ""
          } mr-2 border-r`}
          onClick={() => handleTabClick("MCU")}
        >
          MCU
        </button>
        <button
          className={`tab-button ${
            activeTab === "ROBO" ? "active" : ""
          } border-r`}
          onClick={() => handleTabClick("ROBO")}
        >
          ROBO
        </button>
      </div>
      <div className="tab-content grid lg:grid-cols-3 grid-cols-1 gap-10 my-10">
        {visibleToys.map((toy) => (
          <div className="border-2 p-5 rounded-lg" key={toy._id}>
            <img
              className="w-[200px] h-[250px] rounded-lg drop-shadow- mx-auto"
              src={toy.toyImage}
              alt={toy.toyName}
            />
            <h2>{toy.toyName}</h2>
            <p>Price: {toy.price}</p>
            <div className="flex flex-row-reverse justify-between py-2">
              <p>Rating: {toy.rating}</p>
              <p>Quantity: {toy.quantity}</p>
            </div>
            <div>
            <Link to={`/alltoys/${toy._id}`}>
                <button className="button p-2 rounded-lg">View Details</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
      {displayedCards < filteredToys.length && (
        <div className="text-center mt-4 my-8">
          <button
            className="button font-bold py-[4px] px-[8px] rounded-lg"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ReactTabs;
