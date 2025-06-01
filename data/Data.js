// src/data/Data.js

import { FaDollarSign, FaHome, FaClipboardList, FaUserCheck, FaRegClock, FaSearch, FaTools, FaCheckCircle, FaShieldAlt, FaDraftingCompass, FaGasPump, FaWrench, FaBuilding, FaCogs, FaWater } from "react-icons/fa";
import { FaClock, FaFaucet, FaIndustry, FaPumpSoap, FaSolarPanel } from "react-icons/fa6";


// team data *************************************************************** API Owener provided data
export const people = [
  { name: "Alka Vyas", role: "Founder", mobile: null },
  { name: "Abhishek Vyas", role: "CEO", mobile: "+91-982-567-8901" },
  { name: "GC Sharma", role: "Project Manager", mobile: null },
  { name: "Arjun Singh", role: "Project Supervisor", mobile: null },
  { name: "Sandeep Kumar", role: "Labour Manager", mobile: null },
];



export const workflowSteps = [
  {
    icon: <FaSearch />,
    title: 'Research & Analysis',
    color: 'text-green-600',
    description: 'We conduct thorough site assessments and collaborate with clients to understand project requirements, ensuring customized solutions for petrol pumps, cement plants, and solar installations.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Project Planning',
    color: 'text-blue-600',
    description: 'Our team creates detailed blueprints and schedules, addressing challenges to ensure seamless execution of civil construction and fabrication projects.',
  },
  {
    icon: <FaTools />,
    title: 'Quality Execution',
    color: 'text-orange-600',
    description: 'We execute projects with precision, building robust pipelines, tower foundations, and industrial infrastructure to meet the highest quality standards.',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Project Handover',
    color: 'text-red-600',
    description: 'We deliver completed projects with comprehensive documentation, ensuring a smooth handover for industrial and utility infrastructure.',
  },
];

export const strength = [
  {
    icon: <FaTools className="text-4xl" />,
    title: "Precision Engineering",
    text: "Our team delivers high-quality infrastructure, from pipelines to tower foundations, with unmatched precision and expertise in civil construction and fabrication.",
    gradientClass: "bg-blue-400",
    borderClass: "border-blue-300",
    titleColor: "text-blue-800",
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Safety First",
    text: "We prioritize safety at every stage, ensuring secure and compliant construction for projects like petrol pumps and cement plants.",
    gradientClass: "bg-green-400",
    borderClass: "border-green-300",
    titleColor: "text-green-800",
  },
  {
    icon: <FaDraftingCompass className="text-4xl" />,
    title: "Tailored Solutions",
    text: "We collaborate with clients to design customized solutions for infrastructure projects, including solar installations and valve chambers, to meet unique needs.",
    gradientClass: "bg-orange-400",
    borderClass: "border-orange-300",
    titleColor: "text-orange-800",
  },
  {
    icon: <FaClock className="text-4xl" />,
    title: "Timely Delivery",
    text: "Our efficient processes ensure projects are completed on schedule, delivering robust infrastructure with no compromise on quality.",
    gradientClass: "bg-purple-400",
    borderClass: "border-purple-300",
    titleColor: "text-purple-800",
  },
];


