"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      <div className="flex items-center w-20 h-[50px]">
        <Image
          src="https://www.tekika.io/images/Tekika-logo-white.svg"
          alt="App Logo"
          width={200}
          height={100}
          className="mr-3"
        />
      </div>

     
      <div className="flex items-center space-x-6">
        <Link
          href="/rewards"
          className="hover:text-gray-300 climate-crisis-custom "
        >
          Rewards
        </Link>
        <Link
          href="/collection"
          className="hover:text-gray-300 climate-crisis-custom "
        >
          Collection
        </Link>
        <Link
          href="/blog"
          className="hover:text-gray-300 climate-crisis-custom "
        >
          Blog
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 climate-crisis-custom "
        >
          About
        </Link>

        {/* Social Icons */}
        <Link href="#" target="_blank" className="hover:text-gray-300">
          <BsDiscord className="text-2xl" />
        </Link>
        <Link href="#" target="_blank" className="hover:text-gray-300">
          <BsTwitterX className="text-xl" />
        </Link>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className=" border px-2 bg-gray-700 rounded-md orbitron-custom">
            <h1 className="text-white text-sm orbitron-custom">KumKar.eth</h1>
            <h1 className="opacity-30 text-sm">155 306 TLOS</h1>
          </div>
          <Image
            src="https://pbs.twimg.com/media/GUKNkf2WYAAwDOs.jpg" 
            alt="User"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
