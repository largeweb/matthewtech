"use client";
// src/app/components/Header.tsx
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          <img
            src="/logo.jpg"
            alt="Abstract colorful logo representing creativity and innovation"
            className="h-10"
          />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-gray-800"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-gray-600 hover:text-gray-800"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-gray-800"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://kpi.matthew.tech"
                className="text-gray-600 hover:text-gray-800"
              >
                KPI
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-gray-600 text-2xl" />
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden">
          <ul className="px-4 py-2">
            <li>
              <Link
                href="#projects"
                className="block text-gray-600 hover:text-gray-800 py-2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block text-gray-600 hover:text-gray-800 py-2"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block text-gray-600 hover:text-gray-800 py-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://kpi.matthew.tech"
                className="block text-gray-600 hover:text-gray-800 py-2"
              >
                KPI
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
