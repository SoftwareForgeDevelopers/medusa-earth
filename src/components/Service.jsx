import Button from "./Button";
import ServiceListItem from "./ServiceListItem";

function Service({ type, imageLayout }) {
  let className =
    "m-64 px-42 py-41 flex flex-row items-center justify-around gap-80 rounded-34";
  let titleClassName = "text-45 font-w-bold";
  let buttonClassName = "font-w-regular h-51 mt-10 text-18";
  let linkClassName = "text-18 underline font-w-bold";
  let descriptionClassName = "text-22";

  if (type === "light") {
    className += " bg-var-very-light-grey";
    titleClassName += " text-var-dark-blue";
    linkClassName += " text-var-dark-blue";
  } else if (type === "light-blue") {
    className += " bg-var-very-light-grey";
    titleClassName += " text-var-dark-blue";
  } else if (type === "dark") {
    className += " bg-var-dark-blue";
    linkClassName += " text-white";
    titleClassName += " text-white";
    descriptionClassName += " text-white";
  }

  return (
    <div className={className}>
      <div className="relative">
        {imageLayout === 1 ? (
          <>
            <img
              src="/assets/backgrounds/gradient-background.png"
              alt="background"
            />
            <img
              src="/assets/services/cp-image.png"
              alt="cp-image"
              className="absolute top-16 right-12"
            />
            <img
              src="/assets/services/cp-image.png"
              alt="cp2-image"
              className="absolute top-1/2 left-12"
            />
          </>
        ) : imageLayout === 2 ? (
          <div className="flex flex-col items-end">
            <img
              src="/assets/services/ifb-image.png"
              alt="background"
            />
            <img
              src="/assets/services/ifb2-image.png"
              alt="cp-image"
              className=""
            />
          </div>
        ) : (
          <>
            <img
              src="/assets/backgrounds/blue-background.png"
              alt="background"
            />
            <img
              src="/assets/services/ati-image.png"
              alt="cp-image"
              className="absolute top-16 right-12"
            />
          </>
        )}
      </div>
      <div className="flex flex-col items-start justify-center gap-6">
        <p className={linkClassName}>Financiamiento energetico</p>
        <h3 className={titleClassName}>Cataliza tu proyecto</h3>
        <p className={descriptionClassName}>
          Recibe orientación experta para maximizar el éxito de tus proyectos de
          energía renovable.
        </p>
        <ul className="flex flex-col gap-6">
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content="Rápido acceso a fondos"
          />
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content="Proceso simple y transparente"
          />
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content="Financiamiento adaptado"
          />
        </ul>
        <Button
          type={type === "dark" ? "white" : "dark-blue"}
          styles={buttonClassName}
        >
          Conviértete en Proyectista{" "}
          <span>
            <img
              src="/assets/icons/little-arrow-white.webp"
              alt="arrow-up"
              className="w-5"
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Service;
