import Button from "./Button";

function IntroSection() {
  return (
    <section>
      <img
        src="/assets/backgrounds/intro-banner.webp"
        alt="main image"
        className="w-screen"
      />
      <div className="absolute top-1/2 left-[90px] text-left flex flex-col gap-[28px] px-[25px] py-[21px] w-[702px]">
        <p className="text-white text-[22px]">
          Invierte en un Futuro Sostenible para las Próximas Generaciones.
        </p>
        <div className="flex flex-row gap-10">
          <h1 className="text-6xl font-bold text-white text-[70px]">
            Atrévete a soñar
          </h1>
          <img
            src="/assets/icons/arrow.png"
            alt="arrow-icon"
            className="w-[66px] h-[66px]"
          />
        </div>
        <h1 className="text-6xl font-bold text-white text-[70px]">
          con energía renovable
        </h1>
        <div className="flex flex-row gap-4">
          <Button
            type="white"
            styles="w-[123px] h-[51px]"
            content="Únete Hoy"
          />
          <Button
            type="transparent"
            styles="w-[205px] h-[51px]"
            content="Resolvemos tus dudas"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
