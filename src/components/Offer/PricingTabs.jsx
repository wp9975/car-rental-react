import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import PriceCategories from '../../assets/data/PriceCategories'
const PricingTabs = () => {
  
  return (
    <section className="p-4 mx-auto my-4 rounded-md shadow-md max-w-screen-2xl">
      <h2 className="py-5 mb-4 text-3xl font-extrabold text-center md:text-4xl">
        Kategorie cenowe
      </h2>
      <div className="grid grid-cols-12 gap-6">
        {PriceCategories.map((item, index) => (
          <div
            key={index}
            className={`relative shadow-md  border border-blackCoffee col-span-full md:col-span-3`}
          >
            {console.log(item.color)}
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
                <h3 className="mx-auto text-lg font-semibold text-blackCoffee">
                  {item.name}
                </h3>
              </header>
              <div className="py-4 text-center px-7">
                        <h1 className="text-4xl font-black text-blackCoffee">${item.price}</h1>
                        <p className="mt-2 text-blackCoffee">Monthely</p>     
                    </div>
              {/* ____ Description ____ */}
              <div className="m-2 text-sm">{item.description}</div>
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
