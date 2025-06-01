// pages\about.jsx
"use client";
import { people, strength, numbers, services, faqdata, workflowSteps } from "../data/Data";
import React, { useEffect, useRef, useState } from "react";
import FAQ from "@/components/FAQ";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <HeroServices />
      <History />
      <ChooseUs />
      <Principles />
      <Workflow />
      <OrgChart />
      <Testimonials />
      <FAQs />
    </div>
  );
}

const HeroServices = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-200 text-gray-800 py-20 md:py-36 overflow-hidden">
      {/* Wave Effect at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24">
        <svg
          className="w-full h-full text-blue-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,192C672,160,768,96,864,96C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-p_sb text-black mb-6">
              About Soumya Enterprises
            </h1>
            <p className="text-base sm:text-lg font-mont text-left text-gray-700">
              Soumya Enterprises specializes in comprehensive civil construction and structural fabrication services, with proven expertise in the erection and development of infrastructure for petrol pumps, cement plants, and pump houses.
            </p>
          </div>

          {/* Right: Image/Graphic */}
          <div className="relative flex justify-center animate-slideIn">
            <Image
              src="/hero.webp"
              alt="Soumya Enterprises civil construction blueprint"
              width={500}
              height={400}
              className="rounded-lg shadow-lg border-2 border-white object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  return (
    <section className="bg-white py-20 text-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
        <div className="mx-auto">
          <div className="mb-12 text-left">
            <h1 className="mt-2 text-4xl font-p_sb tracking-tight text-pretty text-blue-950 sm:text-6xl">
              Company Overview
            </h1>
            <p className="mt-6 text-xl/8 sm:text-2xl/8 text-blue-900 font-mont">
              Building tomorrow’s infrastructure with precision, innovation, and trust
            </p>
          </div>

          <div className="grid gap-14 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-white rounded-xl border-gradient-to-r from-blue-600 to-blue-900 hover:scale-105 transition-transform duration-300">
                <p className="text-justify text-base leading-relaxed font-mont text-gray-700">
                  Founded in 2019, <strong className="font-p_md">Soumya Enterprises</strong> is a trusted name in <strong className="font-p_md">civil construction</strong> and <strong className="font-p_md">structural fabrication</strong>, delivering high-quality <strong className="font-p_md">infrastructure solutions</strong> across India. Specializing in projects like <strong className="font-p_md">petrol pump construction</strong>, <strong className="font-p_md">pipeline systems</strong>, <strong className="font-p_md">solar plant foundations</strong>, and <strong className="font-p_md">valve chamber installations</strong>, Soumya Enterprises combines expertise, innovation, and client-centric approaches to transform infrastructure visions into reality. With a commitment to durability and compliance, the company ensures every project meets stringent industry standards, making it a preferred partner for industrial and commercial developments.
                </p>
              </div>
              <div className="bg-white rounded-xl border-gradient-to-r from-blue-600 to-blue-900 hover:scale-105 transition-transform duration-300">
                <p className="text-justify text-base leading-relaxed font-mont text-gray-700">
                  <strong className="font-p_md">Soumya Enterprises</strong> excels in <strong className="font-p_md">end-to-end construction services</strong>, from planning and design to execution and handover. Its portfolio includes <strong className="font-p_md">tower foundations</strong>, <strong className="font-p_md">pump house installations</strong>, <strong className="font-p_md">cement plant fabrication</strong>, and <strong className="font-p_md">rainwater harvesting systems</strong>, showcasing versatility in <strong className="font-p_md">civil engineering projects</strong>. By leveraging advanced techniques and cost-effective strategies, <strong className="font-p_md">Soumya Enterprises</strong> optimizes resources to deliver <strong className="font-p_md">affordable construction solutions</strong> without compromising quality. This approach has earned the company a reputation for reliability in <strong className="font-p_md">infrastructure development</strong>.
                </p>
              </div>
              <div className="bg-white rounded-xl border-gradient-to-r from-blue-600 hidden xl:block to-blue-900 hover:scale-105 transition-transform duration-300">
                <p className="text-justify text-base leading-relaxed font-mont text-gray-700">
                  The team at <strong className="font-p_md">Soumya Enterprises</strong> brings decades of experience, offering in-depth insights into <strong className="font-p_md">construction trends</strong> and project requirements. Whether it’s <strong className="font-p_md">underground pipeline networks</strong> or <strong className="font-p_md">solar infrastructure</strong>, <strong className="font-p_md">Soumya Enterprises</strong> tailors solutions to meet unique client needs, ensuring seamless project delivery. Its <strong className="font-p_md">client-oriented construction</strong> philosophy prioritizes understanding client goals, providing personalized services that enhance satisfaction. From <strong className="font-p_md">commercial construction</strong> to sustainable projects like rainwater harvesting, <strong className="font-p_md">Soumya Enterprises</strong> aligns every decision with long-term objectives.
                </p>
              </div>
              <div className="bg-white rounded-xl border-gradient-to-r from-blue-600 to-blue-900 hover:scale-105 transition-transform duration-300">
                <p className="text-justify text-base leading-relaxed font-mont text-gray-700">
                  Strategically headquartered to serve diverse markets, <strong className="font-p_md">Soumya Enterprises</strong> maintains a robust network to support <strong className="font-p_md">construction project management</strong>. The company’s focus on <strong className="font-p_md">quality infrastructure</strong> and timely execution positions it as a leader in the <strong className="font-p_md">civil construction industry</strong>. For businesses seeking <strong className="font-p_md">reliable construction partners</strong>, <strong className="font-p_md">Soumya Enterprises</strong> offers expertise, precision, and value-driven solutions.
                </p>
              </div>
            </div>

            {/* Services & Milestones */}
            <div className="rounded-xl">
              <h3 className="text-2xl font-p_sb text-blue-900 mb-6">Key Services</h3>
              <div className="grid gap-4">
                {[
                  'Solar Plant Foundations',
                  'Petrol Pump Construction',
                  'Underground Pipeline Systems',
                  'Valve Chamber Installations',
                  'Cement Plant Fabrication',
                  'Rainwater Harvesting Systems',
                  'Pump House Installations',
                  'Tower Foundations',
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-blue-900 font-mont">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t pt-6 border-blue-200">
                <h3 className="text-2xl font-p_sb text-blue-900 mb-6">Major Milestones</h3>
                <div className="grid gap-4">
                  {[
                    'Founded in 2019',
                    'Achieved ₹1.2 Cr+ annual turnover',
                    'Completed over 150 projects',
                    'Expanded into Fabrication & Erection services',
                  ].map((milestone, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span className="text-blue-900 font-mont">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChooseUs = () => {
  return (
    <>
      <section className="text-gray-600 body-font py-20 flex flex-col justify-center items-center gap-10 bg-[#F9F9F9]">
        <div className="max-w-screen-xl w-full text-center flex flex-col gap-7 px-5 lg:px-20">
            <div className="text-left">
            <h1 className="mt-2 text-4xl font-p_sb tracking-tight text-pretty text-blue-950 sm:text-6xl">
              Our Expertise
            </h1>
            <p className="mt-6 text-xl/8 sm:text-2xl/8 text-blue-900 font-mont">
              We Turn Your Vision into Reality
            </p>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl text-justify font-mont mt-4">
              At Soumya Enterprises, we deliver end-to-end civil construction and structural fabrication solutions. Our expert team collaborates with you to understand your project needs, executes with precision for infrastructure like petrol pumps, pipelines, and solar installations, and ensures a seamless handover with complete documentation.
            </p>
          </div>
        </div>
        <div className="max-w-screen-xl px-5 pt-5 mx-auto flex flex-wrap lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 -m-4">
            <div className="bg-black rounded-xl shadow-lg overflow-hidden">
              <Image width={600} height={600}
                className="w-full h-full object-cover"
                src="/Strength.webp"
                alt="Choose Us"
              />
            </div>
            <div>
              {strength.slice(0, 3).map((data, idx) => (
                <div className="p-4" key={idx}>
                  <div
                    className={`flex rounded-lg p-5 sm:flex-row flex-col h-full`}
                  >
                    <div
                      className={`w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-white ${data.gradientClass} flex-shrink-0`}
                    >
                      {data.icon}
                    </div>
                    <div className="flex-grow">
                      <h2
                        className={`${data.titleColor} text-lg title-font font-p_md mb-2`}
                      >
                        {data.title}
                      </h2>
                      <p className="leading-relaxed font-mont font-medium text-base">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Principles = () => {
  const [tab, setTab] = useState("mission");
  const LaptopContent = [
    {
      tab: "mission",
      content:
        "To deliver innovative, sustainable, and client-centric civil construction solutions that enhance infrastructure across India. Soumya Enterprises is dedicated to providing high-quality projects like petrol pump construction, pipeline systems, and solar plant foundations, ensuring durability, compliance, and exceptional value through transparent processes and a relentless focus on client satisfaction.",
      imageSrc: [
        "/AboutIcons/RocketMobile.svg",
        "/AboutIcons/RocketLG.svg",
      ],
      bgColor: ["bg-[#D32F2F]", "bg-[#FC4E4E]"],
    },
    {
      tab: "vision",
      content:
        "To be India’s most trusted civil construction company, renowned for transforming landscapes with world-class infrastructure solutions. Soumya Enterprises aims to set new industry standards by driving innovation, embracing sustainability, and delivering projects like tower foundations and rainwater harvesting systems that contribute to India’s progress.",
      imageSrc: [
        "/AboutIcons/CraneMobile.svg",
        "/AboutIcons/CraneLG.svg",
      ],
      bgColor: ["bg-[#8E24AA]", "bg-[#A94CC0]"]

    },
    {
      tab: "values",
      content:
        "Soumya Enterprises is built on integrity, excellence, sustainability, and a client-first approach. We uphold the highest standards of transparency and ethical practices in every project, from cement plant fabrication to construction project management. Our commitment to quality and social responsibility ensures positive contributions to communities and the environment.",
      imageSrc: [
        "/AboutIcons/HeartMobile.svg",
        "/AboutIcons/HeartLG.svg",
      ],
      bgColor: ["bg-[#00796B]", "bg-[#10BEAA]"],
    },
  ];
  const activeContent = LaptopContent.find((item) => item.tab === tab);

  return (
    <section className="py-20">
      <h2 className="text-3xl lg:text-5xl font-p_sb tracking-tight text-blue-950 mb-12 text-center">
        Our Core Principles
      </h2>

      {/* Mobile Content */}
      <div className="flex flex-col justify-center w-[90%] max-w-[500px] mx-auto items-center md:hidden">
        {LaptopContent.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center w-full text-center"
          >
            <div
              className={`w-20 h-20 relative top-10 border-2 ${item.bgColor[1]} rounded-3xl ml-5 flex justify-center items-center`}
            >
              <Image width={100} height={100}
                src={item.imageSrc[0]}
                className={`${index === 0 ? "h-[100%]" : "h-[50%]"}`}
                alt=""
              />
            </div>
            <div
              className={`rounded-xl pt-14 pb-6 px-5 ${item.bgColor[0]} text-white text-left`}
            >
              <h3 className="text-3xl font-p_bd capitalize mb-3">{item.tab}</h3>
              <p className="font-mont opacity-85 tracking-wider">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Laptop Content */}
      {/* Buttons */}
      <div className="hidden md:grid grid-cols-3 py-3 border-b-2 border-[#3B3B3B] w-[80%] lg:w-[70%] mx-auto mb-10 max-w-screen-md">
        <div
          className={`text-center border-r font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${tab === "mission" ? "text-[#FFF]" : "text-[#D32F2F]"
            }`}
          onClick={() => setTab("mission")}
        >
          <p
            className={`${tab === "mission"
              ? "bg-[#D32F2F] shadow-xl shadow-[#D32F2F35]"
              : ""
              } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Mission
          </p>
        </div>
        <div
          className={`text-center border-x font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${tab === "vision" ? "text-[#FFF]" : "text-[#7B1FA2]"
            }`}
          onClick={() => setTab("vision")}
        >
          <p
            className={`${tab === "vision"
              ? "bg-[#7B1FA2] shadow-xl shadow-[#7B1FA235]"
              : ""
              } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Vision
          </p>
        </div>
        <div
          className={`text-center border-l font-p_sb text-xl lg:text-2xl border-[#3B3B3B] ${tab === "values" ? "text-[#FFF]" : "text-[#00796B]"
            }`}
          onClick={() => setTab("values")}
        >
          <p
            className={`${tab === "values"
              ? "bg-[#00796B] shadow-xl shadow-[#00796B35]"
              : ""
              } transition-all duration-100 ease-in-out w-max mx-auto cursor-pointer px-5 py-2 rounded-sm`}
          >
            Values
          </p>
        </div>
      </div>
      {/* Content area */}
      <div
        className={`hidden md:flex flex-col justify-center items-center gap-10 md:w-[90%] lg:w-[80%] max-w-screen-lg mx-auto py-10 px-14 text-white rounded-xl transition-all ease-in-out duration-300 ${activeContent.bgColor[0]}`}
      >
        <div className="w-56 h-56 rounded-full bg-white flex justify-center items-center">
          <Image width={200} height={200} src={activeContent.imageSrc[1]} className="h-[80%]" alt="" />
        </div>
        <div className="flex flex-col justify-center w-full gap-5">
          <h3 className="text-4xl font-p_bd capitalize text-center">
            Our {activeContent.tab === "mission" && "Goal"}{" "}
            {activeContent.tab === "values" && "Guiding"}{" "}
            {activeContent.tab !== "mission" &&
              tab.charAt(0).toUpperCase() + tab.slice(1)}
          </h3>
          <p className="text-lg font-mont opacity-85 tracking-wider text-justify lg:w-[90%] mx-auto leading-relaxed">
            {activeContent.content}
          </p>
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-p_sb tracking-tight text-blue-950 mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                <div className={`text-4xl mb-4 ${step.color}`}>{step.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${step.color}`}>{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const OrgChart = () => {
  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container px-5 mx-auto">
        <h2 className="text-3xl lg:text-5xl font-p_sb tracking-tight text-blue-950 mb-6 text-center">
          Our Leadership Team
        </h2>
        <p className="mt-6 text-xl/8 sm:text-2xl/8 text-blue-900 font-mont max-w-6xl mx-auto mb-12 text-center">
          Meet the <strong className="font-p_md">Soumya Enterprises leadership</strong> driving our <strong className="font-p_md">civil construction team</strong> to deliver exceptional <strong className="font-p_md">infrastructure solutions</strong> across India.
        </p>
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Level 1: Founder */}
            <div className="relative mb-10">
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-64 border border-blue-200">
                <h3 className="text-lg font-p_md text-blue-950">Alka Vyas</h3>
                <p className="text-sm font-mont text-gray-600">Founder</p>
              </div>
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-blue-500"></div>
            </div>
            {/* Level 2: CEO */}
            <div className="relative mb-10">
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-64 border border-blue-200">
                <h3 className="text-lg font-p_md text-blue-950">Abhishek Vyas</h3>
                <p className="text-sm font-mont text-gray-600">CEO</p>
                <p className="text-xs font-mont text-gray-500">+91-982-567-8901</p>
              </div>
              <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-0.5 h-10 bg-blue-500"></div>
            </div>
            {/* Level 3: Project Manager */}
            <div className="relative mb-10">
              <div className="bg-white p-4 rounded-lg shadow-md text-center w-64 border border-blue-200">
                <h3 className="text-lg font-p_md text-blue-950">Shreyansh Vyas</h3>
                <p className="text-sm font-mont text-gray-600">Project Manager</p>
              </div>
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-blue-500"></div>
            </div>
            {/* Level 4: Supervisor & Manager */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 relative">
              <div className="relative">
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-blue-500 sm:hidden"></div>
                <div className="absolute top-[-20px] -right-[17px] w-1/2 h-0.5 bg-blue-500 hidden sm:block"></div>
                <div className="absolute top-[-20px] left-[56%] w-0.5 h-5 bg-blue-500 hidden sm:block"></div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center w-64 border border-blue-200">
                  <h3 className="text-lg font-p_md text-blue-950">Arjun Singh</h3>
                  <p className="text-sm font-mont text-gray-600">Project Supervisor</p>
                </div>
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-blue-500 sm:hidden"></div>
              </div>
              <div className="relative">
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-blue-500 sm:hidden"></div>
                <div className="absolute top-[-20px] -left-[17px] w-1/2 h-0.5 bg-blue-500 hidden sm:block"></div>
                <div className="absolute top-[-20px] right-[56%] w-0.5 h-5 bg-blue-500 hidden sm:block"></div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center w-64 border border-blue-200">
                  <h3 className="text-lg font-p_md text-blue-950">Sandeep Kumar</h3>
                  <p className="text-sm font-mont text-gray-600">Labour Supervisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, name, title, number }) => (
  <div className="p-4 md:w-1/2 w-full">
    <div className="h-full bg-gray-100 p-8 rounded">
      <div className="flex gap-5 mb-6">
        {[...Array(number)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ))}
      </div>
      <p className="leading-relaxed text-lg font-mont mb-6">
        "{quote}"
      </p>
      <a className="inline-flex items-center">
        <span className="flex-grow flex flex-col">
          <span className="title-font font-p_md text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm uppercase">{title}</span>
        </span>
      </a>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Soumya Enterprises built our petrol pump with outstanding quality and ensured all compliance standards were met. Their team was professional and efficient throughout.",
      name: "Sanjana Gupta",
      title: "Petrol Pump Manager",
      number: 5,
    },
    {
      quote: "The pipeline installation for our utility project was completed ahead of schedule. Soumya Enterprises’ expertise and coordination made it a smooth experience.",
      name: "Vikram Shah",
      title: "Industrialist",
      number: 4,
    },
  ];

  return (
    <div className="container px-5 py-10 mx-auto">
      <h2 className="text-center text-3xl font-p_sb tracking-tight sm:text-4xl lg:text-5xl mb-12">
        Testimonials
      </h2>
      <div className="flex flex-wrap -m-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            number={testimonial.number}
          />
        ))}
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-white py-20 container mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-pretty text-3xl font-p_sb tracking-tight sm:text-4xl lg:text-5xl mb-12">
          Frequently Asked Questions
        </h2>
      </div>
      <FAQ data={faqdata} />
    </div>
  );
};


