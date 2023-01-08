import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const PricingTabs = () => {
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4  rounded-md shadow-md">
      <h2 className="text-3xl py-5 text-center md:text-4xl font-extrabold mb-4">
            Kategorie cenowe
          </h2>
        <div className="grid grid-cols-12 gap-6">
          {/* _________ Basic _________ */}
          <div className="relative bg-white shadow-md border border-blackCoffee col-span-full md:col-span-3">
            <div
              className="relative top-0 left-0 right-0 h-1 bg-basic"
              aria-hidden="true"
            ></div>
            <div className="p-4 border-b border-blackCoffee">
              {/* ____ Card Header _____ */}
              <header className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full flex-shrink-0 bg-basic">
                  <AiOutlinePlus size={20} />
                </div>
                <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
                  Basic
                </h3>
              </header>
              {/* ____ Description ____ */}
              <div className="text-sm m-2">
                Lorem ipsum dolor sit amet Quis nostrud exercitation Lorem ipsum
                dolor sit amet Quis nostrud exercitation
              </div>
              {/* ____ Price ____ */}
              <div className="text-blackCoffee font-bold text-center">
                <span class="text-2xl">Już od </span><br/>
                <span className="text-3xl p-1">80</span>
                <span class="text-2xl"> zł</span>
                <span class="text-gray-500 font-medium text-sm">/miesiąc</span>
              </div>
              <button class="bg-basic font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full">
                Sprawdź
              </button>
            </div>
          </div>
          {/* _________ Standard _________ */}
          <div className="relative bg-white shadow-md border border-blackCoffee col-span-full md:col-span-3">
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-standard"
              aria-hidden="true"
            ></div>
            <div className="p-4 border-b border-blackCoffee">
              {/* ____ Card Header _____ */}
              <header className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full flex-shrink-0 bg-standard">
                  <AiOutlinePlus size={20} />
                </div>
                <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
                  Standard
                </h3>
              </header>
              {/* ____ Description ____ */}
              <div className="text-sm m-2">
                Lorem ipsum dolor sit amet Quis nostrud exercitation Lorem ipsum
                dolor sit amet Quis nostrud exercitation
              </div>
              {/* ____ Price ____ */}
              <div className="text-blackCoffee font-bold text-center">
                <span class="text-2xl">Już od </span>
                <span className="text-3xl">120</span>
                <span class="text-2xl"> zł</span>
                <span class="text-gray-500 font-medium text-sm">/miesiąc</span>
              </div>
              <button class="bg-standard font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full">
                Sprawdź
              </button>
            </div>
          </div>
          {/* _________ Medium _________ */}
          <div className="relative bg-white shadow-md border border-blackCoffee col-span-full md:col-span-3">
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-medium"
              aria-hidden="true"
            ></div>
            <div className="p-4 border-b border-blackCoffee">
              {/* ____ Card Header _____ */}
              <header className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full flex-shrink-0 bg-medium">
                  <AiOutlinePlus size={20} />
                </div>
                <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
                  Medium
                </h3>
              </header>
              {/* ____ Description ____ */}
              <div className="text-sm m-2">
                Lorem ipsum dolor sit amet Quis nostrud exercitation Lorem ipsum
                dolor sit amet Quis nostrud exercitation
              </div>
              {/* ____ Price ____ */}
              <div className="text-blackCoffee font-bold text-center">
                <span class="text-2xl">Już od </span>
                <span className="text-3xl">135</span>
                <span class="text-2xl"> zł</span>
                <span class="text-gray-500 font-medium text-sm">/miesiąc</span>
              </div>
              <button class="bg-medium font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full">
                Sprawdź
              </button>
            </div>
          </div>
          {/* _________ Premium _________ */}
          <div className="relative bg-white shadow-md border border-blackCoffee col-span-full md:col-span-3">
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-premium"
              aria-hidden="true"
            ></div>
            <div className="p-4 border-b border-blackCoffee">
              {/* ____ Card Header _____ */}
              <header className="flex items-center mb-2">
                <div className="w-5 h-5 rounded-full flex-shrink-0 bg-premium">
                  <AiOutlinePlus size={20} />
                </div>
                <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
                  Premium
                </h3>
              </header>
              {/* ____ Description ____ */}
              <div className="text-sm m-2">
                Lorem ipsum dolor sit amet Quis nostrud exercitation Lorem ipsum
                dolor sit amet Quis nostrud exercitation
              </div>
              {/* ____ Price ____ */}
              <div className="text-blackCoffee font-bold text-center">
                <span class="text-2xl">Już od </span>
                <span className="text-3xl">160</span>
                <span class="text-2xl"> zł</span>
                <span class="text-gray-500 font-medium text-sm">/miesiąc</span>
              </div>
              <button class="bg-premium font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full">
                Sprawdź
              </button>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default PricingTabs;
