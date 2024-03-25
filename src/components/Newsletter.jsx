import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center py-16 mx-7 gap-[21px] bg-gray-100 p-8 rounded-[28px] phone:mx-16 tablet:flex-row tablet:gap-0 desktop:gap-16">
      <div>
        <img
          src="/assets/logo/m-azul-overlay-sin-fondo.webp"
          alt="Logo de Medusa"
          className="w-[325px] phone:w-[250px] max-w-[338px] laptop:w-[325px] desktop:min-w-[338px]"
        />
      </div>
      <div className="flex flex-col w-full tablet:px-7 desktop:px-10 gap-6">
        <div className="flex flex-col w-full gap-3 text-center tablet:text-left">
          <h2 className="text-[30px] font-w-bold text-var-dark-blue tablet:text-[45px]">
            Una dosis semanal de buenas noticias
          </h2>
          <p className="text-[16px] tablet:text-[18px]">
            Si tenés más preguntas o necesitas clarificaciones adicionales,
            nuestro equipo está listo para ofrecerte la información que
            necesitas.
          </p>
        </div>
        <form className="flex flex-col w-full gap-[21px] tablet:gap-3 tablet:flex-row">
          <input
            id="name"
            type="text"
            placeholder="Nombre y Apellido"
            autoComplete="name"
            className="w-full h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[47px] desktop:max-w-[300px]"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[47px] desktop:max-w-[300px]"
          />
          <Button
            type="dark-blue"
            styles="w-full font-w-regular desktop:max-w-[300px]">
            Suscribirse
            <span>
              <img
                src="/assets/icons/little-arrow-white.webp"
                alt="arrow-up"
                className="w-5 h-4"
              />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
