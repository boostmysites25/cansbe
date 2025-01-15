import React from "react";
import img1 from "../../assets/images/services-details/web-development1.jpeg";
import img2 from "../../assets/images/services-details/web-development2.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const WebDevelopment = () => {
  const next = services[1];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Web development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Web Development Services
        </h2>
        <p data-aos="fade-up" className="description">
          At Cansbe IT Solutions, we understand that web development is not just about building a website; it’s about creating engaging, interactive experiences that empower businesses and captivate their users. By utilizing the latest technologies and best practices, we deliver top-notch web solutions that help our clients thrive in the fast-paced digital landscape.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Web Development Methodology
        </h2>
        <p data-aos="fade-up" className="description">
          Our comprehensive approach to web development covers both front-end and back-end services, ensuring a holistic solution for every project. Our front-end team specializes in crafting visually appealing, responsive, and intuitive interfaces using HTML, CSS, and JavaScript. These user-centric designs ensure a seamless browsing experience across all devices, which is essential in a digital era where user experience is critical for engagement.
          <br />
          <br />
          On the back-end, our developers implement secure, efficient solutions using languages like PHP, Ruby, and Python. By focusing on performance and scalability, we ensure that our clients’ web applications can handle growing demands while maintaining security and functionality.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover object-left rounded-md"
            alt="Web development"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                E-Commerce Development
              </h3>
            </div>
            <p>
              From basic online stores to fully customized e-commerce platforms, we design solutions that enhance sales, improve user experience, and simplify online transactions.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Custom Web App Solutions
              </h3>
            </div>
            <p>
              We specialize in developing tailor-made web applications designed to meet your business’s specific needs, ensuring a seamless and secure user experience with high performance.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Full Stack Development</h3>
            </div>
            <p>
              Our team handles both client-side and server-side development to deliver fast, reliable, and scalable web solutions for your business needs.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbe IT Solutions, we are excited about the future of technology and its potential to break barriers and open up new opportunities for businesses. We are dedicated to staying ahead of the curve, exploring innovative technologies and methodologies that will shape the future of web development. Our experienced team works diligently to create custom web solutions that not only meet the needs of our clients but also position them for sustained success in an increasingly digital world.
      </p>
      <hr />
      <div className="flex flex-col sm:flex-row w-full justify-end gap-6">
        <Link to={next.link} className="flex items-center self-end gap-3">
          <img
            loading="lazy"
            src={next.icon}
            alt="Next service"
            className="w-[3rem] h-[3rem] object-contain grayscale"
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

export default WebDevelopment;
