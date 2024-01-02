"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link className="hover:text-gray-300" href="/">
            B-Health Tracker
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className="hover:text-gray-300" href="/">
            หน้าแรก
          </Link>
          <Link className="hover:text-gray-300" href="/dashboard">
            ข้อมูลของทุกคน
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleDropdown}
        >
          <Image src="/navbar-dropdown.svg" alt="Dropdown" className=""  width={32} height={32}/>
        </button>
      </div>
    </nav>
  );
};
