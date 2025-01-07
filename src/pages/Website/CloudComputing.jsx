import React from "react";
import img1 from "../../assets/images/services-details/cloudcomputing1.jpg";
import img2 from "../../assets/images/services-details/cloudcomputing2.png";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const CloudComputing = () => {
  const prev = services[2];
  const next = services[4];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="Cloud Computing and Migration"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Cloud Computing and Migration Services
        </h2>
        <p data-aos="fade-up" className="description">
          As businesses strive for greater agility and cost-efficiency, cloud
          computing has emerged as a key driver of transformation. At Cansbi IT
          Solutions, we offer comprehensive cloud computing and migration
          services that help businesses move to the cloud seamlessly, optimize
          their operations, and unlock the full potential of cloud technology.
          Whether you're looking to migrate legacy systems or adopt new
          cloud-based solutions, our team is here to guide you through every
          step of the process.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Seamless Migration to the Cloud
        </h2>
        <p data-aos="fade-up" className="description">
          Migrating to the cloud offers significant benefits, including
          scalability, cost savings, and enhanced performance. However, the
          process of moving applications, data, and workloads to the cloud can
          be complex and requires careful planning. Cansbi IT Solutions
          specializes in cloud migration, ensuring a smooth transition with
          minimal disruption to your business operations. Our team uses proven
          strategies to migrate your existing infrastructure to the cloud,
          ensuring that you benefit from enhanced flexibility and security.
          <br />
          <br />
          We provide a range of migration services, including lift-and-shift
          migration, re-platforming, and cloud-native application development.
          Whether you are moving to public, private, or hybrid cloud
          environments, our solutions are designed to reduce risk and improve
          the efficiency of your migration efforts.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full w-full object-cover rounded-md"
            alt="Cloud Migration Services"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                Scalable Cloud Solutions
              </h3>
            </div>
            <p>
              Our cloud solutions are designed to scale with your business
              needs, allowing you to expand or reduce resources as necessary,
              ensuring optimal performance and cost-efficiency.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">
                End-to-End Migration Support
              </h3>
            </div>
            <p>
              From strategy to execution, we offer end-to-end support throughout
              the migration process, ensuring minimal downtime and a seamless
              transition to the cloud.
            </p>
          </div>
        </div>
      </div>
      <p>
        As cloud technologies continue to evolve, Cansbi IT Solutions stays at
        the forefront of cloud computing and migration trends. We constantly
        update our processes to integrate the latest innovations, ensuring that
        our clients benefit from state-of-the-art solutions. Our goal is to
        deliver tailored cloud strategies that empower businesses to be more
        agile, cost-effective, and secure.
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

export default CloudComputing;
