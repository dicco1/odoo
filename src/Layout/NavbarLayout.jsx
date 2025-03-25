import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const translations = {
  en: {
    home: "Home",
    courses: "Courses",
    about: "About Us",
    pricing: "Pricing",
    register: "Register",
  },
  uz: {
    home: "Bosh sahifa",
    courses: "Kurslar",
    about: "Biz haqimizda",
    pricing: "Narxlar",
    register: "Kursga yozilish",
  },
};

function NavbarLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "uz" : "en"));
  };

  return (
    <nav className="top-0 left-0 z-10 flex items-center justify-between w-full py-5 px-4 bg-blue-600 shadow-md m-0 mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold text-white">Protech</h1>

      <div className="flex space-x-4">
        <button
          onClick={toggleLanguage}
          className="text-white border px-2 rounded-md transition-all duration-300 hover:bg-white hover:text-blue-800"
        >
          {language === "en" ? "UZ" : "EN"}
        </button>
      </div>

      <div className="hidden md:flex space-x-6 w-[400px]">
        <NavLink to="/" className="text-white">
          {translations[language].home}
        </NavLink>
        <NavLink to="/fanlar" className="text-white">
          {translations[language].courses}
        </NavLink>
        <NavLink to="/about" className="text-white">
          {translations[language].about}
        </NavLink>
        <NavLink to="/narxlar" className="text-white">
          {translations[language].pricing}
        </NavLink>
      </div>

      <div className="hidden md:block">
        <NavLink
          to="/register"
          className="px-3 py-1 text-white border border-white rounded"
        >
          {translations[language].register}
        </NavLink>
      </div>

      <div className="md:hidden z-50">
        <button className="text-white" onClick={toggleMenu}>
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

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-600 shadow-md md:hidden z-50">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className="text-white"
              onClick={toggleMenu}
            >
              {translations[language].home}
            </NavLink>
            <NavLink
              to="/fanlar"
              className="text-white"
              onClick={toggleMenu}
            >
              {translations[language].courses}
            </NavLink>
            <NavLink
              to="/about"
              className="text-white"
              onClick={toggleMenu}
            >
              {translations[language].about}
            </NavLink>
            <NavLink
              to="/narxlar"
              className="text-white"
              onClick={toggleMenu}
            >
              {translations[language].pricing}
            </NavLink>
            <NavLink
              to="/register"
              className="text-white border border-white px-3 py-1 rounded"
              onClick={toggleMenu}
            >
              {translations[language].register}
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavbarLayout;
