import React from "react";
import img1 from "../../assets/images/services-details/app-development1.jpeg";
import img2 from "../../assets/images/services-details/app-development2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AppDevelopment = () => {
  const prev = services[0];
  const next = services[2];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="App development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          App Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today's rapidly evolving digital world, mobile apps have become
          indispensable tools for businesses to connect with customers and
          improve operational workflows. At Cansbi IT Solutions, we know that
          app development is not just about coding; it’s about creating
          exceptional, user-friendly experiences that support business growth.
          Our team is proficient in both native and cross-platform development,
          allowing us to deliver top-tier applications tailored to each client’s
          specific requirements.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Approach to App Development
        </h2>
        <p data-aos="fade-up" className="description">
          Our development process covers the full spectrum, from concept to
          deployment and ongoing support. We specialize in native apps,
          custom-built for iOS and Android platforms using their native
          languages and tools. This approach ensures the apps perform at their
          best, utilizing each platform’s unique capabilities. Additionally, we
          provide cross-platform development, which enables us to build apps
          that run seamlessly across various platforms, allowing our clients to
          reach a wider audience while optimizing costs.
          <br />
          <br />
          Another key focus for us is accessibility. Mobile apps allow users to
          interact with services at their convenience, anytime and anywhere,
          giving them the flexibility to complete transactions or access
          information on the move. With the rise of mobile-first behavior,
          ensuring accessibility is essential to meet customer expectations.
          Additionally, our apps integrate analytics tools to help businesses
          collect valuable insights into user preferences. These insights enable
          data-driven decisions to refine business strategies, optimize user
          experiences, and fuel business growth.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover rounded-md"
            alt="App development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Native & Hybrid App Development
              </h3>
            </div>
            <p>
              We specialize in creating both native applications for iOS and
              Android and hybrid apps that deliver cross-platform compatibility
              using tools like React Native and Flutter.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Cross-Platform Solutions
              </h3>
            </div>
            <p>
              To provide broader reach without inflating costs, we also offer
              cross-platform app development, ensuring your app performs well
              across a variety of devices and operating systems.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbi IT Solutions, we’re committed to staying at the forefront of
        technological advancements, offering our clients the latest app
        solutions. We focus on integrating cutting-edge trends that not only
        enhance functionality but also improve the user experience. Our
        dedicated team ensures every app we build is visually appealing and
        user-friendly, with a focus on seamless UI/UX design.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
            alt="Previous service"
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{prev.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              <IoIosArrowRoundBack className="text-2xl" /> Previous
            </p>
          </div>
        </Link>
        <Link to={next.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt="Next service"
            className="w-[3rem] h-[3rem] hidden sm:inline-block object-contain grayscale"
          />
          <div className="flex flex-col gap-1">
            <h6 className="text-md font-semibold">{next.title}</h6>
            <p className="flex items-center gap-2 text-sm text-secondary">
              Next <IoIosArrowRoundForward className="text-2xl" />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AppDevelopment;
