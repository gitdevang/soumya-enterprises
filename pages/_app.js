import '@/styles/globals.css';
import { Poppins, Montserrat, Archivo_Black } from 'next/font/google';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'], // Light, Regular, Medium, SemiBold, Bold, ExtraBold, Black
  variable: '--font-poppins',
  display: 'swap', // Prevents layout shift
});

// Initialize Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'], // Regular, Medium, SemiBold
  variable: '--font-montserrat',
  display: 'swap',
});

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const [menu, setMenu] = useState(false);
  const handleMenuToggle = () => setMenu(!menu);
  return (
    <div className={`${poppins.variable} ${montserrat.variable} ${archivo.variable} `}>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-archivo text-blue-600">
            Soumya Enterprises
          </Link>
          <nav className="hidden lg:block">
            <ul className="flex gap-20 mt-2 font-p_md">
              <li className="list-none cursor-pointer">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="list-none cursor-pointer">
                <Link href={"/services"}>Services</Link>
              </li>
              <li className="list-none cursor-pointer">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="list-none cursor-pointer">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          {menu ? (
            <FaTimes
              className="mt-3 lg:hidden"
              onClick={handleMenuToggle}
            />
          ) : (
            <FaBars
              className="mt-3 lg:hidden"
              onClick={handleMenuToggle}
            />
          )}
        </div>
      </header>
      {menu && (
        <div className="pt-10 pl-5 w-screen h-[90vh] overflow-hidden bg-neutral-900">
          <ul className="flex flex-col gap-10 font-p_regular text-2xl text-white">
            <Link href={"/"} onClick={handleMenuToggle}>
              <li className="list-none cursor-pointer">Home</li>
            </Link>
            <Link href={"/services"} onClick={handleMenuToggle}>
              <li className="list-none cursor-pointer">Services</li>
            </Link>
            <Link href={"/about"} onClick={handleMenuToggle}>
              <li className="list-none cursor-pointer">About</li>
            </Link>
            <Link href={"/contact"} onClick={handleMenuToggle}>
              <li className="list-none cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>
      )}
      {!menu && (
        <>
          <Component {...pageProps} />
          <Footer />
        </> 
      )}
    </div>
  );
}