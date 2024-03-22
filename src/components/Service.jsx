import Button from "./Button";
import ServiceListItem from "./ServiceListItem";

function Service({
  type,
  imageLayout,
  link,
  title,
  description,
  listTexts,
  buttonText,
}) {
  let className =
    "mx-[64px] px-[42px] py-[41px] flex flex-row items-center justify-around gap-[80px] rounded-[34px]";
  let titleClassName = "text-[45px] font-w-bold";
  let buttonClassName = "font-w-regular h-[51px] mt-10 text-[18px]";
  let linkClassName = "text-[18px] underline font-w-bold";
  let descriptionClassName = "text-[22px]";

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
            <img src="/assets/services/ifb-image.png" alt="background" />
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
        <p className={linkClassName}>{link}</p>
        <h3 className={titleClassName}>{title}</h3>
        <p className={descriptionClassName}>{description}</p>
        <ul className="flex flex-col gap-6">
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content={listTexts[0]}
          />
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content={listTexts[1]}
          />
          <ServiceListItem
            type={type === "light" || type === "light-blue" ? "dark" : "light"}
            content={listTexts[2]}
          />
        </ul>
        <Button
          type={type === "dark" ? "white" : "dark-blue"}
          styles={buttonClassName}>
          {buttonText + " "}
          <span>
            <img
              src="/assets/icons/little-arrow-white.webp"
              alt="arrow-up"
              className="w-5 h-4"
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Service;
