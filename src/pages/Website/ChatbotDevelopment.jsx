import React from "react";
import img1 from "../../assets/images/services-details/chatbot1.webp";
import img2 from "../../assets/images/services-details/chatbot2.webp";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const ChatbotDevelopment = () => {
  const prev = services[5];
  const next = services[7];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Chatbot Development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Chatbot Development
        </h2>
        <p data-aos="fade-up" className="description">
          In today’s fast-paced digital world, customer service expectations are at an all-time high. Chatbots are emerging as essential tools to engage with users, provide instant support, and enhance the overall customer experience. At Cansbi IT Solutions, we specialize in building intelligent chatbot solutions that seamlessly integrate with your business processes. Our chatbots are designed to handle everything from simple queries to complex interactions, providing businesses with a powerful tool to enhance customer satisfaction and operational efficiency.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Revolutionizing Customer Interactions
        </h2>
        <p data-aos="fade-up" className="description">
          Chatbots enable businesses to provide real-time support and personalized experiences to users, regardless of the time or location. By automating routine interactions, chatbots help businesses streamline their operations, reduce response times, and ensure that customers always receive the attention they need. Whether it’s answering frequently asked questions (FAQs), providing product recommendations, or assisting with account inquiries, our chatbot solutions are designed to improve both the customer experience and internal efficiency.
          <br />
          <br />
          At Cansbi IT Solutions, we develop AI-powered chatbots that are capable of natural language understanding (NLU), enabling them to have meaningful conversations with users. By leveraging machine learning and deep learning techniques, we ensure that our chatbots continuously improve over time, delivering better responses and higher levels of user satisfaction.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="Chatbot Solutions"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">24/7 Customer Support</h3>
            </div>
            <p>
              Our chatbot solutions are available round the clock, ensuring that customers can get the support they need at any time of day.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Efficient Issue Resolution</h3>
            </div>
            <p>
              Our AI-driven chatbots can resolve a wide range of customer issues autonomously, saving time and providing accurate solutions.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbi IT Solutions, we not only build chatbots that handle basic queries but also integrate them with backend systems to offer more advanced functionalities. From processing payments to handling booking requests and sending personalized notifications, our chatbots are fully equipped to handle complex tasks. We also ensure that our solutions are scalable, flexible, and easily integrated with existing platforms such as your website, mobile apps, or social media channels.
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

export default ChatbotDevelopment;
