import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-0 left-0 z-10 flex items-center justify-between w-full py-5 px-4 bg-blue-600 shadow-md m-0 mx-auto">
      {/* Logo */}
      <h1 className="text-2xl md:text-4xl font-bold text-white">Protech</h1>

      {/* Navigation Links for Larger Screens */}
      <div className="hidden md:flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "text-white hover:text-yellow-300 transition-all duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/fanlar"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "text-white hover:text-yellow-300 transition-all duration-300"
          }
        >
          Kurslar
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "text-white hover:text-yellow-300 transition-all duration-300"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/narxlar"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-300"
              : "text-white hover:text-yellow-300 transition-all duration-300"
          }
        >
          Narxlar
        </NavLink>
      </div>

      {/* Register Button for Larger Screens */}
      <div className="hidden md:block space-x-4">
        <NavLink
          to="/register"
          className="px-3 py-1 text-white bg-transparent rounded border border-white hover:border-black transition-all duration-300"
        >
          Kursga Yozilish
        </NavLink>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-16 z-50 left-0 w-full bg-blue-600 shadow-md md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300 transition-all duration-300"
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/fanlar"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300 transition-all duration-300"
              }
              onClick={toggleMenu}
            >
              Kurslar
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300 transition-all duration-300"
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/narxlar"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300 transition-all duration-300"
              }
              onClick={toggleMenu}
            >
              Narxlar
            </NavLink>
            <NavLink
              to="/register"
              className="px-3 py-1 text-white bg-transparent rounded border border-white hover:border-black transition-all duration-300"
              onClick={toggleMenu}
            >
              Kursga Yozilish
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarLayout;
