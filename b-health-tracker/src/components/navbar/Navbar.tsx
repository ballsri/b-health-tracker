"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavbarDropdownIcon from "../icon/navbar-dropdown";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };
  // Reference to the dropdown menu
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      // If the click is outside the dropdownRef element, close the dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsClicked(false);
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link className="hover:text-gray-300" href="/">
            B-Health Tracker
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link className="hover:text-gray-300" href="/dashboard">
            ลงข้อมูลรายวัน
          </Link>
          <Link className="hover:text-gray-300" href="/dashboard">
            ข้อมูลของทุกคน
          </Link>
        </div>
        <button
          className={`md:hidden focus:outline-none hover:bg-gray-500 hover:bg-opacity-25 p-1 rounded-full transition duration-150 ease-in-out ${
            isClicked
              ? "bg-gray-600 hover:bg-gray-500"
              : "hover:bg-gray-500 hover:bg-opacity-25"
          } p-1 rounded-full transition duration-150 ease-in-out`}
          onClick={toggleDropdown}
          ref={buttonRef}
        >
          <NavbarDropdownIcon className="w-6 h-6" />
        </button>

        <div
          className={`absolute top-14 right-0 w-48 bg-gray-800 text-white flex flex-col items-start py-2 px-4 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          ref={dropdownRef}
        >
          <Link href="/about" className="hover:text-gray-300 py-1">
            ลงข้อมูลรายวัน
          </Link>
          <Link href="/contact" className="hover:text-gray-300 py-1">
            ข้อมูลของทุกคน
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};
