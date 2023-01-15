import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [state, setState] = useState(true);
  const stylesLink = 'px-16 py-4 text-2xl md:text-lg md:px-6 md:py-2 bg-darkgray rounded-xl';
  const stylesLinkActive = 'px-16 py-4 text-2xl md:text-lg md:px-6 md:py-2 bg-white text-blackCoffee underline underline-offset-2 rounded-xl';

  return (
    <header className="sticky z-50 top-0 left-0 bg-gray">
      <div className=" mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between py-4 md:px-10  ">
          <div className="text-white border-2 rounded-md border-white cursor-pointer font-bold mx-4">
            <h1 className="text-xl px-2 py-1">CarRentalio</h1>
          </div>

          <nav
            className={`absolute bg-gray py-12 text-white px-5 md:py-0 flex flex-col md:flex-row md:static md:z-auto z-[-1] w-full md:w-auto items-center gap-7 text-lg ${
              state ? "top-20" : "top-[-500px]"
            } transition-all duration-500 ease-in `}
          >
            <NavLink
              to="/"
              className={({isActive}) => isActive ? stylesLinkActive : stylesLink}
            >
              Strona główna
            </NavLink>

            <NavLink
              to="/offer"
              className={({isActive}) => isActive ? stylesLinkActive : stylesLink}
            >
              Oferta
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive}) => isActive ? stylesLinkActive : stylesLink}
            >
              O nas
            </NavLink>

            <NavLink
              to="/contact"
              className={({isActive}) => isActive ? stylesLinkActive : stylesLink}
            >
              Kontakt
            </NavLink>

            <NavLink
              to="/carlist"
              
              className={({isActive}) => isActive ? stylesLinkActive : stylesLink}
            >
              Lista samochodów
            </NavLink>
          </nav>

          <div className="block md:hidden">
            <button
              className="bg-white mx-4 rounded-xl p-4 transition hover:scale-125"
              onClick={() => setState(!state)}
            >
              {state ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
