import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "./Links";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full py-5 px-10 md:flex bg-purple-900">
      <div className=" text-2xl text-white">Logo</div>
      <div className={`lg:flex flex-grow items-center ${navbarOpen ? 'flex' : 'hidden'}`}>
        
        <ul className=" grow md:flex justify-center space-x-5 text-white">
          {navLinks.map((link) => (
            <li key={link.name} className="bg-purple-800 rounded-2xl shadow-xl">
              <NavLink to={link.scrollTo} className="text-center">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className=" w-30">
          <a href="/carlist"  className="item-right px-3 py-2 rounded-md bg-purple-600">
            Przejdź do wyboru samochodu
          </a>
        </div>
      </div>

      <button onClick={() => setNavbarOpen((prev) => !prev)} className='lg:hidden bg-black absolute top-3 right-5'>|||</button>
    </nav>
  );
};

export default Navbar;
