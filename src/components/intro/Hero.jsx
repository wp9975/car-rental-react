import React from "react";
import keyspic from './../../assets/img/car-keys-intro.jpg';

const Hero = () => {
  return (
    <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-center overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          Car Renalio
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          Wynajmij samochód w jednej z najnowocześniejszych wypozyczalni na podkarpaciu! Szybko i bez zbędnych formalności.
        </p>

        <button class="bg-purple-800 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
          Zapoznaj się z naszą ofertą
        </button>

      </div>

      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          className="w-4/5 mx-auto lg:mr-0 slide-in-bottom"
          src={keyspic}
          alt=''
        />
      </div>

    </div>
  );
};

export default Hero;
