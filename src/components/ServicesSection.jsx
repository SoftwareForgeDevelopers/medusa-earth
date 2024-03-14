import Label from "./Label";
import Service from "./Service";

function ServicesSection() {
  return (
    <div className="flex flex-col gap-16 mb-28">
      <div className="flex flex-col items-center">
        <Label text="Servicios" />
        <h3 className="text-60 text-var-dark-blue font-w-bold">
          Servicios Energéticos:
        </h3>
        <p className="text-60 text-var-dark-blue">
          Potenciando Tu Impacto Ambiental
        </p>
        <div className="w-617 text-center">
          <p className="text-22">
            Descubre cómo nuestros servicios te acercan a una energía más limpia
            y sostenible, transformando el futuro de la energía renovable.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <Service
          type="light"
          imageLayout={1}
          link="Financiamiento Energético"
          title="Cataliza tu Proyecto"
          buttonText="Conviértete en Proyectista"
          description="Recibe orientación experta para maximizar el éxito de tus proyectos de energía renovable."
          listTexts={[
            "Rápido acceso a fondos",
            "Proceso simple y transparente",
            "Financiamiento adaptado",
          ]}
        />
        <Service
          type="dark"
          imageLayout={2}
          link="Inversión Responsable"
          title="Invierte en un Futuro Brillante"
          buttonText="Conviértete en Inversionista"
          description="Multiplica tus ganancias y deja una huella positiva en el planeta con nuestras oportunidades de inversión responsable."
          listTexts={[
            "Oportunidades de inversión responsable.",
            "Retornos atractivos y sostenibles.",
            "Contribución al futuro sostenible.",
          ]}
        />
        <Service
          type="light-blue"
          imageLayout={3}
          link="Métricas de impacto"
          title="Analizá tu impacto"
          buttonText="Invierte ahora"
          description="Con Medusa vas a poder tener un mayor control
en tu inversión ¡Invertí ahora y analizá tu impacto!"
          listTexts={[
            "Rápido acceso métricas",
            "Visualización proyectos",
            "Proyecciones acertadas",
          ]}
        />
      </div>
    </div>
  );
}

export default ServicesSection;
