import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="flex items-center justify-center py-16 mx-16 gap-16 bg-gray-100 p-8 rounded-[28px]">
      <div>
        <img
          src="/assets/logo/m-azul-overlay-sin-fondo.webp"
          alt="Logo de Medusa"
          className="w-[338px]"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 px-10">
          <h2 className="text-[45px] font-w-bold text-var-dark-blue">
            Una dosis semanal de buenas noticias
          </h2>
          <p className="text-[18px]">
            Si tenés más preguntas o necesitas clarificaciones adicionales,
            nuestro equipo está listo para ofrecerte la información que
            necesitas.
          </p>
        </div>
        <form className="flex px-10 gap-3">
          <input
            id="name"
            type="text"
            placeholder="Nombre y Apellido"
            autoComplete="name"
            className="w-[260px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[47px]"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-[260px] h-[50px] py-[14px] px-6 border border-var-dark-blue rounded-[47px]"
          />
          <Button type="dark-blue" styles="font-w-regular w-[260px]">
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
