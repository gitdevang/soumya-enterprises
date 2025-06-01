import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => {
  console.log("Custom 404 page rendering for Soumya Enterprises");
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Soumya Enterprises</title>
        <meta name="description" content="Oops! The page you're looking for doesn't exist. Return to Soumya Enterprises' homepage to explore our civil construction services." />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-5 py-10">
        <div className="text-center text-white">
          <h1 className="text-8xl md:text-9xl font-p_bd mb-4 animate-fadeIn">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-p_bd mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-base md:text-lg font-mont text-gray-200 max-w-lg mx-auto mb-8">
            It seems the page you’re looking for doesn’t exist. <br/> Let’s get you back to exploring Soumya Enterprises’ world-class civil construction services.
          </p>
          <Link href="/">
            <button className="inline-block py-3 px-8 border-2 border-blue-900 font-mont font-medium rounded-md text-white shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;