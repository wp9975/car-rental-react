import React from "react";

const HowToRent = () => {
  return (
   <section className="max-w-screen-2xl my-4 mx-auto p-4 rounded-md shadow-md">
    	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase dark:text-violet-400">Jak to działa?</span>
		<h2 className="text-5xl font-bold text-center dark:text-gray-50">Building with Mamba is simple</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue text-white">1</div>
				<h4 className="text-2xl font-semibold">
					Wybierz pojazd
				</h4>
        <p className="text-lg">
          Wybierz interesujący Cię pojazd z listy dostępnych samochodów.
        </p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue text-white">2</div>
				<h4 className="text-2xl font-semibold">
        Uzupełnij formularz
				</h4>
        <p className="text-lg">
          Podaj dane dzięki którym obliczymy koszty wypozyczenia samochodu.
        </p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-blue text-white">3</div>
				<h4 className="text-2xl font-semibold">
					Złóż rezerwację
				</h4>
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
