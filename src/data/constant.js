import { AiFillAppstore } from "react-icons/ai";
import logoImg from "../assets/images/logo/logo.png";
import { FaFigma, FaGlobe } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { SiHiveBlockchain } from "react-icons/si";

// all services
export const services = [
  {
    id: 1,
    title: "Web Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Building websites using code, design, and content for user-friendly online experiences.",
    link: "/services/web-development",
  },
  {
    id: 2,
    title: "App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "Creating mobile applications using code, design, and user-centered features.",
    link: "/services/app-development",
  },
  {
    id: 3,
    title: "UI/UX",
    icon: require("../assets/images/icons/uiux.png"),
    description:
      "Designing intuitive and visually appealing user experiences for applications and websites.",
    link: "/services/ui-ux",
  },
  {
    id: 4,
    title: "Cloud Computing and Migrating Services",
    icon: require("../assets/images/icons/cloudcomputing.png"),
    description:
      "Store, access, and manage your data and applications over the internet.",
    link: "/services/cloud-computing-services",
  },
  {
    id: 5,
    title: "Artificial Intelligence Development",
    icon: require("../assets/images/icons/ai.png"),
    description:
      "Building intelligent systems that learn from data to automate tasks and solve problems.",
    link: "/services/ai-ml-development",
  },
  {
    id: 6,
    title: "Data Analytics and Business Intelligence",
    icon: require("../assets/images/icons/data-analytics.png"),
    description:
      "Transforming data into actionable insights to drive better business decisions.",
    link: "/services/data-analytics-business-intelligence",
  },
  {
    id: 7,
    title: "Chatbot Development",
    icon: require("../assets/images/icons/chatbot.png"),
    description:
      "Developing conversational AI solutions to enhance customer support and engagement.",
    link: "/services/chatbot-development",
  },
  {
    id: 8,
    title: "Robotic Process Automation",
    icon: require("../assets/images/icons/rpa.png"),
    description:
      "Automating repetitive tasks to improve operational efficiency and reduce costs.",
    link: "/services/rpa-development",
  },
];

// details
export const companyDetails = {
  logo: logoImg,
  phone: "+919731182101",
  location: "",
  email: "abc@xyz.com",
};

export const landingPageNavLinks = [
  {
    id: 1,
    label: "Home",
    link: "banner",
  },
  {
    id: 2,
    label: "Services",
    link: "services",
  },
  {
    id: 3,
    label: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    label: "Reviews",
    link: "reviews",
  },
  {
    id: 5,
    label: "Contact",
    link: "contact",
  },
];

// website pages links
export const websitePagesLinks = [
  {
    id: 1,
    link: "/",
    label: "Home",
  },
  {
    id: 2,
    link: "/about-us",
    label: "About Us",
  },
  {
    id: 3,
    link: "/services",
    label: "Services",
  },
  {
    id: 4,
    link: "/blogs",
    label: "Blogs",
  },
  {
    id: 5,
    link: "/contact",
    label: "Contact Us",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Website",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// development workflow
export const webDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your goals, target audience, and project needs. Through collaborative discussions, we solidify the website's functionalities and user journeys.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric blueprint. We meticulously plan the website's architecture, information flow, and visual identity, ensuring an intuitive and engaging experience.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life. We leverage cutting-edge technologies to build a secure and scalable website or web application that seamlessly integrates with your existing systems.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your website to rigorous testing to ensure flawless performance across all devices. Once satisfied, we launch your masterpiece with a smooth transition and ongoing support.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch. We provide ongoing maintenance, security updates, and expert assistance to keep your website thriving in the ever-evolving digital landscape.",
  },
];

export const appDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Analysis",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We delve deep to understand your app's purpose, target audience, and desired functionalities. Through workshops and discussions, we'll solidify your app's foundation.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "We craft a user-centric experience. Our designers create intuitive interfaces, while our planners map out the development roadmap, ensuring a smooth and efficient build.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled engineers bring your app to life. Using cutting-edge tools and following best practices, we meticulously code every feature, ensuring a robust and functional app.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We rigorously test every aspect of your app across different devices and scenarios. Our goal To identify and fix any glitches before launch, guaranteeing a seamless user experience.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Your app's success is our priority. We offer ongoing support to address any issues and provide updates to keep your app functioning at its best.",
  },
];

