import React from "react";
import Button from "./Button";

function Newsletter() {
  return (
    <div className="flex items-center justify-center py-16 mx-16 gap-16 bg-gray-100 p-8 rounded-28">
      <div>
        <img
          src="/assets/logo/m-azul-overlay-sin-fondo.webp"
          alt="Logo de Medusa"
          className="w-338"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 px-10">
          <h2 className="text-45 font-w-bold text-var-dark-blue">
            Una dosis semanal de buenas noticias
          </h2>
          <p className="text-18">
            Si tenés más preguntas o necesitas clarificaciones adicionales,
            nuestro equipo está listo para ofrecerte la información que
            necesitas.
          </p>
        </div>
        <form className="flex px-10 gap-3">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="w-260 h-50 py-14 px-6 border border-var-dark-blue rounded-47"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-260 h-50 py-14 px-6 border border-var-dark-blue rounded-47"
          />
          <Button type="dark-blue" styles="font-w-regular w-260">
            Suscribirse
            <span>
              <img
                src="/assets/icons/little-arrow-white.webp"
                alt="arrow-up"
                className="w-5"
              />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
