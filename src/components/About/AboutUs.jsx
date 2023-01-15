import React from "react";
import ImgCar from "./../../assets/img/cars/vwgolf.jpg";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="max-w-screen-2xl my-4 mx-auto p-4  rounded-md shadow-md"
    >
      <div className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden">
          <img src={ImgCar} alt='img'/>
        </div>
        <div className="py-10">
          <article className="text-blackCoffee">
            <h1 className>O nas</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
              vel mollitia? Vel provident culpa dignissimos possimus,
              perferendis consectetur odit accusantium dolorem amet voluptates
              aliquid, ducimus tempore incidunt quas. Veritatis molestias
              tempora distinctio voluptates sint! Itaque quasi corrupti, sequi
              quo odit illum impedit!
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