export const services = [
    {
    icon: <FaIndustry className="text-3xl" />,
    title: "Cement Plant Construction",
    text: "We specialize in constructing high-capacity cement plants, delivering durable and compliant infrastructure for industrial production.",
    gradientClass: "bg-red-400",
    titleColor: "text-red-800",
    bgColor: "border-red-600",
    image: "/Projects/Cement.webp",
  },
  {
    icon: <FaGasPump className="text-3xl" />,
    title: "Petrol Pump Construction",
    text: "We provide end-to-end construction of petrol pump facilities, ensuring compliance, durability, and precision for fuel infrastructure projects.",
    gradientClass: "bg-blue-400",
    titleColor: "text-blue-800",
    bgColor: "border-blue-600",
    image: "/Projects/Petrol.webp",
  },
  {
    icon: <FaWrench className="text-3xl" />,
    title: "Pipeline Installation",
    text: "Our team expertly installs MS, DI, and HDPE pipelines, including full earthworks and trenching, for reliable utility infrastructure.",
    gradientClass: "bg-green-400",
    titleColor: "text-green-800",
    bgColor: "border-green-600",
    image: "/Projects/Pipe.webp",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: "Foundation Construction",
    text: "We build robust foundations for network towers, solar power plants, and industrial structures, ensuring stability and longevity.",
    gradientClass: "bg-orange-400",
    titleColor: "text-orange-800",
    bgColor: "border-orange-600",
    image: "/Projects/Tower.webp",
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: "Valve Chambers & Allied Works",
    text: "We construct valve chambers and allied civil infrastructure, delivering precise and durable solutions for industrial projects.",
    gradientClass: "bg-purple-400",
    titleColor: "text-purple-800",
    bgColor: "border-purple-600",
    image: "/Projects/ValveChamber.webp",
  },
  {
    icon: <FaWater className="text-3xl" />,
    title: "Rainwater Harvesting Systems",
    text: "We design and implement sustainable rainwater harvesting systems, enhancing water conservation for industrial and utility applications.",
    gradientClass: "bg-teal-400",
    titleColor: "text-teal-800",
    bgColor: "border-teal-600",
    image: "/Projects/Rainwater.webp",
  },

  {
    icon: <FaSolarPanel className="text-3xl" />,
    title: "Solar Plant Foundations",
    text: "We construct custom foundations for solar power plants, ensuring durability, precision, and compliance with renewable energy standards.",
    gradientClass: "bg-yellow-400",
    titleColor: "text-yellow-800",
    bgColor: "border-yellow-600",
    image: "/Projects/Solar.webp",
  },
  {
    icon: <FaFaucet className="text-3xl" />,
    title: "Air Valve Installation",
    text: "Our team expertly installs air valves for efficient and reliable pipeline systems, ensuring optimal performance in utility projects.",
    gradientClass: "bg-indigo-400",
    titleColor: "text-indigo-800",
    bgColor: "border-indigo-600",
    image: "/Projects/Valve.webp",
  },
  {
    icon: <FaPumpSoap className="text-3xl" />,
    title: "Pump House Installation",
    text: "We deliver complete construction of pump houses for industrial and utility applications, built for durability and functionality.",
    gradientClass: "bg-cyan-400",
    titleColor: "text-cyan-800",
    bgColor: "border-cyan-600",
    image: "/Projects/Pumphouse.webp",
  },
];



export const projects = [
  {
    title: "Tower Foundations",
    description: "Design and construction of robust tower foundations for telecom and energy infrastructure.",
    images: ["Tower.webp", "Tower1.webp", "Tower2.webp", "Tower3.webp"]
  },
  {
    title: "Solar Plant Foundations",
    description: "Custom concrete foundations and structures for solar power plants.",
    images: ["Solar.webp", "Solar1.webp"]
  },
  {
    title: "Air Valve Systems",
    description: "Fabrication and installation of pipelines with integrated valve chambers for efficient water management.",
    images: ["Valve.webp", "Valve1.webp", "Valve2.webp"]
  },
  {
    title: "Pump House Installations",
    description: "Complete construction and layout of pump houses for industrial and residential use.",
    images: ["Pumphouse.webp"]
  },
  {
    title: "Petrol Pump Erection",
    description: "Turnkey civil works for new petrol pump installations including canopy, tanks, and office area.",
    images: ["Petrol.webp", "Petrol1.webp"]
  },
  {
    title: "Fabrication and Erection of Cement Plants",
    description: "Construction of cement plant infrastructure and fabrication services.",
    images: ["Cement.webp", "Cement1.webp", "Cement2.webp", "Cement3.webp"]
  },
  {
    title: "Pipeline Systems",
    description: "Construction of efficient underground pipeline networks for water supply, drainage, and utilities.",
    images: ["Pipe.webp", "Pipe1.webp", "Pipe2.webp"]
  },
  {
    title: "Valve Chamber Installation",
    description: "Construction and integration of durable valve chambers for water and wastewater systems.",
    images: ["ValveChamber.webp", "ValveChamber1.webp", "ValveChamber2.webp"]
  },
  {
    title: "Rainwater Harvesting Systems",
    description: "Design and implementation of sustainable rainwater harvesting systems for residential, commercial, and industrial projects.",
    images: ["Rainwater.webp", "Rainwater1.webp"]
  }
];