// General Development Workflow
export const generalDevelopmentWorkflow = [
  {
    id: "01",
    title: "Requirements Gathering",
    icon: require("../assets/images/icons/requirement-analysis.png"),
    description:
      "We engage with stakeholders to gather comprehensive project requirements and understand their goals through collaborative discussions.",
  },
  {
    id: "02",
    title: "Design & Planning",
    icon: require("../assets/images/icons/planning.png"),
    description:
      "Our team crafts a user-centric design and creates a detailed project plan, outlining the architecture, timelines, and deliverables.",
  },
  {
    id: "03",
    title: "Development",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Our skilled developers bring your vision to life, leveraging modern technologies to build a secure and scalable product that meets all specifications.",
  },
  {
    id: "04",
    title: "Testing",
    icon: require("../assets/images/icons/testing.png"),
    description:
      "We subject your product to rigorous testing to ensure flawless performance across all devices, identifying and resolving any issues before launch.",
  },
  {
    id: "05",
    title: "Support",
    icon: require("../assets/images/icons/support.png"),
    description:
      "Our commitment extends beyond launch, providing ongoing maintenance and support to keep your product thriving in the ever-evolving digital landscape.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "John Peterson",
    img: require("../assets/images/testimonials/review-p1.png"),
    designation: "CEO of TechNext Solutions",
    review:
      "Partnering with Cansbe IT Solutions was a great decision. They brought our vision to life while improving the app’s performance and user experience. We've seen a big increase in user retention thanks to their expertise.",
  },
  {
    id: 2,
    name: "Samantha Green",
    img: require("../assets/images/testimonials/review-p2.png"),
    designation: "CTO of FinServ Global",
    review:
      "Cansbe IT Solutions made our cloud migration smooth and efficient, with minimal disruptions. They optimized our systems for better performance and security, exceeding our expectations.",
  },
  {
    id: 3,
    name: "Mark Davis",
    img: require("../assets/images/testimonials/review-p3.png"),
    designation: "COO of E-Commerce Hub",
    review:
      "Cansbi’s UX/UI team reworked our platform’s design beautifully. They understood our users’ needs and delivered an intuitive, engaging product that has significantly boosted user engagement.",
  },
  {
    id: 4,
    name: "Lisa Wong",
    img: require("../assets/images/testimonials/review-p4.png"),
    designation: "IT Director at Global Enterprises",
    review:
      "Their team helped us integrate AI into our operations, automating tasks and improving productivity. Their custom solutions have been a game-changer for our efficiency.",
  },
  {
    id: 5,
    name: "David Thompson",
    img: require("../assets/images/testimonials/review-p5.png"),
    designation: "HR Director at HealthCare Innovators",
    review:
      "Cansbi’s data analytics services gave us clear insights into our business operations. Their tools have helped us make informed decisions and achieve better results.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("../assets/images/industries/Healthcare.webp"),
    desc: "Transforming patient care and operations with AI-powered diagnostics, data analytics, and telemedicine solutions.",
  },
  {
    id: 2,
    title: "E-commerce & Retail",
    img: require("../assets/images/industries/E-commerce & Retail.webp"),
    desc: "Enhancing customer experiences with personalized recommendations, inventory management, and secure online transactions.",
  },
  {
    id: 3,
    title: "Finance & Banking",
    img: require("../assets/images/industries/Finance & Banking.webp"),
    desc: "Streamlining processes with AI, blockchain, and machine learning for fraud detection, risk assessment, and smarter investment strategies.",
  },
  {
    id: 4,
    title: "Energy",
    img: require("../assets/images/industries/Energy.webp"),
    desc: "Optimizing energy management, forecasting, and sustainability with IoT and data-driven AI solutions.",
  },
  {
    id: 5,
    title: "Real Estate",
    img: require("../assets/images/industries/Real Estate.webp"),
    desc: "Revolutionizing property management, investment decisions, and customer engagement with AI and predictive analytics.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("../assets/images/industries/Manufacturing.webp"),
    desc: "Driving automation, predictive maintenance, and operational efficiency with AI, machine learning, and IoT technologies.",
  },
  {
    id: 7,
    title: "Data Analytics & Business Intelligence",
    img: require("../assets/images/industries/Data Analytics & Business Intelligence.webp"),
    desc: "Actionable insights from big data to drive informed decision-making and growth strategies.",
  },
  {
    id: 8,
    title: "IoT Development",
    img: require("../assets/images/industries/IoT Development.webp"),
    desc: "Connecting devices and systems to enhance automation and operational efficiency",
  },
  {
    id: 9,
    title: "Logistics & Supply Chain",
    img: require("../assets/images/industries/Logistics & Supply Chain.webp"),
    desc: "Enhancing logistics, inventory, and supply chain management with AI and IoT-enabled tracking and optimization.",
  },
  {
    id: 10,
    title: "Education",
    img: require("../assets/images/industries/Education.webp"),
    desc: " Personalized learning experiences, predictive analytics for student outcomes, and automated administrative processes using AI and ML.",
  },
  {
    id: 10,
    title: "Telecom",
    img: require("../assets/images/industries/Telecom.webp"),
    desc: " Boosting network efficiency, customer service, and fraud prevention through AI-driven solutions.",
  },
];

// portfolio images (web development)
// export const webPortfolio = [
//   {
//     id: 1,
//     img: require("../assets/images/web_projects/1.webp"),
//     title: "FE-Finance",
//   },
//   {
//     id: 2,
//     img: require("../assets/images/web_projects/2.webp"),
//     title: "Ocxee",
//   },
//   {
//     id: 3,
//     img: require("../assets/images/web_projects/3.webp"),
//     title: "Leaderbridge",
//   },
//   {
//     id: 4,
//     img: require("../assets/images/web_projects/4.webp"),
//     title: "Gigzio",
//   },
//   {
//     id: 5,
//     img: require("../assets/images/web_projects/5.webp"),
//     title: "FE Group",
//   },
//   {
//     id: 6,
//     img: require("../assets/images/web_projects/6.webp"),
//     title: "V Talkz",
//   },
// ];

