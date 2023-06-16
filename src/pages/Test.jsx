import React, { useState } from "react";
import pic from "../assets/img/cars/ferrari.jpg";
import {
  BiCalendar,
  BiGasPump,
  BiBattery,
  BiCheckDouble,
} from "react-icons/bi";
import Button from "./components/Button";

const Test = () => {


  const [selected, setSelected] = useState("");
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" }
  ];

  const handleChange = e => setSelected(e.target.value);

  return (
<div>


<button class="bg-blue hover:bg-gray text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  Click Me!
</button>
<div class="container">
  <div class="row">
    <div class="col-lg-4">
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-lg font-semibold">Standardowa</h3>
        <p class="text-gray-600 mb-4">Opcja standardowa zapewnia samochód z najnowszymi udogodnieniami, takimi jak system nawigacji, odtwarzacz CD/MP3 i system Bluetooth.</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-lg font-semibold">Podstawowa</h3>
        <p class="text-gray-600 mb-4">Opcja podstawowa zapewnia samochód z podstawowymi udogodnieniami, takimi jak radio, klimatyzacja i komputer pokładowy.</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="bg-white p-4 rounded-md shadow">
        <h3 class="text-lg font-semibold">Premium</h3>
        <p class="text-gray-600 mb-4">Opcja premium zapewnia samochód z najlepszymi udogodnieniami, takimi jak system kamer, skórzana tapicerka i system nawigacji satelitarnej.</p>
      </div>
    </div>
  </div>
</div>





 
    <div className={`bg-gradient-to-r from-lightgray to-white`}>
      <select
        className={`w-full py-2 px-4 text-lg font-bold bg-transparent border-2 border-gray-200 focus:outline-none`}
        onChange={handleChange}
        value={selected}
      >
        {options.map(option => (
          <option
            className={`transition duration-500 ease-in-out transform origin-left`}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  

    <section className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Address</h3>
            <p className="mt-2 text-base text-gray-500">
              123 Main Street
              <br />
              Anytown, USA 12345
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">
              info@example.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-base text-gray-500">
              (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  




</div>
  );
};

export default Test;
