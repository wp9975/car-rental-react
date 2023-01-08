import React from "react";
import Map from "./subcomponents/Map";
import { FcPhone } from "react-icons/fc";
import { GoLocation, GoMail } from "react-icons/go";

const Contact = () => {
  return (
    <section className="max-w-screen-2xl my-4 mx-auto p-4  rounded-md shadow-md">
      <h2 className="text-3xl md:text-4xl text-center py-5 font-extrabold mb-4">
        Skontaktuj się z nami
      </h2>
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
          <p class="max-w-xl text-lg">
            At the same time, the fact that we are wholly owned and totally
            independent from manufacturer and other group control gives you
            confidence that we will only recommend what is right for you.
          </p>

          <div class="m-8 grid grid-cols-2  ">
            <FcPhone />
            <a href="tel:+4812312313" className=" text-2xl p-2 font-bold">
              +48 123123123
            </a>
            <GoMail />
            <a
              href="mail:contact.carrentalio.com"
              className=" text-2xl p-2 font-bold"
            >
              contact.carrentalio.com
            </a>
            <GoLocation />
            <address class=" p-2 not-italic">
              Jasionka 1042, 36-002 Jasionka
            </address>
          </div>
        </div>
        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form action="" class="space-y-4">
            <div>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Imię"
                type="text"
                id="name"
              />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Adres e-mail"
                  type="email"
                  id="email"
                />
              </div>

              <div>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Numer telefonu"
                  type="tel"
                  id="phone"
                />
              </div>
            </div>

            <div>
              <textarea
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Wiadomość"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div class="mt-4">
              <button
                type="submit"
                class="bg-grayLavender inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
              >
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </div>
      <Map />
    </section>
  );
};

export default Contact;
