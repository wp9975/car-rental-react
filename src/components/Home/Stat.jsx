import React from "react";

const Stat = () => {
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4 rounded-md shadow-md">
      <div className="mx-auto text-center">
        <h2 class="text-3xl font-bold  sm:text-4xl">Dlaczego my?</h2>
        <p class="mt-4 sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>
      <div className="m-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt class="text-lg font-medium">Flota ponad</dt>

          <dd class="text-4xl font-extrabold md:text-5xl">200</dd>

          <dt class="order-last text-lg font-medium">samochodów</dt>
        </div>
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt class="text-lg font-medium">Ponad</dt>
          <dt class="order-last text-lg font-medium">zadowolonych klientów</dt>

          <dd class="text-4xl font-extrabold md:text-5xl">20tyś.</dd>
        </div>
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt class="text-lg font-medium">Biura w</dt>
          <dt class="order-last text-lg font-medium">miastach w Polsce</dt>

          <dd class="text-4xl font-extrabold md:text-5xl">9</dd>
        </div>
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          

          <dd class="text-4xl font-extrabold md:text-5xl">24h</dd>

          <dt class="order-last text-lg font-medium">Całodobowa obsługa</dt>
        </div>
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          

          <dd class="text-4xl font-extrabold md:text-5xl">0</dd>

          <dt class="order-last text-lg font-medium">Bezpłatne odwołanie rezerwacji</dt>
        </div>
        <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          

          <dd class="text-4xl font-extrabold md:text-5xl">0</dd>

          <dt class="order-last text-lg font-medium">Brak limitu kilometrów</dt>
        </div>
      </div>
    </section>
  );
};

export default Stat;
