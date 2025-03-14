import React from 'react'
import { Link, NavLink } from "react-router-dom";

function NavbarLayout() {
    return (
        <nav className="  fixed top-0 left-0 w-full z-10 flex items-center  justify-between p-4 bg-blue-600 shadow-md m-0 mx-auto">
      <h1 className="text-2xl font-bold text-white">Protech</h1> 
        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>
          Home
        </NavLink>
        <NavLink to="/fanlar" className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>
          Kurslar
        </NavLink>
       
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>
          About Us
        </NavLink>
        <NavLink to="/narxlar" className={({ isActive }) => isActive ? "text-yellow-300" : "text-white"}>
          Narxlar
        </NavLink>
       
      <div className="space-x-4">
        <NavLink to="/register" className="px-3 py-1 text-white bg-transparent rounded border border-white hover:border-black transition-all duration-300 ">
         Kursga Yozilish
        </NavLink>
      </div>
    </nav>
    )
}

export default NavbarLayout



