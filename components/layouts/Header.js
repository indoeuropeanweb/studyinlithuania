"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (hero) observer.observe(hero);

    return () => {
      if (hero) observer.unobserve(hero);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 z-50 shadow-sm hover:bg-primary ${scrolled ? 'md:bg-primary' : 'md:bg-black/5'} bg-primary group/item-1 transition duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logos/logo.png"
              alt="Study in Lithuania"
              width={160}
              height={70}
              loading="lazy"
              className={`hidden group-hover/item-1:hidden ${scrolled ? 'hidden' : 'md:block'} transition duration-300`}
            />
            <Image
              src="/assets/images/logos/light-logo.png"
              alt="Study in Lithuania"
              width={160}
              height={70}
              loading="lazy"
              className={`group-hover/item-1:block ${scrolled ? 'block':'md:hidden'} transition duration-300`}
            /> 
          </Link>
          <nav className="hidden md:flex items-center gap-8 xl:gap-10 font-medium">
            <Link href="/" className={`text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Home
            </Link>
            <div className="relative group">
              <span className={`text-sm md:text-md lg:text-base flex items-center font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} cursor-pointer`}>
                Study &nbsp;<FaCaretDown className="size-5"/>
              </span>
              <div className="absolute top-12 left-0 bg-primary shadow-lg w-40 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <Link href="/courses" className="block px-4 font-medium text-gray-100 py-2 text-sm md:text-md lg:text-base hover:text-white">
                  Courses
                </Link>
                <Link href="/admission" className="block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Admission
                </Link>
                <Link href="/working" className="block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Working
                </Link>
                <Link href="/visa-and-residence-permit" className="block px-4 py-2 font-medium text-gray-100 text-sm md:text-md lg:text-base hover:text-white">
                  Visa & PR
                </Link>
              </div>
            </div>

            <Link href="/about" className={`text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              About Us
            </Link>

            <Link href="/gallery" className={`text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Gallery
            </Link>

            <Link href="/contact" className={`text-sm md:text-md lg:text-base font-medium text-gray-100 hover:text-white ${scrolled && 'text-white'} transition`}>
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact-form"
              className={`text-sm md:text-md lg:text-base px-4 py-2 rounded-md hover:bg-white transition duration-300 ${scrolled ? 'bg-gray-100 text-black':'bg-primary text-white'} group-hover/item-1:bg-gray-100 group-hover/item-1:text-black font-medium`}
            >
              Get Free Consultation
            </Link>
          </div>
          <button
            className="md:hidden text-2xl text-white transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>   

      {menuOpen && (
        <div className="md:hidden bg-primary shadow-md px-4 py-5 space-y-4 text-base sm:text-lg transition duration-300">
          <Link href="/" className="block text-gray-100 hover:text-white">
            Home
          </Link>
          <div>
            <button
              onClick={() => setMobileStudyOpen(!mobileStudyOpen)}
              className="w-full flex items-center text-left font-medium text-gray-100 hover:text-white transition duration-300"
            >
              Study&nbsp;<FaCaretDown className="size-4"/>
            </button>

            {mobileStudyOpen && (
              <div className="flex flex-col ml-4 mt-2 space-y-2 text-sm transition duration-300">
                <Link href="/courses" className="font-medium text-gray-100 hover:text-white">Courses</Link>
                <Link href="/admission" className="font-medium text-gray-100 hover:text-white">Admission</Link>
                <Link href="/working" className="font-medium text-gray-100 hover:text-white">Working</Link>
                <Link href="/visa-and-residence-permit" className="font-medium text-gray-100 hover:text-white">Visa & PR</Link>
              </div>
            )}
          </div>

          <Link href="/about" className="block font-medium text-gray-100 hover:text-white">
            About Us
          </Link>

          <Link href="/gallery" className="block font-medium text-gray-100 hover:text-white">
            Gallery
          </Link>

          <Link href="/contact" className="block font-medium text-gray-100 hover:text-white">
            Contact Us
          </Link>

          <Link
            href="#contact-form"
            className="block mt-4 bg-gray-100 hover:bg-white text-black font-medium px-4 py-2 rounded-md text-center"
          >
            Get Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;