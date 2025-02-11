import React, { useEffect } from "react";
import bannerImg from "../../assets/images/landingpages/banner-bg.webp";
import { Link } from "react-router-dom";
import robot from "../../assets/images/landingpages/ai-robot.png";
import gsap from "gsap";

const Banner = ({ page }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  let service, heading, description;
  if (page === "web") {
    service = "Web Development";
    heading = "Shaping the Future with Cutting-Edge Web Development Solutions";
    description =
      "Elevate your online presence with our advanced web development services. At Cansbe IT Solutions, we merge creativity, innovation, and the latest technologies to craft custom web solutions that engage users, enhance interaction, and accelerate business growth. From dynamic websites and interactive platforms to scalable e-commerce solutions, we create personalized digital experiences built to thrive in the future.";
  } else if (page === "app") {
    service = "App Development";
    heading =
      "Unlocking the Power of Mobile Apps with Cutting-Edge App Development Services";
    description =
      "Leverage the power of cutting-edge app development to connect with your audience anytime, anywhere. At Cansbe IT Solutions, we specialize in creating custom mobile and web applications that offer smooth user experiences, enhance engagement, and foster growth. Whether it's intuitive design or robust features, our personalized app solutions are crafted to help your business succeed in the digital world, giving you a competitive edge.";
  } else if (page === "ai-calling") {
    service = "AI Calling Agency";
    heading =
      "Elevating Customer Connections with Intelligent Calling Solutions";
    description =
      "Leverage the power of AI-driven calling solutions to enhance customer interactions and streamline communication. At Cansbe IT Solutions, we specialize in providing AI-powered calling services that automate customer support, improve engagement, and drive efficiency. Whether it’s handling customer inquiries or managing high volumes of calls, our AI solutions are designed to deliver seamless experiences, reduce operational costs, and provide businesses with valuable insights. Embrace the future of communication with our advanced AI calling technology and give your business a competitive advantage in the digital era.";
  }
  return (
    <div
      id="banner"
      className="min-h-screen w-full relative flex justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="wrapper pt-[10rem] pb-[5rem] flex flex-col-reverse lg:grid grid-cols-[60%_40%] items-center gap-5">
        <div className="flex flex-col gap-4 items-start justify-center">
          <p
            data-aos="fade-right"
            className="bg-[#ECECF2] p-1 text-gray-900 text-sm"
          >
            {service}
          </p>
          <h1
            data-aos="fade-right"
            className="text-[2.5rem] md:text-5xl font-bold leading-tight"
          >
            {heading}
          </h1>
          <p data-aos="fade-right" className="text-sm text-gray-500">
            {description}
          </p>
          <Link data-aos="fade-right" className="primary-btn mt-10">
            Get Started
          </Link>
        </div>
        <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
          <img
            loading="lazy"
            id="robot"
            src={robot}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            alt="robot"
            width="600"
            height="400"
            class="h-[30vh] lg:h-[40vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
