import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import Footer from "../components/Footer";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-between gap-2 min-h-screen">
      <div className="fixed top-0 z-50 w-full bg-white/50 backdrop-blur-sm text-primary">
        <div className="flex wrapper items-center gap-8 justify-between">
          <Link
            to="banner"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            duration={500}
          >
            <img
              src={logo}
              alt="logo"
              width="auto"
              height="auto"
              className="h-[5rem] md:h-[6.5rem] object-contain"
            />
          </Link>
        </div>
      </div>

      {/* content */}
      <div className="wrapper min-h-[80vh] flex flex-col items-center justify-center gap-5">
        <h2 className="heading text-center">Thank you for your message</h2>
        <p className="text-center">
          We will get back to you as soon as possible
        </p>
        <Link to="/" className="primary-btn">
          Back to Home
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
