import React from "react";
import img1 from "../../assets/images/services-details/data-analytics1.webp";
import img2 from "../../assets/images/services-details/data-analytics2.webp";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const DataAnalyticsAndBI = () => {
  const prev = services[4];
  const next = services[6];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Data Analytics and Business Intelligence"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Data Analytics and Business Intelligence
        </h2>
        <p data-aos="fade-up" className="description">
          In today’s data-driven world, organizations must harness the power of
          their data to make informed decisions that drive growth. At Cansbe IT
          Solutions, we specialize in data analytics and business intelligence
          (BI) services that enable businesses to transform raw data into
          actionable insights. Our solutions help businesses understand trends,
          optimize performance, and make strategic decisions that lead to
          greater success.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Unlocking the Power of Data
        </h2>
        <p data-aos="fade-up" className="description">
          Data analytics and BI have become essential tools for businesses to
          gain competitive advantages. With the right data insights,
          organizations can make data-driven decisions that enhance efficiency,
          reduce costs, and discover new growth opportunities. At Cansbe IT
          Solutions, we focus on providing comprehensive analytics services,
          including data mining, predictive analytics, and advanced reporting to
          uncover hidden patterns and trends that can help businesses thrive.
          <br />
          <br />
          Our BI solutions are designed to integrate seamlessly with your
          existing systems, offering custom dashboards, real-time reporting, and
          data visualization tools. This enables your team to easily interpret
          complex data and share insights across the organization, empowering
          decision-makers with the information they need to succeed.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover object-center rounded-md"
            alt="Data Analytics and Business Intelligence"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Predictive Analytics</h3>
            </div>
            <p>
              We help businesses leverage historical data to forecast future
              trends and make proactive decisions, enhancing long-term
              strategies.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Real-Time Data Analysis</h3>
            </div>
            <p>
              We provide real-time analytics to help you stay ahead of market
              shifts and make on-the-spot decisions that drive business
              performance.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbe IT Solutions, we understand that data is a valuable asset
        that, when used correctly, can drive substantial business growth. Our
        team of experts uses the latest BI tools and techniques to transform
        your data into strategic insights. Whether you need help with data
        integration, reporting, or predictive modeling, we are committed to
        delivering solutions that empower your business to make smarter, more
        informed decisions.
      </p>
      <hr />
      <div className="flex w-full justify-between gap-6">
        <Link to={prev.link} className="flex items-center gap-3">
          <img
            loading="lazy"
            src={prev.icon}
            alt=""
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
            alt=""
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

export default DataAnalyticsAndBI;
