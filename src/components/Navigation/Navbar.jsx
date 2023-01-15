import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="sticky z-50 bg-darkgray flex border-b md:border-0 w-full top-0">
      <div className="px-5 items-center mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between py-4 md:block">
          <a href="#home">Logo</a>

          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              III
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-silver ">
              <a href="#offer" className="m-auto ">
                Oferta
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Link
            to="/carlist"
            className="bg-grayLavender py-4 px-6 rounded-md shadow text-blackCoffee hover:text-silver"
          >
            Przejdź do oferty
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
