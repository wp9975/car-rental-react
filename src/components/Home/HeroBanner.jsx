import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)]">
      <div className="absolute inset-0 bg-gray/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray/80 sm:to-silver/15"></div>

      <div class="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            <strong class="block font-extrabold text-white">
            Znajdź dla siebie idealny samochód
            </strong>
          </h1>


          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/carlist"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blackCoffee shadow hover:font-bold focus:outline-none focus:ring sm:w-auto"
            >
              Znajdź samochód
            </Link>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blackCoffee shadow hover:font-bold focus:outline-none focus:ring sm:w-auto"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
