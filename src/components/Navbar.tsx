"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center  px-4 py-3 bg-gray-950 text-white relative">
      <div className="flex items-center w-16 h-10 sm:w-20 sm:h-[50px]">
        <Image
          src="https://www.tekika.io/images/Tekika-logo-white.svg"
          alt="App Logo"
          width={200}
          height={100}
          className="mr-2 sm:mr-3"
        />
      </div>
      <div className="flex justify-end">
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
          <Link
            href="/rewards"
            className="hover:text-gray-300 climate-crisis-custom"
          >
            Rewards
          </Link>
          <Link
            href="/collection"
            className="hover:text-gray-300 climate-crisis-custom"
          >
            Collection
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 climate-crisis-custom"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 climate-crisis-custom"
          >
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link
            href="#"
            target="_blank"
            className="hover:text-gray-300 hidden sm:block"
          >
            <BsDiscord className="text-lg sm:text-2xl" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-gray-300 hidden sm:block"
          >
            <BsTwitterX className="text-lg sm:text-xl" />
          </Link>

          <div className="flex items-center space-x-2">
            <div className="hidden sm:block border px-2 bg-gray-700 rounded-md orbitron-custom">
              <h1 className="text-white text-sm orbitron-custom">KumKar.eth</h1>
              <h1 className="opacity-30 text-sm">155 306 TLOS</h1>
            </div>
            <Image
              src="https://pbs.twimg.com/media/GUKNkf2WYAAwDOs.jpg"
              alt="User"
              width={40}
              height={40}
              className="rounded-full sm:w-12 sm:h-12"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black bg-opacity-70 text-white flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          <Link
            href="/rewards"
            className="hover:text-gray-300 climate-crisis-custom"
            onClick={toggleMobileMenu}
          >
            Rewards
          </Link>
          <Link
            href="/collection"
            className="hover:text-gray-300 climate-crisis-custom"
            onClick={toggleMobileMenu}
          >
            Collection
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 climate-crisis-custom"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 climate-crisis-custom"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="#" target="_blank" className="hover:text-gray-300">
              <BsDiscord className="text-2xl" />
            </Link>
            <Link href="#" target="_blank" className="hover:text-gray-300">
              <BsTwitterX className="text-xl" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
