import React from "react";
import img1 from "../../assets/images/services-details/ai1.jpg";
import img2 from "../../assets/images/services-details/ai2.jpg";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ArtificialIntelligence = () => {
  const prev = services[3];
  const next = services[5];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Artificial Intelligence Development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Artificial Intelligence Development
        </h2>
        <p data-aos="fade-up" className="description">
          Artificial Intelligence (AI) is reshaping the way businesses operate, enabling smarter decision-making, enhancing customer experiences, and streamlining operations. At Cansbi IT Solutions, we specialize in AI development, creating customized solutions that leverage advanced AI technologies to address unique business challenges. Our team works closely with clients to design AI-powered systems that drive innovation, efficiency, and growth, positioning businesses at the forefront of digital transformation.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Unlocking Business Potential with AI
        </h2>
        <p data-aos="fade-up" className="description">
          The application of AI spans numerous industries, from healthcare to finance, logistics to customer service. At Cansbi IT Solutions, we harness the power of AI to deliver tailored solutions that streamline business operations and enhance decision-making. Our AI development services include building intelligent automation systems, predictive models, and natural language processing (NLP) solutions that help businesses gain valuable insights from data, reduce operational costs, and improve overall efficiency.
          <br />
          <br />
          One of the key areas where we specialize is in predictive analytics, where AI algorithms are used to analyze historical data and predict future trends. This helps businesses make informed decisions based on data-driven insights, whether in forecasting sales, customer behavior, or market trends. By integrating AI into their operations, businesses can optimize their strategies and stay ahead of the competition.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover rounded-md"
            alt="AI Solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Data-Driven Innovation</h3>
            </div>
            <p>
              Our AI solutions empower businesses to make data-driven decisions by leveraging advanced algorithms and machine learning techniques.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">AI for Enhanced Efficiency</h3>
            </div>
            <p>
              We help businesses automate repetitive tasks, streamline operations, and improve overall workflow by leveraging AI-powered automation.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbi IT Solutions, we are committed to pushing the boundaries of what AI can achieve. Our team is dedicated to staying at the cutting edge of AI advancements, constantly researching and developing innovative AI technologies. We integrate these advancements into our solutions, ensuring that businesses remain ahead of the curve and are prepared for future challenges.
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

export default ArtificialIntelligence;
