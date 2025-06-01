import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import QualipactSlider from '@/components/QualipactSlider';
import { projects, services, workflowSteps } from '@/data/Data';
import Link from 'next/link';


export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | Soumya Enterprises</title>
        <meta name="description" content="Explore the range of civil and fabrication services offered by Soumya Enterprises." />
      </Head>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/Projects/Team.webp"
            alt="Soumya Enterprises civil construction project"
            fill
            className="object-cover object-top opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 lg:px-20 flex flex-col items-center justify-center text-center animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-p_sb text-white mb-4">
            Civil Construction & <br /> Fabrication Services
          </h1>
        </div>
      </section>
      <main className="body-font py-20 flex flex-col justify-center items-center gap-10" id="services">
        <div className="max-w-screen-lg w-full text-center flex flex-col gap-7" >
          <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
            Our Services
          </h1>
          <p className="text-[#414141] text-base md:text-lg text-justify font-mont px-5">
            At Soumya Enterprises, we take pride in delivering world-class <span className='font-semibold'>civil construction</span> and structural fabrication services that power India’s <span className='font-semibold'>infrastructure growth</span>. Our expertise spans a wide range of projects, including <span className='font-semibold'>petrol pump construction</span>, <span className='font-semibold'>pipeline systems</span>, <span className='font-semibold'>solar plant foundations</span>, <span className='font-semibold'>cement plant fabrication</span>, <span className='font-semibold'>tower foundations</span>, <span className='font-semibold'>rainwater harvesting systems</span>, and <span className='font-semibold'>pump house installations</span>. With a commitment to <span className='font-semibold'>quality</span>, <span className='font-semibold'>precision</span>, and <span className='font-semibold'>timely delivery</span>, we ensure every project meets the <span className='font-semibold'>highest industry standards</span>. Whether you’re looking to build <span className='font-semibold'>sustainable energy solutions</span> or <span className='font-semibold'>robust industrial infrastructure</span>, our team provides <span className='font-semibold'>end-to-end support</span>—from initial planning and design to flawless execution and handover. Partner with us to transform your vision into impactful, <span className='font-semibold'>long-lasting structures</span> that drive progress across industries.
          </p>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((data, idx) => (
              <div className="p-4" key={idx}>
                <div
                  className={`flex rounded-lg p-8 flex-col justify-center items-center text-center h-full border-2 ${data.bgColor}`}
                >
                  <div
                    className={`w-16 h-16 inline-flex items-center justify-center rounded-full text-white ${data.gradientClass} mb-4`}
                  >
                    {data.icon}
                  </div>
                  <div className="flex-grow">
                    <h2
                      className={`${data.titleColor} text-lg font-p_md mb-2`}
                    >
                      {data.title}
                    </h2>
                    <p className="leading-relaxed font-mont_md text-base text-[#5D5D5D] text-justify">
                      {data.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 mt-10" id="projects">
          <div className="max-w-screen-lg mx-auto w-full text-center flex flex-col gap-7">
            <h1 className="text-4xl md:text-5xl font-p_bd max-w-4xl mx-auto">
              Our Projects
            </h1>
            <p className="text-[#414141] text-base md:text-lg text-justify font-mont">
              Soumya Enterprises has built a strong portfolio of <span className='font-semibold'>infrastructure projects</span> that showcase our expertise in <span className='font-semibold'>civil construction</span> and structural fabrication. Our recent works include <span className='font-semibold'>petrol pump installations</span> for leading fuel companies, <span className='font-semibold'>pipeline systems</span> for efficient resource transport, and <span className='font-semibold'>solar plant foundations</span> that support India’s renewable energy goals. We’ve also delivered <span className='font-semibold'>cement plant fabrication</span> for industrial clients and <span className='font-semibold'>tower foundations</span> for telecom and energy sectors, alongside sustainable solutions like <span className='font-semibold'>rainwater harvesting systems</span> and <span className='font-semibold'>pump house installations</span>. Each project reflects our dedication to <span className='font-semibold'>quality execution</span>, <span className='font-semibold'>timely completion</span>, and adherence to the <span className='font-semibold'>highest safety standards</span>. Discover how we turn complex challenges into <span className='font-semibold'>successful outcomes</span> for clients across diverse industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container px-5 mt-10">
            {projects.map((service, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 justify-between bg-white border-2 border-gray-300 rounded-lg shadow p-5 hover:shadow-lg transition">
                <div className="flex flex-col items-center">
                  <h2 className="text-xl font-p_sb mb-2 text-center">{service.title}</h2>
                  <p className="text-center font-mont_md text-[#5D5D5D]">{service.description}</p>
                </div>
                <div className="relative w-full h-80 mb-4 overflow-hidden rounded-lg">
                  <QualipactSlider
                    images={service.images.map(img => `/Projects/${img}`)}
                    imageStyle="w-full h-80"
                    dotBefore="bg-white"
                    borderColor="border-gray-300"
                    dotAfter="bg-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}