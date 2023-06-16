import React from "react";

const HowToRent = () => {
  return (
    <section id="howtorent" className="p-4 mx-auto my-4 rounded-md shadow-md max-w-screen-2xl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">Jak to działa?</h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold text-white rounded-full bg-blue">
              1
            </div>
            <h4 className="text-2xl font-semibold">Wybierz pojazd</h4>
            <p className="text-lg">
              Wybierz interesujący Cię pojazd z listy dostępnych samochodów.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold text-white rounded-full bg-blue">
              2
            </div>
            <h4 className="text-2xl font-semibold">Uzupełnij formularz</h4>
            <p className="text-lg">
              Podaj dane dzięki którym obliczymy koszty wypozyczenia samochodu.
            </p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold text-white rounded-full bg-blue">
              3
            </div>
            <h4 className="text-2xl font-semibold">Złóż rezerwację</h4>
            <p className="text-lg">
              Podczas odbioru samochodu dopełnimy pozostałych formalności.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToRent;
