import React, { useState } from "react";
import line from "../../assets/images/line.png";
import { portfolio } from "../../data/constant";
import { Link } from "react-router-dom";
import { IoIosLink, IoLogoGameControllerB } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaFigma, FaGlobe } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

// Convert category names to match the keys in portfolio object
const categoryList = [
  { key: "all", name: "All", icon: <FaGlobe size={30} /> },
  {
    key: "appDevelopment",
    name: "App Development",
    icon: <AiFillAppstore size={30} />,
  },
  {
    key: "webDevelopment",
    name: "Web Development",
    icon: <FaGlobe size={30} />,
  },
  { key: "uiUxDesign", name: "UI/UX Design", icon: <FaFigma size={30} /> },
  {
    key: "gameDevelopment",
    name: "Game Development",
    icon: <IoLogoGameControllerB size={30} />,
  },
  {
    key: "blockchain",
    name: "Blockchain",
    icon: <SiHiveBlockchain size={30} />,
  },
];

const PortfolioList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[1]);

  const getAllItems = () => {
    if (selectedCategory.key === "all") {
      return Object.values(portfolio).flatMap((category) => category.list);
    }
    return portfolio[selectedCategory.key]?.list || [];
  };

  return (
    <div className="wrapper py-16">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-12" />
            <h6 className="font-medium text-secondary">Portfolio</h6>
          </div>

          <h2 className="heading text-center mb-5">Some of Our Projects</h2>

          <div className="w-full">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categoryList.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory.key === category.key
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          >
            {getAllItems().map((item) => (
              <div
                key={item.title}
                className="w-full flex flex-col items-center bg-primary hover:bg-secondary hover:scale-x-105 transition-all duration-300 text-white px-5 py-10 gap-3 rounded-md"
              >
                {selectedCategory.icon}
                <h3 className="text-lg font-medium text-center">
                  {item.title}
                </h3>
                <Link
                  target="_blank"
                  to={item.link}
                  className="flex items-center gap-2 hover:underline"
                >
                  <IoIosLink /> <small>Visit</small>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
