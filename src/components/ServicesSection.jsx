import Label from "./Label";

function ServicesSection() {
  return (
    <div className="flex flex-col gap-128 mt-7">
      <div className="flex flex-col items-center">
        <Label text="Servicios" />
        <h3 className="text-60 text-var-dark-blue font-w-bold">
          Servicios Energéticos:
        </h3>
        <p className="text-60 text-var-dark-blue">
          Potenciando Tu Impacto Ambienta
        </p>
        <div className="w-617 text-center">
          <p className="text-22">
            Descubre cómo nuestros servicios te acercan a una energía más limpia
            y sostenible, transformando el futuro de la energía renovable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
