import React from "react";
import { GiChemicalTank, GiCalendar, GiCityCar } from "react-icons/gi";
const CarCard = (props) => {
  return (

      <div className="bg-white">
        <div>
          <div className="shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <div>
              <img className="w-full" src={props.imgSrc} alt=''/>
              <div className="px-4 py-2">
                <h1 className="text-xl text-blackCoffee font-bold">
                  {props.brand} {props.model}
                </h1>
                <div className="flex space-x-2 mt-2">
                  <h3 className="text-lg text-blackCoffee font-semibold mb-2">
                    {props.year}
                  </h3>
                </div>
                <div className="flex">
                  <GiCalendar size={28} />
                  <span className="p-2 text-lg font-bold">{props.year}</span>
                  <GiChemicalTank size={28} />
                  <span className="p-2 text-lg font-bold">{props.fuel}</span>
                  <GiCityCar size={28} />
                  <span className="p-2 text-lg font-bold">{props.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default CarCard;
