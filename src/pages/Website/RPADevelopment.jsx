import React from "react";
import img1 from "../../assets/images/services-details/rpa1.webp";
import img2 from "../../assets/images/services-details/rpa2.webp";
import { Link } from "react-router-dom";
import { services } from "../../data/constant";
import { IoIosArrowRoundBack } from "react-icons/io";

const RPADevelopment = () => {
  const prev = services[6];
  return (
    <div className="flex flex-col gap-10">
      <img
        loading="lazy"
        data-aos="fade-up"
        src={img1}
        className="h-[25rem] object-cover rounded-3xl object-center"
        alt="RPA Development"
      />
      <div className="flex flex-col gap-4">
        <h2 data-aos="fade-up" className="heading">
          Robotic Process Automation (RPA) Development
        </h2>
        <p data-aos="fade-up" className="description">
          Robotic Process Automation (RPA) is revolutionizing the way businesses
          automate repetitive tasks, increase operational efficiency, and reduce
          human errors. At Cansbi IT Solutions, we specialize in providing
          cutting-edge RPA solutions that help organizations streamline
          workflows, improve productivity, and enhance customer satisfaction.
          Our RPA solutions are designed to automate mundane, rule-based tasks
          across various business processes, allowing teams to focus on
          high-value, strategic activities.
        </p>
        <h2 data-aos="fade-up" className="text-2xl font-semibold mt-5">
          Transforming Business Operations with RPA
        </h2>
        <p data-aos="fade-up" className="description">
          RPA offers numerous benefits to businesses, including increased
          operational speed, reduced costs, and improved accuracy. By automating
          manual processes, businesses can achieve faster turnaround times,
          eliminate errors, and optimize their workflows. Whether it’s data
          entry, invoice processing, customer support, or HR tasks, RPA can
          handle these tasks with precision and efficiency. As a result,
          businesses can improve overall productivity and deliver higher-quality
          services to their customers.
          <br />
          <br />
          At Cansbi IT Solutions, we design and implement RPA solutions that are
          tailored to meet the specific needs of your business. Our team of
          experts works closely with clients to identify automation
          opportunities, define the right process flows, and integrate RPA tools
          into your existing systems. By leveraging RPA, businesses can achieve
          automation at scale, which enhances agility and reduces operational
          costs.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-7">
        <div className="h-full w-full">
          <img
            loading="lazy"
            src={img2}
            className="h-full max-h-[20rem] w-full lg:max-h-max object-cover rounded-md"
            alt="RPA Automation"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Enhanced Efficiency</h3>
            </div>
            <p>
              Automating repetitive tasks allows employees to focus on strategic
              initiatives, boosting productivity across departments.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="w-[1.6rem] text-lg h-[1.6rem] rounded-full flex items-center justify-center border-2 border-[#00B0FC] text-[#00B0FC]">
                ✓
              </div>
              <h3 className="text-lg font-semibold">Cost Reduction</h3>
            </div>
            <p>
              RPA reduces the need for manual intervention, thereby cutting down
              operational costs and enhancing profit margins.
            </p>
          </div>
        </div>
      </div>
      <p>
        Our RPA solutions empower businesses to create smarter workflows by
        enabling seamless integrations between different applications, systems,
        and data sources. We focus on scalability, flexibility, and
        user-friendliness to ensure our RPA solutions integrate smoothly into
        existing systems. As a result, businesses can quickly scale their
        operations without the need for complex infrastructure changes.
      </p>
      <p>
        Cansbi IT Solutions stays on top of RPA trends, ensuring our clients
        benefit from the latest advancements in automation technologies. Whether
        you’re a small business or a large enterprise, we can help you leverage
        RPA to unlock new efficiencies and deliver greater value to your
        customers. Let us guide you through the RPA journey and empower your
        business to achieve higher levels of performance and profitability.
      </p>
      <hr />
      <div className="flex w-full justify-start gap-6">
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
      </div>
    </div>
  );
};

export default RPADevelopment;
