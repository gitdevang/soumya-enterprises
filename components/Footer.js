// components/Footer.js
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const InvestorCTA = () => {
  const pathname = usePathname();

  // Define valid routes in your app
  const validRoutes = ['/', '/contact', '/services', '/about']; // Add all your valid routes here

  // Hide CTA on /contact page or if the route is not valid (likely a 404 page)
  if (pathname === '/contact' || !validRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="flex items-center justify-center py-16 px-5 bg-gradient-to-r from-blue-600 to-blue-900">
      <div className="rounded-xl max-w-screen-sm xl:max-w-screen-md p-10 text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-p_bd text-blue-950">
          Invest in Infrastructure Excellence
        </h2>
        <p className="font-mont font-semibold text-gray-700 mt-4 max-w-md mx-auto">
          Invest in India’s Infrastructure Future with a Leader in Civil Construction
        </p>
        <Link href="/contact">
          <button className="inline-block py-3 px-10 bg-gradient-to-r from-blue-600 to-blue-900 font-mont font-medium rounded-md mx-auto mt-6 text-white shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Join Us as an Investor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <>
      <InvestorCTA />
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center font-p_reg">
          <p className="mb-2">© {new Date().getFullYear()} Soumya Enterprises. All rights reserved.</p>
          <p className="text-sm"> Designed & Developed by <Link href={"https://qualipact.com"}><span className="font-p_sb text-blue-400 hover:underline">Qualipact</span></Link></p>
        </div>
      </footer>
    </>
  );
}