import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [state, setState] = useState(true);

  return (
    <header className="sticky z-50 top-0 left-0 bg-gray">
      <div className=" mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between py-4 md:px-10 px-5 ">
          <div className="text-white cursor-pointer font-bold">
            <h1 className="text-xl">Logo</h1>
          </div>

          <nav
            className={`absolute bg-gray py-12 px-5 md:py-0 flex flex-col md:flex-row md:static md:z-auto z-[-1] w-full md:w-auto items-center gap-7 text-lg ${
              state ? "top-20" : "top-[-500px]"
            } transition-all duration-500 ease-in `}
          >
            <Link
              to="/"
              className="text-white transition hover:text-gray-500/75"
            >
              Strona główna
            </Link>

            <Link
              to="/offer"
              className="text-white transition hover:text-gray-500/75"
            >
              Oferta
            </Link>
            <Link
              to="/about"
              className="text-white transition hover:text-gray-500/75"
            >
              O nas
            </Link>

            <Link
              to="/contact"
              className="text-white transition hover:text-gray-500/75"
            >
              Kontakt
            </Link>

            <Link
              to="/carlist"
              className="text-white p-4 bg-darkgray rounded-lg transition hover:text-gray-500/75"
            >
              Lista samochodów
            </Link>
          </nav>

          <div className="block md:hidden">
            <button
              className="bg-white rounded-xl p-4 transition hover:scale-125"
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
