import ServiceListItem from "./ServiceListItem";

function Service({type}) {

    let className = "m-64 px-42 py-41 flex flex-row items-center justify-between gap-80 rounded-34";

    if (type === "light") {
        className += " bg-var-very-light-grey";
    }


  return (
    <div className={className}>
      <div><img src="/assets/backgrounds/gradient-background.png" alt="" /></div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-18 text-var-dark-blue underline font-w-bold">Financiamiento energetico</p>
        <h3 className="text-45 font-w-bold text-var-dark-blue">Cataliza tu proyecto</h3>
        <p className="text-22">Recibe orientación experta para maximizar el éxito de tus proyectos de energía renovable.</p>
        <ul>
            <ServiceListItem type="light" content="Rápido acceso a fondos" />
            <li><p>Proceso simple y transparente</p></li>
            <li><p>Financiamiento adaptado</p></li>
        </ul>
      </div>
    </div>
  );
}

export default Service;