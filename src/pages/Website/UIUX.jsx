import React from "react";
import img1 from "../../assets/images/services-details/uiux1.webp";
import img2 from "../../assets/images/services-details/uiux2.webp";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../../data/constant";

const UIUXDesign = () => {
  const prev = services[1];
  const next = services[2];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="UI/UX Design"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          UI/UX Design Services
        </h2>
        <p data-aos="fade-up" className="description">
          At Cansbi IT Solutions, we believe that a great user interface (UI)
          combined with an exceptional user experience (UX) is crucial to
          building successful digital products. Our design process focuses on
          creating visually stunning, intuitive, and functional interfaces that
          provide seamless interaction for users. We’re committed to delivering
          design solutions that not only look great but also enhance the user
          journey and drive engagement.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Our Approach to UI/UX Design
        </h2>
        <p data-aos="fade-up" className="description">
          We take a user-centered approach to design, ensuring that every
          decision is made with the end-user in mind. Our process begins with
          understanding your users' needs and behaviors. By leveraging user
          research, wireframing, and prototyping, we ensure that every element
          of the design aligns with the goals of both the users and your
          business.
          <br />
          <br />
          For UI design, we focus on creating beautiful, interactive interfaces
          that engage users. Our designers craft layouts, color schemes, and
          typography that reflect your brand's identity while ensuring
          consistency and usability across all screens. On the UX side, we
          prioritize ease of navigation and accessibility, making sure that
          users have an enjoyable and efficient experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover object-center rounded-md"
            alt="UI/UX Design"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                User Research & Analysis
              </h3>
            </div>
            <p>
              We conduct in-depth user research to understand user behavior,
              preferences, and pain points, allowing us to design solutions that
              truly address their needs.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Prototyping & Wireframing
              </h3>
            </div>
            <p>
              We create interactive prototypes and wireframes that allow us to
              visualize the user flow and make quick iterations before final
              design implementation.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Usability Testing</h3>
            </div>
            <p>
              We test our designs with real users to gather feedback and make
              adjustments, ensuring that the final product is both intuitive and
              functional.
            </p>
          </div>
        </div>
      </div>
      <p>
        At Cansbi IT Solutions, we understand the importance of a great user
        experience. Our team of designers and researchers is passionate about
        creating designs that not only meet user expectations but exceed them.
        We continuously push the boundaries of design to bring you innovative
        and highly functional user interfaces that elevate your digital products
        and help your business succeed.
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

export default UIUXDesign;
