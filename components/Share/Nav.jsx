"use client";

import Image from "next/image";
import React from "react";
import logo from '@/public/assets/logo.svg';
import { ArrowRight} from "lucide-react"

const Nav = () => {
  return (
    <div className="bg-blue-300 h-24 w-full flex justify-center items-center">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={60}
            className="w-32 sm:w-44 object-contain"
          />
        </div>

        <div className="flex justify-between items-center">
          <ul className="flex justify-center items-center gap-8 mr-8 font-medium text-2xl text-black cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>

          <button className="px-10 py-3 bg-[#5044e5] text-white rounded-4xl shadow transition-transform duration-500 hover:-translate-y-1 cursor-pointer flex justify-center items-center gap-5">
            Login <ArrowRight ></ArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