export const faqdata = [
  {
    heading: "What types of construction projects does Soumya Enterprises handle?",
    para: "Soumya Enterprises specializes in civil construction and structural fabrication, delivering projects like petrol pumps, cement plants, pipelines, solar power foundations, valve chambers, and rainwater harvesting systems. We provide end-to-end solutions, from planning to handover, ensuring precision and compliance for industrial and utility infrastructure.",
  },
  {
    heading: "How does Soumya Enterprises ensure project quality and safety?",
    para: "We adhere to stringent quality standards and safety protocols at every stage, from thorough site assessments to precise execution. Our proven process includes detailed planning, skilled craftsmanship, and regular inspections, ensuring durable infrastructure like pipelines and foundations that meet industry regulations.",
  },
  {
    heading: "Can Soumya Enterprises customize solutions for unique project needs?",
    para: "Absolutely. We collaborate closely with clients to understand their specific requirements, designing tailored solutions for projects like specialized valve chambers or eco-friendly rainwater harvesting systems. Our flexible approach ensures your unique infrastructure needs are met with precision and efficiency.",
  },
  {
    heading: "What is the typical timeline for a Soumya Enterprises project?",
    para: "Project timelines vary based on scope and complexity, but we prioritize efficiency without compromising quality. For example, a petrol pump construction may take a few months, while pipelines or foundations depend on site conditions. We provide clear schedules during planning to keep you informed.",
  },
  {
    heading: "Why is Soumya Enterprises a reliable partner for infrastructure projects?",
    para: "With decades of experience, Soumya Enterprises is a trusted name in civil construction, having delivered projects like cement plants and solar foundations across industries. Our client-focused approach, skilled team, and commitment to timely, high-quality results make us a dependable partner for your infrastructure goals.",
  },
];

// whyChooseus
export const whyChooseus = [
  {
    icon: <FaHome className="text-4xl" />,
    title: "long time Expertise",
    text: "",
    gradientClass: "bg-[#7db1de]",
    borderClass: "border-[#a0c3e7]", // Light blue
    titleColor: "text-[#2a4d7f]", // Dark blue
  },
  {
    icon: <FaDollarSign className="text-4xl" />,
    title: "Great Values, Best Prices",
    text: "We are committed to finding you the best prices in the market and negotiating favorable deals to ensure you receive great value.",
    gradientClass: "bg-[#ff7f50]",
    borderClass: "border-[#ff9c80]", // Light coral
    titleColor: "text-[#b84f3f]", // Dark coral
  },
  {
    icon: <FaUserCheck className="text-4xl" />,
    title: "Project based Service",
    text: "We prioritize understanding client's unique needs and preferences, customizing the process for a smooth and stress-free experience.",
    gradientClass: "bg-[#58a7c2]",
    borderClass: "border-[#88bdd3]", // Light teal
    titleColor: "text-[#2d6f8b]", // Dark teal
  },
  {
    icon: <FaClipboardList className="text-4xl" />,
    title: "On-time delivery",
    text: "",
    gradientClass: "bg-[#f5a623]",
    borderClass: "border-[#f7c78e]", // Light golden
    titleColor: "text-[#b77314]", // Dark golden
  },
  {
    icon: <FaRegClock className="text-4xl" />,
    title: "Fast & Efficient Service",
    text: "",
    gradientClass: "bg-[#8e44ad]",
    borderClass: "border-[#a97cb2]", // Light purple
    titleColor: "text-[#5a2d76]", // Dark purple
  }
];

export const numbers = [
  {
    ref: "listingsRef",
    imageSrc: "/Rupee.svg",
    count: "1.2CR+",
    color: "bg-green-500",
    label: "Turnover Achieved",
  },
  {
    ref: "clientsRef",
    imageSrc: "/Client.svg",
    count: "10+",
    color: "bg-blue-500",
    label: "Happy Clients",
  },
  {
    ref: "soldRef",
    imageSrc: "/Sold.svg",
    count: "180+",
    color: "bg-red-500",
    label: "Projects Completed",
  },
];