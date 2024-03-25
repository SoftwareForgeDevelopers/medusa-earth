import React from "react";
import Button from "./Button";
import Label from "./Label";

function AboutMedusaSection() {
  return (
    <div
      id="about-medusa-section"
      className="flex px-[25px] gap-10 tablet:h-[830px] tablet:flex-row tablet:py-28 tablet:px-16 desktop:px-40 wide:gap-20">
      <div className="hidden tablet:block tablet:w-1/2 relative">
        <img
          src="/assets/backgrounds/solar-panels.webp"
          alt="Solar Panels"
          className="h-full w-full rounded-[28px] object-cover object-right"
        />
      </div>

      <div className="flex flex-col gap-[] tablet:w-1/2 tablet:gap-[26px]">
        <div className="flex justify-center mb-[19px] tablet:mb-0 tablet:justify-normal">
          <Label text="Sobre Medusa" />
        </div>

        <h3 className="h-36 flex-row items-center text-[40px] text-center text-var-dark-blue tablet:leading-snug tablet:text-left laptop:text-[50px] desktop:text-[55px] wide:text-[60px]">
          Iluminando{" "}
          <span className="block">
            un Mañana <span className="font-w-bold">Sostenible</span>
          </span>
        </h3>

        <p className="text-[18px] text-center laptop:text-[22px] tablet:text-left">
          Medusa Energy actúa como un puente entre inversores, constructores y
          consumidores, facilitando la colaboración y el desarrollo de proyectos
          de energía renovable de manera eficiente y efectiva.
        </p>

        <img
          src="/assets/backgrounds/solar-panels.webp"
          alt="Solar Panels"
          className="h-full w-full rounded-[28px] my-10 object-cover object-right tablet:hidden"
        />

        <div className="grid gap-6 mb-9 tablet:grid-cols-2 tablet:gap-x-12 tablet:mb-0">
          <div className="flex flex-col gap-[7px] tablet:gap-0">
            <h4 className="text-var-dark-blue font-bold text-[25px]">
              Conexión Integral
            </h4>
            <p className="text-[16px] laptop:text-[18px]">
              Une a inversores, constructores y consumidores para proyectos
              energéticos eficientes.
            </p>
          </div>

          <div className="flex flex-col gap-[7px] tablet:gap-0">
            <h4 className="text-var-dark-blue font-bold text-[25px]">
              Asesoría Expertizada
            </h4>
            <p className="text-[16px] laptop:text-[18px]">
              No solo ofrecemos financiamiento, sino también orientación
              especializada en energía renovable.
            </p>
          </div>
        </div>

        <Button
          type="dark-blue"
          styles="w-full font-w-regular flex-shrink-0 tablet:w-[162px]"
          content="Empezar ahora"
        />
      </div>
    </div>
  );
}

export default AboutMedusaSection;
