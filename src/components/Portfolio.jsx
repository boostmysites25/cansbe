import React from "react";
import line from "../assets/images/line.png";
import { portfolio } from "../data/constant";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web");
  let data = isWebDevelopment
    ? portfolio.webDevelopment
    : portfolio.appDevelopment;
  return (
    <div id="portfolio" className="py-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Portfolio</h6>
          </div>
          <h2 className="heading text-center mb-5">Few of Our Projects</h2>
          <div
            data-aos="fade-up"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
          >
            {data.list.map((item) => (
              <div
                key={item.title}
                className="w-full flex flex-col items-center bg-primary hover:bg-secondary hover:scale-x-105 transition-all duration-300 text-white px-5 py-7 gap-3 rounded-md"
              >
                {data.icon}
                <h3 className="text-lg font-medium text-center">{item.title}</h3>
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

export default Portfolio;
