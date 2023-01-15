import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const PricingTab = (props) => {
  return (
    <div
      className={`relative bg-white shadow-md  border border-blackCoffee col-span-full md:col-span-3`}
    >
      <div
        className={`relative top-0 left-0 right-0 h-1 bg-${props.color}`}
        aria-hidden="true"
      ></div>
      <div className="p-4 border-b border-blackCoffee">
        {/* ____ Card Header _____ */}
        <header className="flex items-center mb-2">
          <div
            className={`w-5 h-5 rounded-full flex-shrink-0 bg-${props.color}`}
          >
            <AiOutlinePlus size={20} />
          </div>
          <h3 className="text-lg text-blackCoffee font-semibold mx-auto">
            {props.name}
          </h3>
        </header>
        {/* ____ Description ____ */}
        <div className="text-sm m-2">{props.description}</div>
        {/* ____ Price ____ */}
        <div className="text-blackCoffee font-bold text-center">
          <span className="text-2xl">Już od </span>
          <br />
          <span className="text-3xl p-1">{props.price}</span>
          <span className="text-2xl"> zł</span>
          <span className="text-gray-500 font-medium text-sm">/miesiąc</span>
        </div>
        <button
          className={`bg-${props.color} font-medium text-md inline-flex items-center justify-center px-3 py-2 border border-blackCoffee rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-blackCoffee w-full`}
        >
          Sprawdź
        </button>
      </div>
    </div>
  );
};

export default PricingTab;
