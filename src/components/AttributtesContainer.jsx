import AttributtesCard from "./AttributtesCard";

function AttributteContainer() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-[48px]">
      <AttributtesCard
        type="ligth-airwave"
        title="Financiamiento simplificado"
        description="Obtenemos financiamiento de forma rápida
y sencilla para constructores."
        icon="/assets/icons/paid-blue.webp"
      />
      <AttributtesCard
        type="ligth-airwave"
        title="Inversiones Transparentes"
        description="Ofrecemos proyectos de energía renovable
        con retornos sólidos y transparentes."
        icon="/assets/icons/airwave-blue.webp"
      />
      <AttributtesCard
        type="ligth-energy-savings"
        title="Energía Limpia"
        description="Facilitamos el acceso a energía renovable
        sin necesidad de inversiones costosas."
        icon="/assets/icons/energy-savings-leaf-blue.webp"
      />
    </div>
  );
}

export default AttributteContainer;
