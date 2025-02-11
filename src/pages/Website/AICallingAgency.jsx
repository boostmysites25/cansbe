import React from "react";
import img1 from "../../assets/images/services-details/ai-calling1.webp";
import img2 from "../../assets/images/services-details/ai-calling2.webp";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const AICallingAgency = () => {
  const prev = services[1]; 
  const next = services[3];

  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="AI Calling Solutions"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          AI Calling Solutions
        </h2>
        <p data-aos="fade-up" className="description">
          AI Calling Solutions offer businesses an advanced, automated calling system that enhances customer engagement and streamlines communication processes. Our AI-powered calling agents are designed to handle customer inquiries, provide support, and perform outbound calls with high efficiency, accuracy, and scalability. With state-of-the-art natural language processing (NLP) and machine learning algorithms, our AI system delivers a seamless experience, ensuring customer satisfaction while reducing operational costs and increasing productivity.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Revolutionizing Customer Interaction with AI
        </h2>
        <p data-aos="fade-up" className="description">
          Our AI calling solutions are versatile and adaptable, able to integrate with various industries such as telemarketing, customer support, and lead generation. By utilizing AI's capabilities, businesses can automate their calling processes, scale operations efficiently, and improve overall service quality.
          <br />
          <br />
          Whether it’s managing inbound calls or executing large-scale outbound calling campaigns, our AI-driven system ensures every interaction is handled with precision, leaving your team free to focus on more complex tasks. Our solution is not just about automation; it’s about transforming your approach to customer interaction and optimizing business operations.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover rounded-md"
            alt="AI Calling Solutions in Action"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">AI-Powered Call Handling</h3>
            </div>
            <p>
              Our AI solutions handle calls efficiently, offering intelligent responses and guiding customers to the right solution with no human intervention.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Scalable Customer Support</h3>
            </div>
            <p>
              Scale your customer support operations without additional staffing by deploying our AI system that handles an increased volume of calls seamlessly.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbe IT Solutions, our AI Calling Agency solutions are designed to help businesses optimize their communication strategies. By automating routine calls and using advanced analytics, our AI system can generate valuable insights, improving decision-making and enhancing overall customer satisfaction. Let us help you revolutionize your calling operations with cutting-edge AI technology.
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

export default AICallingAgency;