// portfolio images (app development)
// export const appPortfolio = [
//   {
//     id: 1,
//     img: require("../assets/images/app_projects/1.webp"),
//     title: "PartEx",
//   },
//   {
//     id: 2,
//     img: require("../assets/images/app_projects/2.webp"),
//     title: "Find A Driver",
//   },
//   {
//     id: 3,
//     img: require("../assets/images/app_projects/3.webp"),
//     title: "Artisan Express",
//   },
//   {
//     id: 4,
//     img: require("../assets/images/app_projects/4.webp"),
//     title: "House of Deliverance",
//   },
// ];

// portfolio links
export const portfolio = {
  appDevelopment: {
    icon: <AiFillAppstore size={30} />,
    list: [
      {
        id: 1,
        title: "Barbera",
        link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
      },
      {
        id: 2,
        title: "Rentop",
        link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
      },
      {
        id: 3,
        title: "Binfoclub",
        link: "https://play.google.com/store/apps/details?id=com.binfoclub.app&pcampaignid=web_share",
      },
      {
        id: 4,
        title: "Prayer Times",
        link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
      },
      {
        id: 5,
        title: "Evans Francis",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
      },
      {
        id: 6,
        title: "HOD",
        link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
      },
      {
        id: 7,
        title: "AutoSnap",
        link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
      },
      {
        id: 8,
        title: "Klikomics",
        link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
      },
      {
        id: 9,
        title: "Ocxee",
        link: "https://apps.apple.com/in/app/ocxee/id1522856353",
      },
      {
        id: 10,
        title: "Dubai Travel Guide",
        link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
      },
    ],
  },
  webDevelopment: {
    icon: <FaGlobe size={30} />,
    list: [
      { id: 1, title: "Leaderbridge", link: "https://www.leaderbridge.com" },
      { id: 2, title: "Autopilot", link: "https://autopilot.io" },
      { id: 3, title: "Gigzio", link: "https://gigzio.com" },
      { id: 4, title: "FE Group", link: "https://fe.group" },
      { id: 5, title: "Vtalkz", link: "https://vtalkz.com" },
      { id: 6, title: "Think Realty", link: "https://thinkrealty.ae" },
      { id: 7, title: "Bayut", link: "https://www.bayut.com" },
      {
        id: 8,
        title: "5G High Speed Internet",
        link: "https://5ghighspeedinternet.co",
      },
      {
        id: 9,
        title: "Messina's Catering",
        link: "https://messinascatering.com",
      },
      {
        id: 10,
        title: "Cold Creek Capital",
        link: "https://www.coldcreekcap.com",
      },
    ],
  },
  uiUxDesign: {
    icon: <FaFigma size={30} />,
    list: [
      {
        id: 1,
        title: "Crypto UI App",
        link: "https://www.figma.com/design/syARcSBYKhwEzsEmlpB2jR/Crypto-UI-App-%26-Admin?node-id=0-1&t=qrubmjqZL7GxJUk2-0",
      },
      {
        id: 2,
        title: "Emergence Music Distribution",
        link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
      },
      {
        id: 3,
        title: "Potea",
        link: "https://www.figma.com/design/ZoowfS1VMFLRKKcsdd3Myh/Potea-(Copy)?node-id=727-25421&t=KThAYD7OOdc4oeEV-1",
      },
      {
        id: 4,
        title: "TGFX Workfile",
        link: "https://www.figma.com/design/Xtua9ElE5Eg7MV7baS6Bzn/TGFX-Workfile-(Copy)?t=JDLWFCCc24GDqh1T-0",
      },
    ],
  },
  gameDevelopment: {
    icon: <IoLogoGameControllerB size={30} />,
    list: [
      {
        id: 1,
        title: "Car Stunt Racing",
        link: "https://play.google.com/store/apps/details?id=com.carstuntgames.carstunt.racingcar.carstuntmania.mlabs",
      },
      {
        id: 2,
        title: "Bowling Offline",
        link: "https://play.google.com/store/apps/details?id=com.bowlinggames.offlinebowlinggame.bowlingoffline.bowlinggame.mlabs",
      },
    ],
  },
  blockchain: {
    icon: <SiHiveBlockchain size={30} />,
    list: [
      {
        id: 1,
        title: "Crypto Padie",
        link: "https://play.google.com/store/apps/details?id=com.cryptopadie.buy.sell.crypto",
      },
      {
        id: 2,
        title: "Nanfolo App",
        link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
      },
      { id: 3, title: "Nanfolo", link: "https://nanfolo.com" },
      { id: 4, title: "Padiepal", link: "https://padiepal.com" },
    ],
  },
};
