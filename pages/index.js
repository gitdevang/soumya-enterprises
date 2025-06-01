// pages\index.js

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import { numbers, services, workflowSteps } from '@/data/Data';
import { BiSolidHomeHeart } from "react-icons/bi";
import { RiHomeSmileFill, RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaClipboardList, FaKey, FaPeopleGroup } from "react-icons/fa6";
import { FaSearch, FaTools } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <RenderHeroSection />
      <RenderWhoWeAreSection />
      <RenderServicesSection />
      <RenderProjectsSection />
      <RenderWorkflow />
      <RenderClientsSection />

    </>
  );
}

//  Hero Section
const RenderHeroSection = () => {
  const [visibleCard, setVisibleCard] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // useState to track the interval ID

  useEffect(() => {
    const id = setInterval(() => {
      setVisibleCard((prevVisibleCard) => (prevVisibleCard + 1) % 3);
    }, 2500);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  function handleDots(idx) {
    setVisibleCard(idx);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }

return (
    <section className="relative bg-black text-white py-24 min-h-screen flex justify-center items-center px-5">
      <div className="w-[90%] max-w-[450px] md:w-[100%] md:container mx-auto text-left md:text-center z-20 relative">
        <h1 className="text-[2rem] lg:text-5xl xl:text-6xl font-p_bd leading-tight lg:mb-6">
          Crafting Civil <br className="md:hidden" />
          Excellence <br />
          From The <br className="md:hidden" />
          Ground Up
        </h1>
        <div className="hidden md:flex flex-wrap gap-x-10 justify-center items-center ">
          {numbers.map((item, index) => (
            <div className="flex flex-col justify-center items-center text-center">
              <div
                key={index}
                className={`w-20 aspect-square rounded-full flex justify-center items-center ${item.color} relative top-10 shadow-xl shadow-[#3B3B3B25]`}
              >
                <Image width={80} height={80} src={item.imageSrc} className="h-[60%]" alt="" />
              </div>
              <div className="rounded-xl h-32 bg-white text-black flex items-end justify-center px-20">
                <div className="h-[calc(100%-2.5rem)] w-full flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-mont_bd text-[#302E2E]">
                    {item.count}
                  </h3>
                  <p className="text-xl font-p_sb text-[#555353]">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:hidden justify-center items-center gap-5">
          <div className="relative h-72 w-full">
            {numbers.map((data, idx) => (
              <div
                key={idx}
                className={`h-full w-[100%] bg-white mt-6 sm:mt-10 rounded-xl border-2 border-white/65 p-5 opacity-0 ${
                  visibleCard === idx
                    ? idx === 0
                      ? "card1-entry"
                      : idx === 1
                      ? "card2-entry"
                      : "card3-entry"
                    : idx === 0
                    ? "card1-exit"
                    : idx === 1
                    ? "card2-exit"
                    : "card3-exit"
                } flex flex-col items-center justify-center gap-5 absolute`}
              >
                <div
                  className={`w-28 h-28 rounded-full ${data.color} flex justify-center items-center`}
                >
                  <Image width={60} height={60} src={data.imageSrc} className="h-[50%]" alt="" />
                </div>
                <div className="text-black text-center">
                  <h2 className="text-3xl font-p_bd">{data.count}</h2>
                  <p className="text-xl font-mont font-medium">{data.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 relative mt-5 sm:mt-12">
            {numbers.map((data, idx) => (
              <div
                onClick={() => handleDots(idx)}
                key={idx}
                className={`w-5 h-5 rounded-full ${
                  visibleCard == idx ? data.color : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <video
        autoPlay
        preload="auto"
        muted
        loop
        className="z-10 absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-75"
      >
        <source src="/videos/About.mp4" type="video/mp4" />
      </video>
    </section>
  );
};


//  Who We Are Section
const RenderWhoWeAreSection = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 max-w-screen-xl mx-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden">
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Heading Section */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="mt-2 text-4xl font-p_sb tracking-tight text-pretty text-blue-950 sm:text-6xl">
                  Trusted Infrastructure Solutions
                </h1>
                <p className="mt-6 text-xl/8 sm:text-2xl/8 text-blue-900 font-mont">
                  Crafting Robust Civil Projects with Expertise and Precision!
                </p>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:sticky lg:top-16 lg:col-start-2 mx-auto lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-12">
            <Image width={400} height={400} className="lg:w-[57rem] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 shadow-gray-600/50" src="/Infra.webp" alt="Why Choose Us Image" />
          </div>
          {/* Sub-heading Section */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/6 text-gray-700 lg:max-w-lg">
                <p className="leading-[1.65rem] font-mont">
                  At Soumya Enterprises, we deliver expertly planned civil construction solutions tailored to your infrastructure needs, ensuring durability, compliance, and maximum value for your investment. Our team provides insights to execute projects with precision, optimizing quality and efficiency.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span className="text-justify font-mont">
                      <strong className="font-p_sb text-base/8 tracking-wide text-blue-900">
                        Comprehensive Expertise —
                      </strong>{" "}
                      With decades of experience in civil construction, we offer in-depth knowledge of infrastructure projects like petrol pumps, pipelines, and solar foundations, ensuring robust and reliable solutions every time.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-mont">
                      <strong className="font-p_sb text-base/8 tracking-wide text-blue-900">
                        Cost-Effective Delivery —
                      </strong>{" "}
                      We provide high-quality construction services within your budget, optimizing resources to deliver durable infrastructure like valve chambers and pump houses without compromising on standards.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="text-justify font-mont">
                      <strong className="font-p_sb text-base/8 tracking-wide text-blue-900">
                        Client-Centric Approach —
                      </strong>{" "}
                      Your project is our priority. We understand your unique requirements and deliver customized solutions, ensuring complete satisfaction from planning to handover for all construction projects.
                    </span>
                  </li>
                </ul>
                <p className="mt-8 font-mont">
                  We analyze your project requirements, industry standards, and site conditions to deliver infrastructure that aligns with your long-term goals, ensuring efficiency and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

//  Our Services Section
const RenderServicesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-5 relative bg-gray-50">
      <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
      <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
        Our Core Services
      </h1>
      <p className="text-[#414141] text-base md:text-lg text-justify font-mont">
        Soumya Enterprises specializes in delivering high-quality civil construction and structural fabrication services. From petrol pump construction and pipeline systems to solar plant foundations and cement plant fabrication, we provide end-to-end infrastructure solutions tailored to your needs.
      </p>
        <div className="flex flex-col gap-8">
          {services.slice(0, 4).map((service, id) => (
            <div
              key={id}
              className={`bg-white border-2 border-gray-300 rounded-3xl max-w-screen-lg w-full p-2 flex items-center flex-col justify-center ${(id + 1) % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${(id + 1) === 1 || (id + 1) === 3 ? "slide-right" : "slide-left"} gap-10 mx-auto`}
            >
              <div className="flex flex-col gap-3 px-3 py-3">
                <h3
                  className={`text-3xl font-p_sb text-blue-900 text-center ${(id + 1) % 2 === 0 ? "lg:text-left" : "lg:text-right"
                    }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`font-mont text-gray-700 text-lg text-center ${(id + 1) % 2 === 0 ? "lg:text-justify" : "lg:text-justify"
                    }`}
                >
                  {service.text}
                </p>
              </div>
              <Image
                height={300}
                width={500}
                src={service.image}
                alt={service.title}
                className="h-80 w-full object-cover rounded-3xl m-3 shadow-x hover:shadow-2xl transition-all duration-300 shadow-gray-500/50"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services#services">
            <span className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-p_reg hover:bg-blue-700 transition">
              View All Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

//  Our Projects Section
function RenderProjectsSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-5 relative">
      <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
      <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
        Our Recent Projects
      </h1>
      <p className="text-[#414141] text-base md:text-lg text-justify font-mont">
        Explore our portfolio of successfully completed infrastructure projects across India. From constructing state-of-the-art petrol pumps to installing robust pipeline systems and solar plant foundations, Soumya Enterprises has delivered excellence in civil construction for diverse industries.
      </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border  border-gray-300 rounded-lg overflow-hidden">
            <Image width={200} height={200} src="/Projects/Petrol1.webp" alt="Petrol Pump Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Petrol Pump Project</h3>
              <p className="text-gray-700">Complete construction of a modern petrol pump facility.</p>
            </div>
          </div>
          <div className="border  border-gray-300 rounded-lg overflow-hidden">
            <Image width={200} height={200} src="/Projects/Solar.webp" alt="Solar Installation" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Solar Installation</h3>
              <p className="text-gray-700">Robust foundation for a large-scale solar power plant.</p>
            </div>
          </div>
          <div className="border  border-gray-300 rounded-lg overflow-hidden">
            <Image width={200} height={200} src="/Projects/Cement1.webp" alt="Cement Plant" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">Cement Plant</h3>
              <p className="text-gray-700">Infrastructure for a high-capacity cement production facility.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/services#projects">
            <span className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-p_reg hover:bg-blue-700 transition">
              View All Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RenderWorkflow() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-5 relative bg-gray-50">
      <div className="max-w-screen-lg w-full text-center flex flex-col gap-7">
      <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
        How We Work
      </h1>
      <h3 className="text-lg md:text-xl lg:text-[1.65rem] text-[#191F8A] font-p_sb max-w-md mx-auto md:max-w-none">
        Let us build your vision with precision,
        <br className="md:block hidden" /> quality, and reliability.
      </h3>
      <p className="text-[#5D5D5D] text-base md:text-lg lg:text-xl text-justify font-mont font-medium">
        At Soumya Enterprises, we follow a streamlined process to ensure project success. We begin with in-depth research and planning, followed by precise execution using advanced techniques. Our team ensures quality at every step, culminating in a seamless project handover that meets your expectations.
      </p>

        <div className="flex w-full relative mt-10 max-w-[415px] md:max-w-screen-md mx-auto">
          <div className="w-full hidden md:flex flex-col gap-20 justify-center relative">
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#EDD9FF] relative z-[2] hidden opacity-0 md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#3037B7]">
              <p className="w-[calc(100%-5rem)] text-center">Research & Analysis</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#fdf5bd] relative z-[2] hidden md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#877C19]">
              <p className="w-[calc(100%-5rem)] text-center">Project Planning</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#FFE1C2] relative z-[2] hidden opacity-0 md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#AD6217]">
              <p className="w-[calc(100%-5rem)] text-center">Quality Execution</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#C7FFC9] relative z-[2] hidden md:flex justify-start items-center text-xl xl:text-2xl font-p_md text-[#28802C]">
              <p className="w-[calc(100%-5rem)] text-center">Project Handover</p>
            </div>
          </div>
          <div className="w-max flex flex-col gap-16 justify-center items-center relative">
        <div className="w-20 aspect-square text-white text-4xl flex justify-center items-center rounded-full bg-[#a786fa] shadow-xl shadow-[#cfb4fac4] z-[3]">
          <FaSearch />
        </div>
        <div className="w-20 aspect-square text-white text-4xl flex justify-center items-center rounded-full bg-[#decb27] shadow-xl shadow-[#f1dc3ac4] z-[3]">
          <FaClipboardList />
        </div>
        <div className="w-20 aspect-square text-white text-4xl flex justify-center items-center rounded-full bg-[#FFB061] shadow-xl shadow-[#FFB061c4] z-[3]">
          <FaTools />
        </div>
        <div className="w-20 aspect-square text-white text-4xl flex justify-center items-center rounded-full bg-[#A5D6A7] shadow-xl shadow-[#A5D6A7c4] z-[3]">
          <FaKey />
        </div>
        <div className="w-6 h-[95%] absolute top-1/2 transform -translate-y-1/2 bg-[#d1d1d1] z-[1]"></div>
      </div>
          <div className="w-full flex flex-col gap-20 justify-center relative">
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#EDD9FF] relative right-20 z-[2] flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#3037B7]">
              <p className="w-[calc(100%-5rem)] text-center">Research & Analysis</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#fdf5bd] relative right-20 z-[2] md:opacity-0 flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#877C19]">
              <p className="w-[calc(100%-5rem)] text-center">Project Planning</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#FFE1C2] relative right-20 z-[2] flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#AD6217]">
              <p className="w-[calc(100%-5rem)] text-center">Quality Execution</p>
            </div>
            <div className="w-[calc(100%+5rem)] h-16 rounded-full bg-[#C7FFC9] relative right-20 z-[2] md:opacity-0 flex justify-end items-center text-xl xl:text-2xl font-p_md text-[#28802C]">
              <p className="w-[calc(100%-5rem)] text-center">Project Handover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  Clients Section


function RenderClientsSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4 md:py-20 md:px-5 relative">
      <div className="max-w-screen-lg w-full text-center flex flex-col gap-8 md:gap-14">
        <h1 className="text-4xl lg:text-5xl font-p_bd max-w-4xl mx-auto">
          Our Esteemed Clients
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-20 md:gap-8 py-4">
          {['Essar.webp', 'BSNL.webp', 'Nayara.webp', 'Jio.webp', 'Ultratech.webp', 'BPCL.webp'].map((client, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={`/Clients/${client}`}
                alt={client}
                width={100} // Increased for larger display
                height={80} // Increased for larger display
                className="h-16 md:h-20 lg:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}