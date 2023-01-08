import React from "react";
import ImgCar from "./../../assets/img/cars/vwgolf.jpg";
import ImgTransport from "./../../assets/img/cars/mercedes-transport.jpg";
import ImgPremium from "./../../assets/img/cars/ferrari.jpg";
import Card from "./subcomponents/CardOffer";

const Offer = () => {
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4  rounded-md shadow-md" id='offer'>
      <div className="text-center m-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Oferujemy samochody
        </h2>
      </div>

      <div className="container mx-auto flex flex-wrap space-x-4 justify-center">
        <Card
          title="Osobowe"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod"
          imgSrc={ImgCar}
        />
        <Card
          title="Dostawcze"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod"
          imgSrc={ImgTransport}
        />
        <Card
          title="Premium"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod"
          imgSrc={ImgPremium}
        />
      </div>
    </section>
  );
};

export default Offer;
