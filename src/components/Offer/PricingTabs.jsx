import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PriceCategories from '../../assets/data/PriceCategories'
const PricingTabs = () => {
  
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4  rounded-md shadow-md">
      <h2 className="text-3xl py-5 text-center md:text-4xl font-extrabold mb-4">
        Kategorie cenowe
      </h2>
      <div className="grid grid-cols-12 gap-6">
        {PriceCategories.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-md  border border-blackCoffee col-span-full md:col-span-3`}
          >
            
            <div
              className={`relative top-0 left-0 right-0 h-1 bg-${item.color}`}
              aria-hidden="true"
            ></div>
            <div className="p-4 border-b border-blackCoffee">
              {/* ____ Card Header _____ */}
              <header className="flex items-center mb-2">
                <div
                  className={`w-5 h-5 rounded-full flex-shrink-0 bg-${item.color}`}
                >
                  <AiOutlinePlus size={20} />
                </div>
                <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
                  {item.name}
                </h3>
              </header>
              <div class="text-center py-4 px-7">
                        <h1 class="text-blackCoffee text-4xl font-black">${item.price}</h1>
                        <p class="text-blackCoffee  mt-2">Monthely</p>     
                    </div>
              {/* ____ Description ____ */}
              <div className="text-sm m-2">{item.description}</div>
              {/* ____ Price ____ */}
              <button
                className={`bg-${item.color} font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full`}
              >
                Sprawdź
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTabs;
