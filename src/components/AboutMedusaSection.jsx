import React from "react";
import Button from "./Button";
import Label from "./Label";

function AboutMedusaSection() {
  return (
    <div id="about-medusa-section" className="h-[890px] flex py-28 px-16 gap-20 tablet:px-32 laptop:px-52">
      <div className="w-1/2 relative">
        <img
          src="/assets/backgrounds/solar-panels.webp"
          alt="Solar Panels"
          className="h-full w-full rounded-[28px] object-cover object-right"
        />
        <img
          src="/assets/icons/arrow.png"
          alt="arrow-icon"
          className="w-[100px] h-[100px] absolute bottom-0 right-0 mb-5 mr-5"
        />
      </div>

      <div className="w-1/2 flex flex-col gap-9">
        <Label text="Sobre Medusa" />

        <h3 className="h-36 flex-row items-center text-[60px] text-var-dark-blue leading-snug">
          Iluminando{" "}
          <span className="block">
            un Mañana <span className="font-w-bold">Sostenible</span>
          </span>
        </h3>

        <p className="text-[22px]">
          Medusa Energy actúa como un puente entre inversores, constructores y
          consumidores, facilitando la colaboración y el desarrollo de proyectos
          de energía renovable de manera eficiente y efectiva.
        </p>

        <div className="grid grid-cols-2 gap-x-12">
          <div className="flex flex-col">
            <h4 className="text-var-dark-blue font-bold text-[25px]">
              Conexión Integral
            </h4>
            <p className="text-[18px]">
              Une a inversores, constructores y consumidores para proyectos
              energéticos eficientes.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-var-dark-blue font-bold text-[25px]">
              Asesoría Expertizada
            </h4>
            <p className="text-[18px]">
              No solo ofrecemos financiamiento, sino también orientación
              especializada en energía renovable.
            </p>
          </div>
        </div>

        <Button
          type="dark-blue"
          styles="font-w-regular w-[162px]"
          content="Empezar ahora"
        />
      </div>
    </div>
  );
}

export default AboutMedusaSection;
