import Button from "./Button";

function IntroSection() {
  return (
    <section>
      <img
        src="/assets/backgrounds/intro-banner.webp"
        alt="main image"
        className="w-screen"
      />
      <div className="absolute top-1/2 left-90 text-left flex flex-col gap-28 px-25 py-21 w-702">
        <p className="text-white text-22">
          Invierte en un Futuro Sostenible para las Próximas Generaciones.
        </p>
        <div className="flex flex-row gap-10">
          <h1 className="text-6xl font-bold text-white text-70">
            Atrévete a soñar
          </h1>
          <img
            src="/assets/icons/arrow.png"
            alt="arrow-icon"
            className="w-66 h-66"
          />
        </div>
        <h1 className="text-6xl font-bold text-white text-70">
          con energía renovable
        </h1>
        <div className="flex flex-row gap-4">
          <Button type="white" styles="w-123 h-51" content="Únete Hoy" />
          <Button
            type="transparent"
            styles="w-205 h-51"
            content="Resolvemos tus dudas"
          />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
