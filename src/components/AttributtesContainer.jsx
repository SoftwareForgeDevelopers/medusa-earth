import AttributtesCard from "./AttributtesCard";

function AttributteContainer() {
  return (
    <div className="flex flex-row gap-[48px]">
      <AttributtesCard
        type="dark"
        title="Financiamiento simplificado"
        description="Obtenemos financiamiento de forma rápida
y sencilla para constructores."
        icon="/assets/icons/paid.png"
      />
      <AttributtesCard
        type="ligth-airwave"
        title="Inversiones Transparentes"
        description="Ofrecemos proyectos de energía renovable
        con retornos sólidos y transparentes."
        icon="/assets/icons/airwave.png"
      />
      <AttributtesCard
        type="ligth-energy-savings"
        title="Energía Limpia"
        description="Facilitamos el acceso a energía renovable
        sin necesidad de inversiones costosas."
        icon="/assets/icons/energy_savings_leaf.png"
      />
    </div>
  );
}

export default AttributteContainer;
